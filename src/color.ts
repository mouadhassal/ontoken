// Colour maths: parsing, alpha compositing, OKLab distance, WCAG contrast.
import { parse, converter, formatHex } from "culori";

export type RGBA = { r: number; g: number; b: number; a: number }; // r,g,b,a in [0,1]

const toRgb = converter("rgb");
const toOklab = converter("oklab");

export function parseColor(css: string | null | undefined): RGBA | null {
  if (!css) return null;
  const c = parse(css.trim());
  if (!c) return null;
  const rgb = toRgb(c);
  if (!rgb) return null;
  const clamp = (x: number) => Math.min(1, Math.max(0, x ?? 0));
  return { r: clamp(rgb.r), g: clamp(rgb.g), b: clamp(rgb.b), a: rgb.alpha ?? 1 };
}

export const TRANSPARENT: RGBA = { r: 0, g: 0, b: 0, a: 0 };
export const WHITE: RGBA = { r: 1, g: 1, b: 1, a: 1 };

/** Source-over compositing of `top` onto `bottom`. */
export function over(top: RGBA, bottom: RGBA): RGBA {
  const a = top.a + bottom.a * (1 - top.a);
  if (a === 0) return TRANSPARENT;
  const mix = (t: number, b: number) => (t * top.a + b * bottom.a * (1 - top.a)) / a;
  return { r: mix(top.r, bottom.r), g: mix(top.g, bottom.g), b: mix(top.b, bottom.b), a };
}

export function hex(c: RGBA): string {
  return formatHex({ mode: "rgb", r: c.r, g: c.g, b: c.b });
}

export type Lab = [number, number, number];

export function oklab(c: RGBA): Lab {
  const o = toOklab({ mode: "rgb", r: c.r, g: c.g, b: c.b });
  return [o.l, o.a, o.b];
}

/** Euclidean distance in OKLab. 0.02 is roughly one just-noticeable difference. */
export function deltaOK(x: RGBA, y: RGBA): number {
  const [l1, a1, b1] = oklab(x);
  const [l2, a2, b2] = oklab(y);
  return Math.hypot(l1 - l2, a1 - a2, b1 - b2);
}

function lin(u: number): number {
  return u <= 0.04045 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
}

export function luminance(c: RGBA): number {
  return 0.2126 * lin(c.r) + 0.7152 * lin(c.g) + 0.0722 * lin(c.b);
}

/** WCAG 2.x contrast ratio of two opaque colours. */
export function contrast(x: RGBA, y: RGBA): number {
  const [hi, lo] = [luminance(x), luminance(y)].sort((p, q) => q - p);
  return (hi + 0.05) / (lo + 0.05);
}

/** WCAG AA threshold: 3.0 for large text (>= 24px, or >= 18.66px bold), else 4.5. */
export function aaThreshold(fontPx: number, weight: number): number {
  return fontPx >= 24 || (fontPx >= 18.66 && weight >= 700) ? 3 : 4.5;
}
