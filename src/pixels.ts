// Renderer-independent checks on PNGs: palette adherence of flat pixels, and visual change.
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { deltaOK, type RGBA } from "./color.ts";
import { TOL_COLOR } from "./measure.ts";
import type { Tokens } from "./tokens.ts";

export type Box = { x: number; y: number; w: number; h: number };

function pad(img: PNG, w: number, h: number): Buffer {
  if (img.width === w && img.height === h) return img.data;
  const out = Buffer.alloc(w * h * 4, 255);
  for (let y = 0; y < Math.min(h, img.height); y++)
    img.data.copy(out, y * w * 4, y * img.width * 4, y * img.width * 4 + Math.min(w, img.width) * 4);
  return out;
}

/** Fraction of pixels that visibly differ (pixelmatch, threshold 0.1, anti-aliasing ignored). */
export function diffFraction(a: Buffer, b: Buffer): number {
  const A = PNG.sync.read(a);
  const B = PNG.sync.read(b);
  const w = Math.max(A.width, B.width);
  const h = Math.max(A.height, B.height);
  const n = pixelmatch(pad(A, w, h), pad(B, w, h), null, w, h, { threshold: 0.1 });
  return n / (w * h);
}

/** Fraction of pixels whose colour moved by more than `tol` (max channel, 0..255). Strict. */
export function changedFraction(a: Buffer, b: Buffer, tol = 3): number {
  const A = PNG.sync.read(a);
  const B = PNG.sync.read(b);
  const w = Math.max(A.width, B.width);
  const h = Math.max(A.height, B.height);
  const da = pad(A, w, h);
  const db = pad(B, w, h);
  let n = 0;
  for (let i = 0; i < w * h * 4; i += 4)
    if (Math.abs(da[i] - db[i]) > tol || Math.abs(da[i + 1] - db[i + 1]) > tol || Math.abs(da[i + 2] - db[i + 2]) > tol) n++;
  return n / (w * h);
}

/**
 * Share of "flat" pixels (all 8 neighbours identical) whose colour is within tolerance of a
 * token. Flat pixels exclude text edges, icon strokes and photos; masked boxes are skipped.
 * Works on any PNG, so it can score Flowstep's own renders too.
 */
export function pixelPalette(png: Buffer, tokens: Tokens, masks: Box[] = [], scale = 1): { flat: number; on: number; rate: number } {
  const img = PNG.sync.read(png);
  const { width: w, height: h, data } = img;
  const masked = (x: number, y: number) =>
    masks.some((m) => x >= m.x * scale && x < (m.x + m.w) * scale && y >= m.y * scale && y < (m.y + m.h) * scale);
  const cache = new Map<number, boolean>();
  let flat = 0;
  let on = 0;
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const k = (y * w + x) * 4;
      const key = (data[k] << 16) | (data[k + 1] << 8) | data[k + 2];
      let same = true;
      for (let dy = -1; dy <= 1 && same; dy++)
        for (let dx = -1; dx <= 1 && same; dx++) {
          const j = ((y + dy) * w + x + dx) * 4;
          if (data[j] !== data[k] || data[j + 1] !== data[k + 1] || data[j + 2] !== data[k + 2]) same = false;
        }
      if (!same || masked(x, y)) continue;
      flat++;
      let hit = cache.get(key);
      if (hit === undefined) {
        const c: RGBA = { r: data[k] / 255, g: data[k + 1] / 255, b: data[k + 2] / 255, a: 1 };
        hit = tokens.colors.some((t) => deltaOK(c, t.rgba) <= TOL_COLOR);
        cache.set(key, hit);
      }
      if (hit) on++;
    }
  }
  return { flat, on, rate: flat ? on / flat : 1 };
}
