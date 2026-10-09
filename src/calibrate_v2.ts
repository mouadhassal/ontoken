// Amendment 2 (after the test run; see PREREGISTRATION.md). Kept separate so the frozen
// src/calibrate.ts stays byte-identical to its pinned hash.
import { PNG } from "pngjs";
import { recoverTheme, sentinels, type Screenshot, type Theme } from "./calibrate.ts";
import type { Renderer } from "./render.ts";

const key = (d: Buffer, k: number) => (d[k] << 16) | (d[k + 1] << 8) | d[k + 2];
const hexOf = (n: number) => `#${n.toString(16).padStart(6, "0")}`;

export const isTextVar = (v: string) => v.endsWith("foreground");
const close = (a: number, b: number, tol: number) =>
  Math.abs((a >> 16) - (b >> 16)) <= tol && Math.abs(((a >> 8) & 255) - ((b >> 8) & 255)) <= tol && Math.abs((a & 255) - (b & 255)) <= tol;

/**
 * Text-only variables are
 * recovered from glyph pixels, and with thin glyphs the background behind them can win the
 * vote. v2 keeps the background variables from recoverTheme, then re-votes each text
 * variable using only pixels whose Flowstep colour differs from the background known to be
 * behind them (our render with text made transparent, mapped through the recovered theme).
 */
export async function recoverThemeV2(r: Renderer, shots: Screenshot[], base: Record<string, string> = {}): Promise<Theme> {
  const first = await recoverTheme(r, shots, base);
  const sent = sentinels();
  const sentKey = new Map(Object.entries(sent).map(([v, h]) => [parseInt(h.slice(1), 16), v]));
  const noText = Object.fromEntries(Object.keys(sent).map((v) => [v, isTextVar(v) ? "transparent" : sent[v]]));
  const votes = new Map<string, Map<number, number>>();
  for (const s of shots) {
    const theirs = PNG.sync.read(s.png);
    const o = { width: theirs.width, height: theirs.height };
    const ours = PNG.sync.read((await r.render(s.jsx, { ...o, vars: { ...base, ...sent } })).png);
    const bg = PNG.sync.read((await r.render(s.jsx, { ...o, vars: { ...base, ...noText } })).png);
    const w = Math.min(ours.width, theirs.width, bg.width);
    const h = Math.min(ours.height, theirs.height, bg.height);
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const v = sentKey.get(key(ours.data, (y * ours.width + x) * 4));
        if (!v || !isTextVar(v)) continue;
        const b = key(bg.data, (y * bg.width + x) * 4);
        const bv = sentKey.get(b);
        const behind = bv && first.vars[bv] ? parseInt(first.vars[bv].slice(1), 16) : b;
        const c = key(theirs.data, (y * theirs.width + x) * 4);
        if (close(c, behind, 8)) continue;
        const m = votes.get(v) ?? new Map<number, number>();
        m.set(c, (m.get(c) ?? 0) + 1);
        votes.set(v, m);
      }
  }
  const out: Theme = { vars: { ...first.vars }, support: { ...first.support }, agreement: { ...first.agreement } };
  for (const [v, m] of votes) {
    const total = [...m.values()].reduce((a, b) => a + b, 0);
    const [best, n] = [...m].sort((a, b) => b[1] - a[1])[0];
    out.vars[v] = hexOf(best);
    out.support[v] = total;
    out.agreement[v] = n / total;
  }
  return out;
}


import { l1 } from "./calibrate.ts";
import type { Calibration } from "./pipeline.ts";
import { diffFraction } from "./pixels.ts";

const size = (png: Buffer) => {
  const p = PNG.sync.read(png);
  return { width: p.width, height: p.height };
};

/**
 * Amendment 2 calibration: the frozen calibration with the text variables
 * (--foreground, --*-foreground) replaced by recoverThemeV2's values, and font-serif set to
 * the brand serif where Flowstep paints it. Radii, --font-sans and backgrounds are untouched.
 * Pixel-loss fitting cannot judge text colour (misaligned dark glyphs score worse than
 * invisible ones), so diff/l1 are recomputed for reporting only.
 */
export async function calibrateV2(r: Renderer, shots: Screenshot[], frozen: Calibration, brandSerif: string | null): Promise<Calibration> {
  const base = { "--font-sans": frozen.vars["--font-sans"] };
  const theme = await recoverThemeV2(r, shots, base);
  const vars = { ...frozen.vars };
  const support = { ...frozen.support };
  const agreement = { ...frozen.agreement };
  for (const v of Object.keys(theme.vars).filter(isTextVar)) {
    vars[v] = theme.vars[v];
    support[v] = theme.support[v];
    agreement[v] = theme.agreement[v];
  }
  // Pixel losses could not identify the serif reliably (font changes reflow the layout), so
  // font-serif is mapped to the brand's serif when Flowstep can paint it (checked by eye
  // against Flowstep's PNGs: Ink headlines match Source Serif 4). --font-sans keeps the frozen fit.
  let serif = frozen.serif;
  if (brandSerif && frozen.serif && FLOWSTEP_FONTS.includes(brandSerif)) {
    serif = brandSerif;
    vars["--font-serif"] = `"${brandSerif}", ui-serif, Georgia, serif`;
  }
  const diff: number[] = [];
  const l1s: number[] = [];
  for (const s of shots) {
    const png = (await r.render(s.jsx, { ...size(s.png), vars })).png;
    diff.push(diffFraction(png, s.png));
    l1s.push(l1(png, s.png));
  }
  return { ...frozen, vars, support, agreement, diff, l1: l1s, serif };
}

/**
 * Fonts Flowstep's renderer was seen to paint (exploratory evidence, results/fonts_exploratory.json
 * and the PNGs): Inter (all files), DM Sans (E2-G names it; L1 3.98 with vs 18.04 without),
 * Source Serif 4 (I1-G, I2-G serif headlines). Manrope is not: M1-G names it and Flowstep
 * paints a Times-like fallback.
 */
export const FLOWSTEP_FONTS = ["Inter", "DM Sans", "Source Serif 4"];

/** Flowstep's renderer honours font-['X'] but not Tailwind v4's font-[family-name:X]. */
export function toFlowstepDialect(jsx: string): string {
  return jsx.replace(/font-\[family-name:([^\]]+)\]/g, (_m, f) => `font-['${f}']`);
}
