// Read a DESIGN.md file (Google's design.md format) into flat token sets.
import { parse as parseYaml } from "yaml";
import { parseColor, type RGBA } from "./color.ts";

export type ColorToken = { name: string; css: string; rgba: RGBA };

export type Tokens = {
  name: string;
  colors: ColorToken[];
  fontSizes: number[]; // px
  fontFamilies: string[]; // lower-case, first family of each typography token
  typeScale: { size: number; family: string }[]; // family as written, for repairs
  spacing: number[]; // px, always includes 0
  radii: number[]; // px, always includes 0
};

export function dimensionPx(v: unknown): number | null {
  if (typeof v === "number") return v;
  if (typeof v !== "string") return null;
  const m = v.trim().match(/^(-?[\d.]+)\s*(px|rem|em)?$/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return m[2] === "rem" || m[2] === "em" ? n * 16 : n;
}

export function firstFamily(stack: string): string {
  return stack.split(",")[0].trim().replace(/^["']|["']$/g, "").toLowerCase();
}

export function splitFrontMatter(md: string): { yaml: string; body: string } {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error("DESIGN.md has no YAML front matter");
  return { yaml: m[1], body: m[2] };
}

function resolveRef(v: unknown, root: Record<string, any>): unknown {
  if (typeof v !== "string") return v;
  const m = v.match(/^\{([\w.-]+)\}$/);
  if (!m) return v;
  return m[1].split(".").reduce<any>((o, k) => (o == null ? o : o[k]), root);
}

const uniq = (xs: number[]) => [...new Set(xs.map((x) => Math.round(x * 100) / 100))].sort((a, b) => a - b);

export function parseDesignMd(md: string): Tokens {
  const fm = parseYaml(splitFrontMatter(md).yaml) ?? {};
  const colors: ColorToken[] = [];
  for (const [name, css] of Object.entries<any>(fm.colors ?? {})) {
    const rgba = parseColor(String(resolveRef(css, fm)));
    if (rgba) colors.push({ name, css: String(css), rgba });
  }
  const fontSizes: number[] = [];
  const families = new Set<string>();
  const typeScale: { size: number; family: string }[] = [];
  for (const t of Object.values<any>(fm.typography ?? {})) {
    const px = dimensionPx(resolveRef(t?.fontSize, fm));
    if (px != null) fontSizes.push(px);
    const fam = resolveRef(t?.fontFamily, fm);
    if (typeof fam === "string") {
      families.add(firstFamily(fam));
      if (px != null) typeScale.push({ size: px, family: fam.split(",")[0].trim().replace(/^["']|["']$/g, "") });
    }
  }
  const dims = (group: Record<string, unknown> | undefined) =>
    Object.values(group ?? {})
      .map((v) => dimensionPx(resolveRef(v, fm)))
      .filter((v): v is number => v != null);
  return {
    name: String(fm.name ?? "unnamed"),
    colors,
    fontSizes: uniq(fontSizes),
    fontFamilies: [...families],
    typeScale,
    spacing: uniq([0, ...dims(fm.spacing)]),
    radii: uniq([0, ...dims(fm.rounded)]),
  };
}
