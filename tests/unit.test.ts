import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { aaThreshold, contrast, deltaOK, over, parseColor, WHITE } from "../src/color.ts";
import { applyClassEdits, parseMeta, parseScreen } from "../src/jsx.ts";
import { measure, radiusPx, snapPx, summarize } from "../src/measure.ts";
import { colorSource, declaresTextColor, pathVariant, pickColor, sideClasses } from "../src/repair.ts";
import { parseDesignMd } from "../src/tokens.ts";
import type { RawEl } from "../src/render.ts";

const fjord = parseDesignMd(readFileSync("study/brands/fjord.md", "utf8"));
const ink = parseDesignMd(readFileSync("study/brands/ink.md", "utf8"));

describe("color", () => {
  it("parses hex, rgb and oklch to the same colour", () => {
    const a = parseColor("#71717b")!;
    const b = parseColor("rgb(113, 113, 123)")!;
    expect(deltaOK(a, b)).toBeLessThan(1e-6);
    expect(deltaOK(parseColor("oklch(0.552 0.016 285.938)")!, a)).toBeLessThan(0.01); // zinc-500
  });
  it("composites alpha over white", () => {
    const c = over({ r: 0, g: 0, b: 0, a: 0.5 }, WHITE);
    expect(c.r).toBeCloseTo(0.5, 6);
    expect(c.a).toBe(1);
  });
  it("computes WCAG contrast", () => {
    expect(contrast(parseColor("#000")!, WHITE)).toBeCloseTo(21, 5);
    expect(contrast(parseColor("#777")!, WHITE)).toBeCloseTo(4.48, 2);
    expect(aaThreshold(14, 400)).toBe(4.5);
    expect(aaThreshold(24, 400)).toBe(3);
    expect(aaThreshold(19, 700)).toBe(3);
  });
});

describe("tokens", () => {
  it("reads every group of a DESIGN.md", () => {
    expect(fjord.name).toBe("Fjord");
    expect(fjord.colors).toHaveLength(12);
    expect(fjord.fontSizes).toEqual([12, 14, 16, 20, 24, 30]);
    expect(fjord.spacing).toEqual([0, 4, 8, 12, 16, 24, 32, 48]);
    expect(fjord.radii).toEqual([0, 6, 12]);
    expect(fjord.fontFamilies).toEqual(["inter"]);
  });
  it("keeps two families with the size they belong to", () => {
    expect(ink.fontFamilies.sort()).toEqual(["inter", "source serif 4"]);
    expect(ink.typeScale.find((t) => t.size === 44)!.family).toBe("Source Serif 4");
    expect(ink.typeScale.find((t) => t.size === 15)!.family).toBe("Inter");
  });
  it("every brand's text tokens pass AA on its surfaces", () => {
    for (const b of ["fjord", "ember", "moss", "ink"]) {
      const t = parseDesignMd(readFileSync(`study/brands/${b}.md`, "utf8"));
      const get = (n: string) => t.colors.find((c) => c.name === n)!.rgba;
      const surface = t.colors.find((c) => ["surface", "paper"].includes(c.name))!.rgba;
      expect(contrast(get("ink"), surface)).toBeGreaterThan(7);
      expect(contrast(get("ink-muted"), surface)).toBeGreaterThan(4.5);
      expect(contrast(get("on-primary"), get("primary"))).toBeGreaterThan(4.5);
    }
  });
});

describe("jsx", () => {
  const src = readFileSync("tests/fixtures/world_clock.jsx", "utf8");
  it("reads the metadata comment", () => {
    const m = parseMeta(src.split("\n")[0]);
    expect(m).toMatchObject({ screenType: "iphone-x-vertical", width: "375", colorTheme: "blue" });
  });
  it("numbers elements in document order and records parents", () => {
    const s = parseScreen(src);
    expect(s.order[0]).toBe("n0");
    expect(s.nodes.get("n3")!.name).toBe("ArrowLeft");
    expect(s.nodes.get("n3")!.parent).toBe("n2");
  });
  it("splices class edits and leaves every other byte alone", () => {
    const s = parseScreen(src);
    const out = applyClassEdits(s, new Map([["n4", "font-semibold text-[#0f2a2e]"]]));
    const a = src.split("\n");
    const b = out.split("\n");
    expect(b).toHaveLength(a.length);
    const changed = a.filter((l, i) => l !== b[i]).length;
    expect(changed).toBe(1);
    expect(parseScreen(out).nodes.get("n4")!.cls).toMatchObject({ kind: "literal", value: "font-semibold text-[#0f2a2e]" });
  });
  it("adds a className where there was none", () => {
    const s = parseScreen(`<div><Clock /></div>;`);
    const out = applyClassEdits(s, new Map([["n1", "text-[#123456]"]]));
    expect(out).toBe(`<div><Clock className="text-[#123456]" /></div>;`);
  });
  it("refuses to rewrite a dynamic className", () => {
    const s = parseScreen(`<div className={cn("a", x)} />;`);
    expect(() => applyClassEdits(s, new Map([["n0", "b"]]))).toThrow(/dynamic/);
  });
});

describe("measure helpers", () => {
  it("snaps to the nearest scale value, ties to the larger", () => {
    expect(snapPx(18, [0, 4, 8, 12, 16, 24])).toBe(16);
    expect(snapPx(14, [0, 4, 8, 12, 16, 24])).toBe(16);
    expect(snapPx(10, [0, 4, 8, 12, 16, 24])).toBe(12);
    expect(snapPx(1, [0, 4])).toBe(0);
  });
  it("treats half-height radii as pills", () => {
    expect(radiusPx("9999px", 80, 32)).toBe("pill");
    expect(radiusPx("16px", 80, 32)).toBe("pill");
    expect(radiusPx("50%", 40, 40)).toBe("pill");
    expect(radiusPx("8px", 80, 32)).toBe(8);
    expect(radiusPx("0px", 80, 32)).toBe(0);
  });
  it("summarises an empty screen as fully on-token", () => {
    expect(summarize([], []).allOn).toBe(true);
  });
});

function el(p: Partial<RawEl> & { i: number }): RawEl {
  return {
    parent: -1, owner: `n${p.i}`, ownerIsSelf: true, tag: "div", cls: "", inSvg: false, x: 0, y: 0, w: 100, h: 40, text: 0,
    color: "rgb(0,0,0)", bg: "rgba(0, 0, 0, 0)", bgImage: "none", borderW: [0, 0, 0, 0], borderC: ["", "", "", ""],
    borderS: ["none", "none", "none", "none"], fontSize: 14, fontWeight: 400, fontFamily: "Inter, sans-serif",
    padding: [0, 0, 0, 0], margin: [0, 0, 0, 0], rowGap: "normal", columnGap: "normal", display: "block", nChildren: 0,
    radius: ["0px", "0px", "0px", "0px"], opacity: 1, visibility: "visible", stroke: "none", fill: "rgb(0,0,0)",
    placeholderColor: null, ...p,
  };
}

describe("measure", () => {
  it("scores painted colours, sizes, spacing and radii against tokens", () => {
    const els = [
      el({ i: 0, bg: "rgb(255,255,255)", padding: [16, 16, 16, 16] }),
      el({ i: 1, parent: 0, text: 5, color: "#0F2A2E", fontSize: 14 }), // on-token
      el({ i: 2, parent: 0, text: 5, color: "#a1a1aa", fontSize: 13 }), // off colour, off size, fails AA
      el({ i: 3, parent: 0, bg: "#1F6F78", radius: ["10px", "10px", "10px", "10px"], padding: [10, 16, 10, 16] }),
    ];
    const r = measure(els, fjord);
    expect(r.summary.color).toMatchObject({ n: 4, on: 3 });
    expect(r.summary.type).toMatchObject({ n: 4, on: 3 });
    expect(r.summary.spacing).toMatchObject({ n: 8, on: 6 });
    expect(r.summary.radius).toMatchObject({ n: 1, on: 0 });
    expect(r.summary.contrastFail).toBe(1);
  });
  it("lets a tint of a token pass only the lenient colour score", () => {
    const els = [el({ i: 0, bg: "rgba(31, 111, 120, 0.5)" })];
    const r = measure(els, fjord);
    expect(r.summary.color.on).toBe(0);
    expect(r.summary.colorLenient.on).toBe(1);
  });
  it("skips invisible elements and svg internals", () => {
    const els = [el({ i: 0, bg: "#ff0000", opacity: 0 }), el({ i: 1, tag: "path", inSvg: true, bg: "#ff0000" })];
    expect(measure(els, fjord).summary.color.n).toBe(0);
  });
  it("exempts hairline spacing and auto margins", () => {
    const els = [el({ i: 0, padding: [2, 2, 2, 2], margin: [0, 37, 0, 37], cls: "mx-auto" })];
    expect(measure(els, fjord).summary.spacing.n).toBe(0);
  });
});

describe("repair helpers", () => {
  it("keeps greys grey and honours contrast", () => {
    const caption = parseColor("#a1a1aa")!;
    const pick = pickColor(caption, fjord, { bg: WHITE, need: 4.5 });
    expect(pick).toEqual(fjord.colors.find((c) => c.name === "ink-muted")!.rgba);
  });
  it("uses border-role tokens for borders", () => {
    const pick = pickColor(parseColor("#e4e4e7")!, fjord, { role: "border" });
    expect(pick).toEqual(fjord.colors.find((c) => c.name === "border")!.rgba);
  });
  it("collapses side fixes into the shortest classes", () => {
    expect(sideClasses("p", { t: 16, r: 16, b: 16, l: 16 })).toEqual(["p-[16px]"]);
    expect(sideClasses("p", { t: 8, b: 8, l: 16, r: 16 })).toEqual(["py-[8px]", "px-[16px]"]);
    expect(sideClasses("m", { t: -8 })).toEqual(["-mt-[8px]"]);
  });
  it("detects declared text colours but not sizes", () => {
    expect(declaresTextColor("text-sm font-medium")).toBe(false);
    expect(declaresTextColor("text-sm text-zinc-500")).toBe(true);
    expect(declaresTextColor("text-[#71717b]")).toBe(true);
    expect(declaresTextColor("text-[15px]")).toBe(false);
    expect(declaresTextColor("hover:text-red-500")).toBe(false);
  });
  it("finds where an inherited colour comes from", () => {
    const els = [
      el({ i: 0, cls: "bg-white text-zinc-950" }),
      el({ i: 1, parent: 0, cls: "flex gap-2" }),
      el({ i: 2, parent: 1, cls: "text-base font-medium", text: 4 }),
    ];
    expect(colorSource(els, 2)).toBe(0);
    els[0].cls = "bg-white";
    expect(colorSource(els, 2)).toBe(0); // nothing declares: fix at the outermost owner
  });
  it("builds an arbitrary variant to reach component internals", () => {
    const els = [
      el({ i: 0, owner: "n5" }),
      el({ i: 1, parent: 0, owner: "n5", ownerIsSelf: false, tag: "span" }),
    ];
    expect(pathVariant(els, 1)).toBe("[&>:nth-child(1)]:");
    expect(pathVariant(els, 0)).toBe("");
  });
});
