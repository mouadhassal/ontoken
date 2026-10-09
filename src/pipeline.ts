// Per-file pipeline: calibrate the renderer to Flowstep's own PNGs, measure each screen as
// Flowstep painted it, and repair it.
import { PNG } from "pngjs";
import { hex as rgbHex } from "./color.ts";
import { fitRadii, l1, recoverTheme, type Screenshot } from "./calibrate.ts";
import { measure, type Report } from "./measure.ts";
import { changedFraction, diffFraction, pixelPalette } from "./pixels.ts";
import type { Renderer } from "./render.ts";
import { repair } from "./repair.ts";
import type { Tokens } from "./tokens.ts";

export const FONT_CANDIDATES = ["Inter", "DM Sans", "Manrope", "Source Serif 4", "Geist"];
const stack = (f: string) => `"${f}", ui-sans-serif, system-ui, sans-serif`;

export type Calibration = {
  vars: Record<string, string>;
  font: string;
  serif: string | null;
  agreement: Record<string, number>;
  support: Record<string, number>;
  diff: number[]; // pixelmatch fraction, calibrated render vs Flowstep PNG, per screen
  l1: number[];
};

const size = (png: Buffer) => {
  const p = PNG.sync.read(png);
  return { width: p.width, height: p.height };
};

async function meanL1(r: Renderer, shots: Screenshot[], vars: Record<string, string>) {
  let d = 0;
  for (const s of shots) d += l1((await r.render(s.jsx, { ...size(s.png), vars })).png, s.png);
  return d / shots.length;
}

/** Theme colours (sentinels), then sans/serif font (L1 over candidates), then radius steps. */
export async function calibrate(r: Renderer, shots: Screenshot[]): Promise<Calibration> {
  let vars: Record<string, string> = { "--font-sans": stack("Inter") };
  const theme = await recoverTheme(r, shots, vars);
  vars = { ...vars, ...theme.vars };
  let font = "Inter";
  let best = await meanL1(r, shots, vars);
  for (const f of FONT_CANDIDATES.slice(1)) {
    const d = await meanL1(r, shots, { ...vars, "--font-sans": stack(f) });
    if (d < best - 1e-9) [best, font] = [d, f];
  }
  vars["--font-sans"] = stack(font);
  let serif: string | null = null;
  if (shots.some((s) => /\bfont-serif\b/.test(s.jsx))) {
    let bs = Infinity;
    for (const f of FONT_CANDIDATES) {
      const d = await meanL1(r, shots, { ...vars, "--font-serif": `"${f}", ui-serif, Georgia, serif` });
      if (d < bs - 1e-9) [bs, serif] = [d, f];
    }
    vars["--font-serif"] = `"${serif}", ui-serif, Georgia, serif`;
  }
  const radii = await fitRadii(r, shots, vars);
  vars = { ...vars, ...radii.radii };
  const diff: number[] = [];
  const l1s: number[] = [];
  for (const s of shots) {
    const png = (await r.render(s.jsx, { ...size(s.png), vars })).png;
    diff.push(diffFraction(png, s.png));
    l1s.push(l1(png, s.png));
  }
  return { vars, font, serif, agreement: theme.agreement, support: theme.support, diff, l1: l1s };
}

export type ScreenResult = {
  before: Report["summary"];
  after: Report["summary"];
  pixelBefore: number; // flat-pixel palette adherence of Flowstep's own PNG
  pixelOursBefore: number;
  pixelOursAfter: number;
  changed: number; // pixels that moved at all (> 3/255 in a channel), our calibrated renders
  changedVisible: number; // pixelmatch (perceptual, threshold 0.1) fraction
  passes: number;
  editedNodes: number;
  unrepairable: number;
  offTokenExamples: { kind: string; value: string }[];
  repairedJsx: string;
  afterPng: Buffer;
  beforePng: Buffer;
};

export async function processScreen(r: Renderer, shot: Screenshot, cal: Calibration, tokens: Tokens): Promise<ScreenResult> {
  const sz = size(shot.png);
  const opts = { ...sz, vars: cal.vars };
  const res = await repair(r, shot.jsx, tokens, opts);
  const imgMasks = res.before.els.filter((e) => e.tag === "img").map((e) => ({ x: e.x, y: e.y, w: e.w, h: e.h }));
  return {
    before: res.beforeReport.summary,
    after: res.afterReport.summary,
    pixelBefore: pixelPalette(shot.png, tokens, imgMasks).rate,
    pixelOursBefore: pixelPalette(res.before.png, tokens, imgMasks).rate,
    pixelOursAfter: pixelPalette(res.after.png, tokens, imgMasks).rate,
    changed: changedFraction(res.before.png, res.after.png),
    changedVisible: diffFraction(res.before.png, res.after.png),
    passes: res.passes.length - 1,
    editedNodes: res.editedNodes,
    unrepairable: res.unrepairable,
    offTokenExamples: res.beforeReport.usages
      .filter((u) => !u.on)
      .slice(0, 40)
      .map((u) => ({ kind: `${u.cat}/${u.kind}`, value: u.color ? rgbHex(u.color) : u.family ?? `${u.px}px` })),
    repairedJsx: res.src,
    afterPng: res.after.png,
    beforePng: res.before.png,
  };
}

