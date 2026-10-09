import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { measure } from "../src/measure.ts";
import { diffFraction, pixelPalette } from "../src/pixels.ts";
import { Renderer } from "../src/render.ts";
import { plan, repair, type RepairResult } from "../src/repair.ts";
import { parseDesignMd } from "../src/tokens.ts";
import { parseScreen } from "../src/jsx.ts";

const src = readFileSync("tests/fixtures/world_clock.jsx", "utf8");
const tokens = parseDesignMd(readFileSync("study/brands/fjord.md", "utf8"));
const renderer = new Renderer({ fonts: ["Inter"] });
let res: RepairResult;

beforeAll(async () => {
  await renderer.open();
  res = await repair(renderer, src, tokens);
}, 120_000);
afterAll(() => renderer.close());

describe("render + repair (Chromium)", () => {
  it("renders at the screen width from the metadata comment", () => {
    expect(res.before.width).toBe(375);
    expect(res.before.unknown).toEqual([]);
  });
  it("finds the off-token values a human would", () => {
    const off = res.beforeReport.usages.filter((u) => !u.on);
    expect(off.some((u) => u.kind === "icon" && u.owner === "n5")).toBe(true); // the blue plus
    expect(off.some((u) => u.kind === "pt" && u.px === 18)).toBe(true); // p-[18px] cards
  });
  it("brings every usage on-token and every text to AA", () => {
    expect(res.afterReport.summary.overall.rate).toBe(1);
    expect(res.afterReport.summary.contrastFail).toBe(0);
    expect(res.unrepairable).toBe(0);
  });
  it("only rewrites class strings", () => {
    const strip = (s: string) => s.replace(/className="[^"]*"/g, 'className=""');
    const a = strip(src).split("\n");
    const b = strip(res.src).split("\n");
    // the only structural additions allowed are className attributes on elements that had none
    expect(b.map((l) => l.replace(/ className=""/g, ""))).toEqual(a.map((l) => l.replace(/ className=""/g, "")));
    expect(parseScreen(res.src).order.length).toBe(parseScreen(src).order.length);
  });
  it("is idempotent: a repaired screen needs no further edits", async () => {
    const again = await renderer.render(res.src);
    expect(plan(again, measure(again.els, tokens), tokens).edits.size).toBe(0);
  });
  it("changes few pixels and raises pixel-level palette adherence", () => {
    expect(diffFraction(res.before.png, res.after.png)).toBeLessThan(0.08);
    expect(pixelPalette(res.after.png, tokens).rate).toBeGreaterThan(pixelPalette(res.before.png, tokens).rate);
  });
});
