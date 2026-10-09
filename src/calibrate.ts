// Recover the theme Flowstep painted a file with, from its own PNGs (black-box).
// Flowstep screens reference theme variables (bg-primary, text-muted-foreground, ...)
// whose values it derives from the file's DESIGN.md. They are not returned by the API,
// so: render each screen with every variable set to a unique sentinel colour, then read
// what Flowstep painted at the pixels where each sentinel landed. The mode wins.
import { PNG } from "pngjs";
import { converter, formatHex } from "culori";
import { diffFraction } from "./pixels.ts";
import { THEME_VARS, type Renderer } from "./render.ts";

const toRgb = converter("rgb");

export function sentinels(): Record<string, string> {
  const out: Record<string, string> = {};
  THEME_VARS.forEach((v, i) => {
    const c = toRgb({ mode: "oklch", l: i % 2 ? 0.62 : 0.78, c: 0.14, h: (i * 360) / THEME_VARS.length });
    out[v] = formatHex(c!);
  });
  return out;
}

const key = (d: Buffer, k: number) => (d[k] << 16) | (d[k + 1] << 8) | d[k + 2];
const hexOf = (n: number) => `#${n.toString(16).padStart(6, "0")}`;

export type Screenshot = { jsx: string; png: Buffer };
export type Theme = { vars: Record<string, string>; support: Record<string, number>; agreement: Record<string, number> };

/**
 * Recover theme variables from one file's screens (all share the file's theme).
 * support = pixels voting; agreement = share of votes for the winning colour.
 */
export async function recoverTheme(r: Renderer, shots: Screenshot[], base: Record<string, string> = {}): Promise<Theme> {
  const sent = sentinels();
  const sentKey = new Map(Object.entries(sent).map(([v, h]) => [parseInt(h.slice(1), 16), v]));
  const votes = new Map<string, Map<number, number>>();
  for (const s of shots) {
    const theirs = PNG.sync.read(s.png);
    const ours = PNG.sync.read((await r.render(s.jsx, { width: theirs.width, height: theirs.height, vars: { ...base, ...sent } })).png);
    const w = Math.min(ours.width, theirs.width);
    const h = Math.min(ours.height, theirs.height);
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const v = sentKey.get(key(ours.data, (y * ours.width + x) * 4));
        if (!v) continue;
        const c = key(theirs.data, (y * theirs.width + x) * 4);
        const m = votes.get(v) ?? new Map<number, number>();
        m.set(c, (m.get(c) ?? 0) + 1);
        votes.set(v, m);
      }
  }
  const vars: Record<string, string> = {};
  const support: Record<string, number> = {};
  const agreement: Record<string, number> = {};
  for (const [v, m] of votes) {
    const total = [...m.values()].reduce((a, b) => a + b, 0);
    const [best, n] = [...m].sort((a, b) => b[1] - a[1])[0];
    vars[v] = hexOf(best);
    support[v] = total;
    agreement[v] = n / total;
  }
  return { vars, support, agreement };
}

/** Mean absolute RGB difference per pixel (0..255), over the common area. */
export function l1(a: Buffer, b: Buffer): number {
  const A = PNG.sync.read(a);
  const B = PNG.sync.read(b);
  const w = Math.min(A.width, B.width);
  const h = Math.min(A.height, B.height);
  let s = 0;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = (y * A.width + x) * 4;
      const j = (y * B.width + x) * 4;
      s += Math.abs(A.data[i] - B.data[j]) + Math.abs(A.data[i + 1] - B.data[j + 1]) + Math.abs(A.data[i + 2] - B.data[j + 2]);
    }
  return s / (w * h * 3);
}

export const RADIUS_STEPS = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];

/** Radius scale steps a set of screens uses (rounded-xl, rounded-t-lg, ... -> "xl", "lg"). */
export function usedRadiusSteps(jsx: string[]): string[] {
  const used = new Set<string>();
  for (const s of jsx)
    for (const m of s.matchAll(/\brounded(?:-(?:[trbl]|tl|tr|bl|br|s|e|ss|se|es|ee))?-(xs|sm|md|lg|xl|2xl|3xl|4xl)\b/g)) used.add(m[1]);
  for (const s of jsx) if (/\brounded(?=["\s])/.test(s)) used.add("DEFAULT");
  return RADIUS_STEPS.concat("DEFAULT").filter((k) => used.has(k));
}

/**
 * Fit each radius step the screens use (Tailwind's --radius-<step>) by coordinate descent
 * on pixel L1 against Flowstep's PNGs; candidates 0..24px. Steps never used are not fitted.
 */
export async function fitRadii(r: Renderer, shots: Screenshot[], vars: Record<string, string>): Promise<{ radii: Record<string, string>; l1: number }> {
  const steps = usedRadiusSteps(shots.map((s) => s.jsx));
  const cssVar = (k: string) => (k === "DEFAULT" ? "--radius" : `--radius-${k}`);
  const radii: Record<string, string> = {};
  const score = async (extra: Record<string, string>) => {
    let d = 0;
    for (const s of shots) {
      const t = PNG.sync.read(s.png);
      d += l1((await r.render(s.jsx, { width: t.width, height: t.height, vars: { ...vars, ...radii, ...extra } })).png, s.png);
    }
    return d / shots.length;
  };
  let best = await score({});
  for (let round = 0; round < 2; round++)
    for (const k of steps) {
      for (let px = 0; px <= 24; px++) {
        const d = await score({ [cssVar(k)]: `${px}px` });
        if (d < best - 1e-9) {
          best = d;
          radii[cssVar(k)] = `${px}px`;
        }
      }
    }
  return { radii, l1: best };
}
