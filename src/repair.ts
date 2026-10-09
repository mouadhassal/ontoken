// Deterministic repair: snap every off-token value to the nearest token, choosing colours
// that keep WCAG AA contrast, by editing class strings only. Re-render and repeat until
// nothing changes (at most MAX_PASSES).
import { twMerge } from "tailwind-merge";
import { aaThreshold, contrast, hex, oklab, type RGBA } from "./color.ts";
import { applyClassEdits, parseScreen } from "./jsx.ts";
import { measure, radiusPx, snapPx, type Report, type Usage } from "./measure.ts";
import type { RawEl, Rendered, Renderer } from "./render.ts";
import type { Tokens } from "./tokens.ts";

export const MAX_PASSES = 4;
const NON_TEXT_CONTRAST = 3; // WCAG 1.4.11, used to pick icon colours
const CHROMA_WEIGHT = 4; // hue/chroma changes cost 2x lightness changes (a grey stays a grey)
const BORDER_ROLE = /border|rule|outline|divider|line|stroke/i;

/** Repair distance: OKLab with chroma axes weighted, so neutrals snap to neutrals. */
export function repairDistance(x: RGBA, y: RGBA): number {
  const [l1, a1, b1] = oklab(x);
  const [l2, a2, b2] = oklab(y);
  return Math.sqrt((l1 - l2) ** 2 + CHROMA_WEIGHT * ((a1 - a2) ** 2 + (b1 - b2) ** 2));
}

/** Nearest token that reaches `need` contrast against `bg`; else the highest-contrast token. */
export function pickColor(c: RGBA, tokens: Tokens, o: { bg?: RGBA; need?: number; role?: "border" } = {}): RGBA {
  let pool = tokens.colors;
  if (o.role === "border" && pool.some((t) => BORDER_ROLE.test(t.name))) pool = pool.filter((t) => BORDER_ROLE.test(t.name));
  const ranked = pool
    .map((t) => ({ rgba: t.rgba, d: repairDistance(c, t.rgba) }))
    .sort((a, b) => a.d - b.d)
    .map((x) => x.rgba);
  const { bg, need = 0 } = o;
  if (!bg || need <= 0) return ranked[0];
  return ranked.find((t) => contrast(t, bg) >= need) ?? ranked.reduce((a, b) => (contrast(b, bg) > contrast(a, bg) ? b : a));
}

/** Arbitrary-variant prefix that reaches `el` from its owner element, e.g. "[&>:nth-child(1)]:". */
export function pathVariant(els: RawEl[], el: number): string | null {
  const chain: number[] = [];
  let cur = els[el];
  while (cur && !cur.ownerIsSelf) {
    if (cur.parent < 0) return null;
    const siblings = els.filter((e) => e.parent === cur.parent);
    chain.unshift(siblings.indexOf(cur) + 1);
    cur = els[cur.parent];
  }
  if (!cur) return null;
  if (chain.length > 3) return null;
  return chain.length ? `[&${chain.map((k) => `>:nth-child(${k})`).join("")}]:` : "";
}

const PROBE = "text-[#010203]";
/** Does this element set its own text colour (rather than inherit it)? */
export function declaresTextColor(cls: string): boolean {
  const plain = cls.split(/\s+/).filter((c) => c && !c.includes(":")).join(" ");
  return twMerge(plain, PROBE) !== (plain ? `${plain} ${PROBE}` : PROBE);
}

/**
 * Where a text/icon colour comes from: the element itself if it declares one, else the
 * nearest ancestor that does. If nothing declares it (browser default), the outermost
 * owner element, so one edit fixes every inheriting descendant.
 */
export function colorSource(els: RawEl[], el: number): number {
  let cur = els[el];
  let top = el;
  while (cur) {
    if (declaresTextColor(cur.cls) || /(^|\s)stroke-\[/.test(cur.cls)) return cur.i;
    if (cur.ownerIsSelf) top = cur.i;
    if (cur.parent < 0) break;
    cur = els[cur.parent];
  }
  return top;
}

const fam = (f: string) => `font-[family-name:${f.replace(/ /g, "_")}]`;

function familyForSize(px: number, tokens: Tokens): string {
  if (!tokens.typeScale.length) return tokens.fontFamilies[0];
  return tokens.typeScale.reduce((a, b) => (Math.abs(b.size - px) < Math.abs(a.size - px) ? b : a)).family;
}

/** Collapse side fixes into the shortest Tailwind form (p/px/py or single sides). */
export function sideClasses(prefix: "p" | "m", sides: Partial<Record<"t" | "r" | "b" | "l", number>>): string[] {
  const out: string[] = [];
  const cls = (p: string, v: number) => `${v < 0 ? "-" : ""}${p}-[${Math.abs(v)}px]`;
  const { t, r, b, l } = sides;
  if (t !== undefined && t === b && b === l && l === r) return [cls(prefix, t)];
  if (t !== undefined && t === b) out.push(cls(`${prefix}y`, t));
  else {
    if (t !== undefined) out.push(cls(`${prefix}t`, t));
    if (b !== undefined) out.push(cls(`${prefix}b`, b));
  }
  if (l !== undefined && l === r) out.push(cls(`${prefix}x`, l));
  else {
    if (l !== undefined) out.push(cls(`${prefix}l`, l));
    if (r !== undefined) out.push(cls(`${prefix}r`, r));
  }
  return out;
}

export type Plan = { edits: Map<string, string>; fixed: number; unrepairable: number };

/** One pass: decide class additions for every failing usage and contrast check. */
export function plan(r: Rendered, report: Report, tokens: Tokens): Plan {
  const { els } = r;
  const adds = new Map<string, string[]>();
  let fixed = 0;
  let unrepairable = 0;
  const pushAt = (el: number, classes: string[]): boolean => {
    const owner = els[el]?.owner;
    if (!owner || !classes.length) return false;
    const node = r.screen.nodes.get(owner);
    if (!node || node.cls.kind === "dynamic") return false;
    const pre = pathVariant(els, el);
    if (pre === null) return false;
    adds.set(owner, [...(adds.get(owner) ?? []), ...classes.map((c) => pre + c)]);
    return true;
  };
  const count = (ok: boolean, n = 1) => (ok ? (fixed += n) : (unrepairable += n));

  const failing = report.usages.filter((u) => !u.on);
  const textNeed = (e: RawEl) => aaThreshold(e.fontSize, e.fontWeight);

  // text and icon colours: fix once at the element the colour comes from
  const sources = new Map<string, Usage[]>();
  for (const u of failing.filter((u) => ["text", "icon"].includes(u.kind))) {
    const src = colorSource(els, u.el);
    const key = `${u.kind === "icon" && /(^|\s)stroke-\[/.test(els[src].cls) ? "stroke" : "text"}:${src}`;
    sources.set(key, [...(sources.get(key) ?? []), u]);
  }
  for (const [key, us] of sources) {
    const [prop, src] = [key.split(":")[0], Number(key.split(":")[1])];
    const u = us[0];
    const need = u.kind === "text" ? textNeed(els[u.el]) : NON_TEXT_CONTRAST;
    const pick = pickColor(u.color!, tokens, { bg: report.effBg[u.el], need });
    count(pushAt(src, [`${prop}-[${hex(pick)}]`]), us.length);
  }

  // everything else is fixed on the element itself
  const sides = new Map<number, { p: Record<string, number>; m: Record<string, number> }>();
  const gradients = new Map<number, Usage[]>();
  for (const u of failing) {
    const e = els[u.el];
    if (u.kind === "text" || u.kind === "icon") continue;
    if (u.kind === "gradient") {
      gradients.set(u.el, report.usages.filter((v) => v.el === u.el && v.kind === "gradient"));
      continue;
    }
    const m = u.kind.match(/^(p|m)([trbl])$/);
    if (m) {
      const s = sides.get(u.el) ?? { p: {}, m: {} };
      const v = snapPx(Math.abs(u.px!), tokens.spacing);
      s[m[1] as "p" | "m"][m[2]] = u.px! < 0 ? -v : v;
      sides.set(u.el, s);
      continue;
    }
    let classes: string[] = [];
    switch (u.kind) {
      case "placeholder":
        classes = [`placeholder:text-[${hex(pickColor(u.color!, tokens, { bg: report.effBg[u.el], need: textNeed(e) }))}]`];
        break;
      case "icon-fill":
        classes = [`fill-[${hex(pickColor(u.color!, tokens, { bg: report.effBg[u.el], need: NON_TEXT_CONTRAST }))}]`];
        break;
      case "bg":
        classes = [`bg-[${hex(pickColor(u.color!, tokens))}]`];
        break;
      case "border":
        classes = [`border-[${hex(pickColor(u.color!, tokens, { role: "border" }))}]`];
        break;
      case "size":
        classes = [`text-[${snapPx(u.px!, tokens.fontSizes)}px]`];
        break;
      case "family":
        classes = tokens.fontFamilies.length ? [fam(familyForSize(e.fontSize, tokens))] : [];
        break;
      case "radius": {
        const v = snapPx(u.px!, tokens.radii);
        const hit = e.radius.map((x) => radiusPx(x, e.w, e.h)).map((x) => typeof x === "number" && Math.abs(x - u.px!) < 0.01);
        classes = hit.every(Boolean) ? [`rounded-[${v}px]`] : ["tl", "tr", "br", "bl"].filter((_, k) => hit[k]).map((c) => `rounded-${c}-[${v}px]`);
        break;
      }
      case "gap":
      case "gap-x":
      case "gap-y":
        classes = [`${u.kind}-[${snapPx(u.px!, tokens.spacing)}px]`];
        break;
    }
    count(pushAt(u.el, classes));
  }
  for (const [el, s] of sides) {
    const n = Object.keys(s.p).length + Object.keys(s.m).length;
    count(pushAt(el, [...sideClasses("p", s.p), ...sideClasses("m", s.m)]), n);
  }
  for (const [el, us] of gradients) {
    const stops = us.map((u) => hex(pickColor(u.color!, tokens)));
    const classes = [`from-[${stops[0]}]`, `to-[${stops[stops.length - 1]}]`, ...(stops.length >= 3 ? [`via-[${stops[1]}]`] : [])];
    count(pushAt(el, classes), us.filter((u) => !u.on).length);
  }

  // contrast failures whose colour was already on-token
  for (const c of report.contrast.filter((c) => !c.pass)) {
    const u = report.usages.find((x) => x.el === c.el && (x.kind === "text" || x.kind === "placeholder"));
    if (u && !u.on) continue; // already re-picked with contrast above
    const pick = pickColor(c.fg, tokens, { bg: c.bg, need: c.need });
    if (contrast(pick, c.bg) <= c.ratio + 1e-6) {
      unrepairable++;
      continue;
    }
    const at = c.kind === "placeholder" ? c.el : colorSource(els, c.el);
    count(pushAt(at, [`${c.kind === "placeholder" ? "placeholder:" : ""}text-[${hex(pick)}]`]));
  }

  const edits = new Map<string, string>();
  for (const [owner, classes] of adds) {
    const node = r.screen.nodes.get(owner)!;
    const old = node.cls.kind === "literal" ? node.cls.value : "";
    let next = twMerge(old, ...classes);
    // a font-size class resets line-height in twMerge; keep the author's leading
    const keep = old.split(/\s+/).filter((c) => /^leading-/.test(c) && !next.split(/\s+/).includes(c));
    if (keep.length) next = `${next} ${keep.join(" ")}`;
    if (next !== old) edits.set(owner, next);
  }
  return { edits, fixed, unrepairable };
}

export type PassLog = { pass: number; overall: number; contrastFail: number; edits: number };
export type RepairResult = {
  src: string;
  before: Rendered;
  after: Rendered;
  beforeReport: Report;
  afterReport: Report;
  passes: PassLog[];
  editedNodes: number;
  unrepairable: number;
};

export async function repair(
  renderer: Renderer,
  src: string,
  tokens: Tokens,
  opts: Parameters<Renderer["render"]>[1] = {},
): Promise<RepairResult> {
  const before = await renderer.render(src, opts);
  const beforeReport = measure(before.els, tokens);
  let cur = before;
  let rep = beforeReport;
  let text = src;
  const passes: PassLog[] = [{ pass: 0, overall: rep.summary.overall.rate, contrastFail: rep.summary.contrastFail, edits: 0 }];
  const touched = new Set<string>();
  let unrepairable = 0;
  for (let p = 1; p <= MAX_PASSES; p++) {
    const pl = plan(cur, rep, tokens);
    unrepairable = pl.unrepairable;
    if (pl.edits.size === 0) break;
    for (const k of pl.edits.keys()) touched.add(k);
    text = applyClassEdits(parseScreen(text), pl.edits);
    cur = await renderer.render(text, opts);
    rep = measure(cur.els, tokens);
    passes.push({ pass: p, overall: rep.summary.overall.rate, contrastFail: rep.summary.contrastFail, edits: pl.edits.size });
  }
  return { src: text, before, after: cur, beforeReport, afterReport: rep, passes, editedNodes: touched.size, unrepairable };
}
