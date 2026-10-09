// Turn a rendered scene into "usages" (every painted colour, font size, spacing and radius)
// and check each one against the DESIGN.md tokens. Definitions here are the ones frozen
// in PREREGISTRATION.md; change them only with a dated amendment.
import { aaThreshold, contrast, deltaOK, over, parseColor, WHITE, type RGBA } from "./color.ts";
import type { RawEl } from "./render.ts";
import { firstFamily, type Tokens } from "./tokens.ts";

export const TOL_COLOR = 0.02; // OKLab distance: about one just-noticeable difference
export const TOL_PX = 0.5;
export const HAIRLINE_PX = 2; // spacing values <= 2px are exempt (hairlines, optical nudges)

export type Category = "color" | "type" | "spacing" | "radius";
export type Usage = {
  cat: Category;
  kind: string;
  el: number;
  owner: string | null;
  ownerIsSelf: boolean;
  color?: RGBA; // as painted (composited over what is behind it)
  raw?: RGBA; // as declared, alpha included
  px?: number;
  family?: string;
  on: boolean;
  onLenient: boolean; // colours only: a tint (alpha) of a token also passes
};
export type ContrastCheck = {
  el: number;
  owner: string | null;
  ownerIsSelf: boolean;
  kind: "text" | "placeholder";
  fg: RGBA;
  bg: RGBA;
  ratio: number;
  need: number;
  pass: boolean;
  fontSize: number;
  weight: number;
};
export type Report = {
  usages: Usage[];
  contrast: ContrastCheck[];
  effBg: RGBA[];
  visible: boolean[];
  summary: Summary;
};
export type CatSummary = { n: number; on: number; rate: number };
export type Summary = {
  color: CatSummary;
  colorLenient: CatSummary;
  type: CatSummary;
  spacing: CatSummary;
  radius: CatSummary;
  overall: CatSummary;
  allOn: boolean;
  contrastN: number;
  contrastFail: number;
};

export const nearestColor = (c: RGBA, tokens: Tokens) => {
  let best = { name: "", d: Infinity, rgba: c };
  for (const t of tokens.colors) {
    const d = deltaOK(c, t.rgba);
    if (d < best.d) best = { name: t.name, d, rgba: t.rgba };
  }
  return best;
};
export const onColor = (c: RGBA, tokens: Tokens) => nearestColor(c, tokens).d <= TOL_COLOR;
export const onPx = (v: number, scale: number[]) => scale.some((s) => Math.abs(s - v) <= TOL_PX);

/** Nearest scale value; ties go to the larger value. */
export function snapPx(v: number, scale: number[]): number {
  let best = scale[0];
  for (const s of scale) {
    const d = Math.abs(s - v);
    const bd = Math.abs(best - v);
    if (d < bd - 1e-9 || (Math.abs(d - bd) <= 1e-9 && s > best)) best = s;
  }
  return best;
}

const opaque = (c: RGBA): RGBA => ({ ...c, a: 1 });

function autoSides(cls: string): boolean[] {
  const has = (x: string) => cls.split(/\s+/).some((c) => c === x || c.endsWith(`:${x}`));
  const all = has("m-auto");
  return [
    all || has("my-auto") || has("mt-auto"),
    all || has("mx-auto") || has("mr-auto") || has("me-auto"),
    all || has("my-auto") || has("mb-auto"),
    all || has("mx-auto") || has("ml-auto") || has("ms-auto"),
  ];
}

export function gradientColors(bgImage: string): RGBA[] {
  if (!bgImage || !bgImage.includes("gradient")) return [];
  const re = /(rgba?\([^)]*\)|oklch\([^)]*\)|oklab\([^)]*\)|color\([^)]*\)|#[0-9a-f]{3,8}\b)/gi;
  return [...bgImage.matchAll(re)].map((m) => parseColor(m[1])).filter((c): c is RGBA => !!c);
}

export function radiusPx(r: string, w: number, h: number): number | "pill" | 0 {
  if (!r || r === "0px") return 0;
  if (r.endsWith("%")) return parseFloat(r) >= 50 ? "pill" : (parseFloat(r) / 100) * Math.min(w, h);
  const v = parseFloat(r.split(" ")[0]);
  if (!(v > 0)) return 0;
  if (v >= Math.min(w, h) / 2 - TOL_PX) return "pill";
  return v;
}

export function measure(els: RawEl[], tokens: Tokens): Report {
  const n = els.length;
  const effBg: RGBA[] = new Array(n);
  const cumOp: number[] = new Array(n);
  const visible: boolean[] = new Array(n);
  for (const e of els) {
    // els are in document order, so a parent is always processed before its children
    const pBg = e.parent >= 0 ? effBg[e.parent] : WHITE;
    const pOp = e.parent >= 0 ? cumOp[e.parent] : 1;
    const pVis = e.parent >= 0 ? visible[e.parent] : true;
    cumOp[e.i] = pOp * (Number.isFinite(e.opacity) ? e.opacity : 1);
    const bg = parseColor(e.bg) ?? { r: 0, g: 0, b: 0, a: 0 };
    const grad = gradientColors(e.bgImage);
    // a gradient's first stop stands in for what sits behind text on it
    const own = grad.length ? grad[0] : bg;
    effBg[e.i] = over({ ...own, a: own.a * cumOp[e.i] }, pBg);
    visible[e.i] = pVis && e.w > 0 && e.h > 0 && e.visibility !== "hidden" && e.display !== "none" && cumOp[e.i] > 0.01;
  }

  const usages: Usage[] = [];
  const checks: ContrastCheck[] = [];
  const base = (e: RawEl) => ({ el: e.i, owner: e.owner, ownerIsSelf: e.ownerIsSelf });
  const colorUsage = (e: RawEl, kind: string, raw: RGBA, behind: RGBA) => {
    const painted = over({ ...raw, a: raw.a * cumOp[e.i] }, behind);
    const on = onColor(painted, tokens);
    const onLenient = on || (raw.a < 1 && onColor(opaque(raw), tokens));
    usages.push({ cat: "color", kind, ...base(e), color: painted, raw, on, onLenient });
    return painted;
  };

  for (const e of els) {
    if (!visible[e.i] || e.inSvg) continue;
    const parentBg = e.parent >= 0 ? effBg[e.parent] : WHITE;

    // ---- colour
    const bg = parseColor(e.bg);
    if (bg && bg.a > 0) colorUsage(e, "bg", bg, parentBg);
    for (const g of gradientColors(e.bgImage)) colorUsage(e, "gradient", g, parentBg);
    const seenBorder = new Set<string>();
    e.borderW.forEach((w, k) => {
      const c = parseColor(e.borderC[k]);
      if (w > 0 && !["none", "hidden"].includes(e.borderS[k]) && c && c.a > 0 && !seenBorder.has(e.borderC[k])) {
        seenBorder.add(e.borderC[k]);
        colorUsage(e, "border", c, effBg[e.i]);
      }
    });
    if (e.tag === "svg") {
      for (const [kind, v] of [["icon", e.stroke], ["icon-fill", e.fill]] as const) {
        const c = v && v !== "none" ? parseColor(v) : null;
        if (c && c.a > 0) colorUsage(e, kind, c, effBg[e.i]);
      }
    }
    if (e.text > 0) {
      const isPh = e.placeholderColor != null;
      const fgRaw = parseColor(isPh ? e.placeholderColor : e.color);
      if (fgRaw && fgRaw.a > 0) {
        const fg = colorUsage(e, isPh ? "placeholder" : "text", fgRaw, effBg[e.i]);
        const ratio = contrast(fg, effBg[e.i]);
        const need = aaThreshold(e.fontSize, e.fontWeight);
        checks.push({ ...base(e), kind: isPh ? "placeholder" : "text", fg, bg: effBg[e.i], ratio, need, pass: ratio >= need, fontSize: e.fontSize, weight: e.fontWeight });
      }
      // ---- type
      usages.push({ cat: "type", kind: "size", ...base(e), px: e.fontSize, on: onPx(e.fontSize, tokens.fontSizes), onLenient: onPx(e.fontSize, tokens.fontSizes) });
      const fam = firstFamily(e.fontFamily);
      const famOn = tokens.fontFamilies.length === 0 || tokens.fontFamilies.includes(fam);
      usages.push({ cat: "type", kind: "family", ...base(e), family: fam, on: famOn, onLenient: famOn });
    }

    // ---- spacing
    const sides = ["t", "r", "b", "l"];
    e.padding.forEach((v, k) => {
      if (v > HAIRLINE_PX) usages.push({ cat: "spacing", kind: `p${sides[k]}`, ...base(e), px: v, on: onPx(v, tokens.spacing), onLenient: onPx(v, tokens.spacing) });
    });
    const auto = autoSides(e.cls);
    e.margin.forEach((v, k) => {
      const a = Math.abs(v);
      if (!auto[k] && a > HAIRLINE_PX) usages.push({ cat: "spacing", kind: `m${sides[k]}`, ...base(e), px: v, on: onPx(a, tokens.spacing), onLenient: onPx(a, tokens.spacing) });
    });
    if (/(flex|grid)/.test(e.display) && e.nChildren > 1) {
      const rg = parseFloat(e.rowGap) || 0;
      const cg = parseFloat(e.columnGap) || 0;
      const gaps = rg === cg ? [["gap", rg]] : [["gap-y", rg], ["gap-x", cg]];
      for (const [kind, v] of gaps as [string, number][])
        if (v > HAIRLINE_PX) usages.push({ cat: "spacing", kind, ...base(e), px: v, on: onPx(v, tokens.spacing), onLenient: onPx(v, tokens.spacing) });
    }

    // ---- radius (only where it is visible: the element paints a background or border)
    const paints = (bg && bg.a > 0) || seenBorder.size > 0 || e.bgImage.includes("gradient") || e.tag === "img";
    if (paints) {
      const vals = new Set<number>();
      for (const r of e.radius) {
        const v = radiusPx(r, e.w, e.h);
        if (typeof v === "number" && v > 0) vals.add(Math.round(v * 100) / 100);
      }
      for (const v of vals) usages.push({ cat: "radius", kind: "radius", ...base(e), px: v, on: onPx(v, tokens.radii), onLenient: onPx(v, tokens.radii) });
    }
  }

  return { usages, contrast: checks, effBg, visible, summary: summarize(usages, checks) };
}

export function summarize(usages: Usage[], checks: ContrastCheck[]): Summary {
  const cat = (pred: (u: Usage) => boolean, lenient = false): CatSummary => {
    const xs = usages.filter(pred);
    const on = xs.filter((u) => (lenient ? u.onLenient : u.on)).length;
    return { n: xs.length, on, rate: xs.length ? on / xs.length : 1 };
  };
  const s = {
    color: cat((u) => u.cat === "color"),
    colorLenient: cat((u) => u.cat === "color", true),
    type: cat((u) => u.cat === "type"),
    spacing: cat((u) => u.cat === "spacing"),
    radius: cat((u) => u.cat === "radius"),
    overall: cat(() => true),
    contrastN: checks.length,
    contrastFail: checks.filter((c) => !c.pass).length,
  };
  return { ...s, allOn: s.overall.on === s.overall.n };
}
