// Render a Flowstep JSX screen in headless Chromium and read back what the browser
// actually painted: a PNG plus every element's computed style (the "scene").
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { transformSync } from "esbuild";
import { compile } from "@tailwindcss/node";
import { chromium, type Browser, type Page } from "playwright";
import { PNG } from "pngjs";
import { fileURLToPath } from "node:url";
import { dirname, resolve as resolvePath } from "node:path";
import { instrumentedJsx, parseScreen, type Screen } from "./jsx.ts";
import { resolve, unknownSeen } from "./components.tsx";

const ROOT = resolvePath(dirname(fileURLToPath(import.meta.url)), "..");

// shadcn/ui v4 theme variables (neutral base). colorTheme swaps the primary.
const BASE_VARS: Record<string, string> = {
  "--radius": "0.625rem",
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.141 0.005 285.823)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.141 0.005 285.823)",
  "--popover": "oklch(1 0 0)",
  "--popover-foreground": "oklch(0.141 0.005 285.823)",
  "--primary": "oklch(0.21 0.006 285.885)",
  "--primary-foreground": "oklch(0.985 0 0)",
  "--secondary": "oklch(0.967 0.001 286.375)",
  "--secondary-foreground": "oklch(0.21 0.006 285.885)",
  "--muted": "oklch(0.967 0.001 286.375)",
  "--muted-foreground": "oklch(0.552 0.016 285.938)",
  "--accent": "oklch(0.967 0.001 286.375)",
  "--accent-foreground": "oklch(0.21 0.006 285.885)",
  "--destructive": "oklch(0.577 0.245 27.325)",
  "--border": "oklch(0.92 0.004 286.32)",
  "--input": "oklch(0.92 0.004 286.32)",
  "--ring": "oklch(0.705 0.015 286.067)",
};
const PALETTES = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];

export const THEME_VARS = Object.keys(BASE_VARS).filter((k) => k !== "--radius");

function themeVars(colorTheme: string | undefined, override?: Record<string, string>): string {
  const v = { ...BASE_VARS };
  if (colorTheme && PALETTES.includes(colorTheme)) {
    v["--primary"] = `var(--color-${colorTheme}-600)`;
    v["--primary-foreground"] = `var(--color-${colorTheme}-50)`;
    v["--ring"] = `var(--color-${colorTheme}-400)`;
  }
  Object.assign(v, override ?? {});
  return `:root{${Object.entries(v).map(([k, x]) => `${k}:${x}`).join(";")}}`;
}

const INPUT_CSS = `@import "tailwindcss";
@custom-variant dark (&:is(.dark *));
@theme inline {
  --color-background: var(--background); --color-foreground: var(--foreground);
  --color-card: var(--card); --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover); --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary); --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary); --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted); --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent); --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive); --color-border: var(--border);
  --color-input: var(--input); --color-ring: var(--ring);
}
@layer base { * { border-color: var(--color-border); } }
`;

export type RawEl = {
  i: number;
  parent: number;
  owner: string | null;
  ownerIsSelf: boolean;
  tag: string;
  cls: string;
  inSvg: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
  text: number; // length of direct, non-whitespace text
  color: string;
  bg: string;
  bgImage: string;
  borderW: number[];
  borderC: string[];
  borderS: string[];
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  padding: number[];
  margin: number[];
  rowGap: string;
  columnGap: string;
  display: string;
  nChildren: number;
  radius: string[];
  opacity: number;
  visibility: string;
  stroke: string;
  fill: string;
  placeholderColor: string | null;
};

export type Rendered = {
  png: Buffer;
  width: number;
  height: number;
  els: RawEl[];
  html: string;
  unknown: string[];
  screen: Screen;
};

function scope() {
  return new Proxy(
    {},
    {
      has: (_t, k) => typeof k === "string" && /^[A-Z]/.test(k) && k !== "Fragment",
      get: (_t, k) => (k === Symbol.unscopables ? undefined : resolve(String(k))),
    },
  );
}

/** JSX text -> static HTML via React SSR (no browser JS needed at render time). */
export function toHtml(screen: Screen): { html: string; unknown: string[] } {
  const code = transformSync(instrumentedJsx(screen), { loader: "jsx", jsxFactory: "h", jsxFragment: "Fragment" }).code;
  const expr = code.trim().replace(/;\s*$/, "");
  const fn = new Function("h", "Fragment", "__C", `with (__C) { return (${expr}); }`);
  unknownSeen.clear();
  const el = fn(React.createElement, React.Fragment, scope());
  const html = renderToStaticMarkup(el);
  return { html, unknown: [...unknownSeen] };
}

const GREY = (() => {
  const p = new PNG({ width: 1, height: 1 });
  p.data.set([212, 212, 216, 255]);
  return PNG.sync.write(p);
})();

const EXTRACT = () => {
  const root = document.getElementById("root")!;
  const all = Array.from(root.querySelectorAll("*")) as HTMLElement[];
  const idx = new Map<Element, number>(all.map((e, i) => [e, i]));
  const rr = root.getBoundingClientRect();
  const px = (s: string) => parseFloat(s) || 0;
  return all.map((el, i) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    const ownerEl = el.closest("[data-ot]");
    let text = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3)
      .map((n) => n.textContent ?? "")
      .join("")
      .trim().length;
    let placeholderColor: string | null = null;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      const v = (el as HTMLInputElement).value;
      if (v) text = v.length;
      else if (el.getAttribute("placeholder")) {
        placeholderColor = getComputedStyle(el, "::placeholder").color;
        text = el.getAttribute("placeholder")!.length;
      }
    }
    const sides = ["Top", "Right", "Bottom", "Left"];
    return {
      i,
      parent: idx.get(el.parentElement as Element) ?? -1,
      owner: ownerEl ? ownerEl.getAttribute("data-ot") : null,
      ownerIsSelf: ownerEl === el,
      tag: el.tagName.toLowerCase(),
      cls: el.getAttribute("class") ?? "",
      inSvg: !!el.parentElement?.closest("svg"),
      x: r.x - rr.x,
      y: r.y - rr.y,
      w: r.width,
      h: r.height,
      text,
      color: cs.color,
      bg: cs.backgroundColor,
      bgImage: cs.backgroundImage,
      borderW: sides.map((s) => px((cs as any)[`border${s}Width`])),
      borderC: sides.map((s) => (cs as any)[`border${s}Color`]),
      borderS: sides.map((s) => (cs as any)[`border${s}Style`]),
      fontSize: px(cs.fontSize),
      fontWeight: parseInt(cs.fontWeight) || 400,
      fontFamily: cs.fontFamily,
      padding: sides.map((s) => px((cs as any)[`padding${s}`])),
      margin: sides.map((s) => px((cs as any)[`margin${s}`])),
      rowGap: cs.rowGap,
      columnGap: cs.columnGap,
      display: cs.display,
      nChildren: el.children.length,
      radius: ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map((c) => (cs as any)[`border${c}Radius`]),
      opacity: parseFloat(cs.opacity),
      visibility: cs.visibility,
      stroke: cs.stroke,
      fill: cs.fill,
      placeholderColor,
    };
  });
};

// shadcn derives rounded-sm..xl from --radius; plain Tailwind uses fixed 2/4/6/8/12px.
const SHADCN_RADII = `@theme inline { --radius-sm: calc(var(--radius) - 4px); --radius-md: calc(var(--radius) - 2px); --radius-lg: var(--radius); --radius-xl: calc(var(--radius) + 4px); }`;

export class Renderer {
  private browser: Browser | null = null;
  private compiler: Awaited<ReturnType<typeof compile>> | null = null;
  private page: Page | null = null;
  constructor(private opts: { fonts?: string[]; deviceScaleFactor?: number; radii?: "shadcn" | "tailwind" } = {}) {}

  async open() {
    this.browser = await chromium.launch();
    const ctx = await this.browser.newContext({ deviceScaleFactor: this.opts.deviceScaleFactor ?? 1 });
    // tsx/esbuild wraps functions in __name(); define it so EXTRACT runs in the page.
    await ctx.addInitScript("window.__name = (f) => f;");
    this.page = await ctx.newPage();
    await this.page.route("**/*", (route) => {
      const req = route.request();
      const url = req.url();
      if (url.startsWith("data:") || /fonts\.(googleapis|gstatic)\.com/.test(url)) return route.continue();
      if (req.resourceType() === "image") return route.fulfill({ status: 200, contentType: "image/png", body: GREY });
      return route.abort();
    });
    const css = INPUT_CSS + ((this.opts.radii ?? "tailwind") === "shadcn" ? SHADCN_RADII : "");
    this.compiler = await compile(css, { base: ROOT, onDependency: () => {} });
  }

  async close() {
    await this.browser?.close();
    this.browser = null;
  }

  css(html: string, colorTheme?: string, vars?: Record<string, string>): string {
    const candidates = new Set<string>();
    for (const m of html.matchAll(/class="([^"]*)"/g)) for (const c of m[1].replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").split(/\s+/)) if (c) candidates.add(c);
    return this.compiler!.build([...candidates]) + "\n" + themeVars(colorTheme, vars);
  }

  /**
   * opts.width/height override the metadata comment (Flowstep's MCP returns bare JSX; the
   * size then comes from its own PNG). opts.vars overrides theme variables, e.g. a theme
   * recovered from Flowstep's render by calibrate.ts.
   */
  async render(src: string, opts: { width?: number; height?: number; vars?: Record<string, string>; fonts?: string[] } = {}): Promise<Rendered> {
    if (!this.page) await this.open();
    const screen = parseScreen(src);
    const { html, unknown } = toHtml(screen);
    const width = opts.width ?? (Number(screen.meta.width) || 375);
    const minH = opts.height ?? (Number(screen.meta.height) || 0);
    const fonts = (opts.fonts ?? this.opts.fonts ?? ["Inter"]).map((f) => `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@300..800`).join("&");
    const doc =
      `<!doctype html><html><head><meta charset="utf-8">` +
      (fonts ? `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${fonts}&display=block">` : "") +
      `<style>${this.css(html, screen.meta.colorTheme, opts.vars)}\nhtml,body{margin:0;background:#fff}body{font-family:${JSON.stringify((this.opts.fonts ?? ["Inter"])[0])},ui-sans-serif,system-ui,sans-serif}#root{width:${width}px;min-height:${minH}px;overflow:hidden}</style>` +
      `</head><body><div id="root">${html}</div></body></html>`;
    const page = this.page!;
    await page.setViewportSize({ width, height: Math.max(minH, 400) });
    await page.setContent(doc, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    const els = (await page.evaluate(EXTRACT)) as RawEl[];
    const png = await page.locator("#root").screenshot({ animations: "disabled" });
    const img = PNG.sync.read(png);
    return { png, width: img.width, height: img.height, els, html, unknown, screen };
  }
}
