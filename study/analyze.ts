// Score the pre-registered hypotheses on the confirmatory data. Writes results/verdicts.json.
//   npx tsx study/analyze.ts
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { deltaOK, parseColor } from "../src/color.ts";
import { pixelPalette } from "../src/pixels.ts";
import { parseDesignMd, type Tokens } from "../src/tokens.ts";
import { PAIRED } from "./protocol.ts";

type Cat = { n: number; on: number; rate: number };
type Screen = { screen: number; before: any; after: any; changed: number; changedVisible: number; pixelBefore: number; offTokenExamples: any[]; unrepairable: number; editedNodes: number; passes: number };
type FileRes = { id: string; job: any; brand: string; arm: string; calibration: any; screens: Screen[] };

// --v2: amendment 2 re-analysis (text-colour recovery fix). H5/X1 always use the frozen repair.
const V2 = process.argv.includes("--v2");
const FILES = V2 ? "results/files_v2" : "results/files";
const files: FileRes[] = readdirSync(FILES)
  .filter((f) => f.endsWith(".json") && !f.startsWith("dev-"))
  .map((f) => JSON.parse(readFileSync(join(FILES, f), "utf8")));
const tokens: Record<string, Tokens> = Object.fromEntries(
  ["fjord", "ember", "moss", "ink"].map((b) => [b, parseDesignMd(readFileSync(`study/brands/${b}.md`, "utf8"))]),
);
const gen = files.filter((f) => f.job.kind === "generate");
const G = gen.filter((f) => f.arm === "G");
const byId = new Map(files.map((f) => [f.id, f]));
const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : NaN;
};
const pooled = (s: any, cats: string[]) => {
  const n = cats.reduce((a, c) => a + s[c].n, 0);
  const on = cats.reduce((a, c) => a + s[c].on, 0);
  return n ? on / n : 1;
};

/** Exact one-sided Wilcoxon signed-rank (H1: differences > 0). Zeros dropped, ties mid-ranked. */
export function wilcoxonGreater(d: number[]): { n: number; W: number; p: number } {
  const x = d.filter((v) => Math.abs(v) > 1e-12);
  const n = x.length;
  if (!n) return { n: 0, W: 0, p: 1 };
  const order = x.map((v, i) => ({ a: Math.abs(v), i })).sort((p, q) => p.a - q.a);
  const ranks = new Array(n).fill(0);
  for (let i = 0; i < n; ) {
    let j = i;
    while (j + 1 < n && Math.abs(order[j + 1].a - order[i].a) < 1e-12) j++;
    for (let k = i; k <= j; k++) ranks[order[k].i] = (i + j) / 2 + 1;
    i = j + 1;
  }
  const W = x.reduce((s, v, i) => s + (v > 0 ? ranks[i] : 0), 0);
  let ge = 0;
  for (let m = 0; m < 1 << n; m++) {
    let w = 0;
    for (let i = 0; i < n; i++) if (m & (1 << i)) w += ranks[i];
    if (w >= W - 1e-9) ge++;
  }
  return { n, W, p: ge / (1 << n) };
}

const out: Record<string, any> = { files: files.map((f) => f.id), generatedAt: new Date().toISOString() };

// ---- H1: G vs N, paired by brief and screen index
{
  const dc: number[] = [];
  const dn: number[] = [];
  const pairs: any[] = [];
  for (const b of PAIRED) {
    const g = byId.get(`${b}-G`);
    const n = byId.get(`${b}-N`);
    if (!g || !n) continue;
    for (let k = 0; k < Math.min(g.screens.length, n.screens.length); k++) {
      const gc = g.screens[k].before.color.rate;
      const nc = n.screens[k].before.color.rate;
      const gx = pooled(g.screens[k].before, ["type", "spacing", "radius"]);
      const nx = pooled(n.screens[k].before, ["type", "spacing", "radius"]);
      dc.push(gc - nc);
      dn.push(gx - nx);
      pairs.push({ brief: b, screen: k + 1, colorG: gc, colorN: nc, nonColorG: gx, nonColorN: nx });
    }
  }
  const a = wilcoxonGreater(dc);
  const b = wilcoxonGreater(dn);
  out.H1 = {
    pairs,
    a: { ...a, medianG: median(pairs.map((p) => p.colorG)), medianN: median(pairs.map((p) => p.colorN)), pass: a.p < 0.05 },
    b: { ...b, medianG: median(pairs.map((p) => p.nonColorG)), medianN: median(pairs.map((p) => p.nonColorN)), pass: b.p < 0.05 },
  };
}

// ---- H2: recovered --primary vs the brand's primary token
{
  const rows = G.map((f) => {
    const v = f.calibration.vars["--primary"];
    const support = f.calibration.support["--primary"] ?? 0;
    const brand = tokens[f.brand].colors.find((c) => c.name === "primary")!;
    return { id: f.id, brand: f.brand, painted: v ?? null, token: brand.css, support, delta: v ? deltaOK(parseColor(v)!, brand.rgba) : null };
  });
  const eligible = rows.filter((r) => r.painted && r.support >= 500);
  const shifted = eligible.filter((r) => r.delta! > 0.02);
  out.H2 = { rows, eligible: eligible.length, shifted: shifted.length, share: shifted.length / eligible.length, pass: eligible.length > 0 && shifted.length / eligible.length >= 0.75 };
}

// ---- H3: residual gap on G screens
{
  const sc = G.flatMap((f) => f.screens);
  const off = sc.filter((s) => !s.before.allOn).length;
  out.H3 = { screens: sc.length, withOffToken: off, share: off / sc.length, pass: off / sc.length >= 0.75 };
}

// ---- H4: repair (calibrated renderer)
{
  const sc = gen.flatMap((f) => f.screens.map((s) => ({ ...s, arm: f.arm })));
  const full = sc.filter((s) => s.after.overall.rate === 1).length;
  const failBefore = sc.reduce((a, s) => a + s.before.contrastFail, 0);
  const failAfter = sc.reduce((a, s) => a + s.after.contrastFail, 0);
  const gained = sc.filter((s) => s.after.contrastFail > s.before.contrastFail).length;
  const changedG = median(sc.filter((s) => s.arm === "G").map((s) => s.changed));
  const red = failBefore ? 1 - failAfter / failBefore : null;
  out.H4 = {
    screens: sc.length,
    a: { full, share: full / sc.length, pass: full / sc.length >= 0.9 },
    b: { failBefore, failAfter, reduction: red, tested: failBefore >= 5, pass: failBefore >= 5 ? red! >= 0.8 : null },
    c: { screensGainingFailure: gained, pass: gained === 0 },
    d: { medianChangedG: changedG, medianVisibleG: median(sc.filter((s) => s.arm === "G").map((s) => s.changedVisible)), pass: changedG <= 0.25 },
    unrepairable: sc.reduce((a, s) => a + s.unrepairable, 0),
  };
}

// ---- H5: round trip in Flowstep's renderer (pixel palette, no masks, same rule both sides)
{
  const rows: any[] = [];
  for (const f of G)
    for (const s of f.screens) {
      const after = join("data/fixed", f.id, `s${s.screen}.flowstep_after.png`);
      if (!existsSync(after)) continue;
      const before = pixelPalette(readFileSync(join("data/flowstep", f.id, `s${s.screen}.png`)), tokens[f.brand]).rate;
      const aft = pixelPalette(readFileSync(after), tokens[f.brand]).rate;
      rows.push({ id: f.id, screen: s.screen, before, after: aft });
    }
  const ok = rows.filter((r) => r.after >= r.before - 1e-9).length;
  out.H5 = { rows, n: rows.length, notWorse: ok, share: rows.length ? ok / rows.length : null, medianBefore: median(rows.map((r) => r.before)), medianAfter: median(rows.map((r) => r.after)), pass: rows.length > 0 && ok / rows.length >= 0.9 && median(rows.map((r) => r.after)) >= 0.98 };
}

// ---- EXPLORATORY X1: same check, repaired JSX written in place (replace-screen-jsx)
{
  const rows: any[] = [];
  for (const f of G)
    for (const s of f.screens) {
      const after = join(V2 ? "data/fixed_v2" : "data/fixed", f.id, `s${s.screen}.flowstep_replaced.png`);
      if (!existsSync(after)) continue;
      const before = pixelPalette(readFileSync(join("data/flowstep", f.id, `s${s.screen}.png`)), tokens[f.brand]).rate;
      rows.push({ id: f.id, screen: s.screen, before, after: pixelPalette(readFileSync(after), tokens[f.brand]).rate });
    }
  const ok = rows.filter((r) => r.after >= r.before - 1e-9).length;
  out.X1_replaceInPlace = { exploratory: true, rows, n: rows.length, notWorse: ok, share: rows.length ? ok / rows.length : null, medianBefore: median(rows.map((r) => r.before)), medianAfter: median(rows.map((r) => r.after)), worse: rows.filter((r) => r.after < r.before - 1e-9) };
}

// ---- H6: renderer validity
{
  const d = files.flatMap((f) => f.calibration.diff as number[]);
  out.H6 = { screens: d.length, median: median(d), max: Math.max(...d), pass: median(d) <= 0.03 };
}

// ---- Drift (descriptive)
{
  const steps = ["F1-G", "F1-G-e1", "F1-G-e2"].map((id) => byId.get(id)).filter(Boolean) as FileRes[];
  out.drift = steps.map((f, k) => ({
    step: k,
    id: f.id,
    color: median(f.screens.map((s) => s.before.color.rate)),
    type: median(f.screens.map((s) => s.before.type.rate)),
    spacing: median(f.screens.map((s) => s.before.spacing.rate)),
    radius: median(f.screens.map((s) => s.before.radius.rate)),
    overall: median(f.screens.map((s) => s.before.overall.rate)),
    contrastFail: f.screens.reduce((a, s) => a + s.before.contrastFail, 0),
    primary: f.calibration.vars["--primary"],
    foreground: f.calibration.vars["--foreground"],
  }));
}

// ---- Descriptive: per-file calibration and category rates
out.perFile = files.map((f) => ({
  id: f.id,
  brand: f.brand,
  arm: f.arm,
  font: f.calibration.font,
  serif: f.calibration.serif,
  diff: f.calibration.diff,
  radii: Object.fromEntries(Object.entries(f.calibration.vars).filter(([k]) => k.startsWith("--radius"))),
  theme: Object.fromEntries(Object.entries(f.calibration.vars).filter(([k]) => !k.startsWith("--radius") && !k.startsWith("--font"))),
  rates: ["color", "colorLenient", "type", "spacing", "radius", "overall"].map((c) => [c, median(f.screens.map((s) => s.before[c].rate))]),
  contrastFail: f.screens.reduce((a, s) => a + s.before.contrastFail, 0),
}));

if (V2) {
  // round-trip checks belong to the frozen repair outputs; copy them from the frozen verdicts
  const frozen = JSON.parse(readFileSync("results/verdicts.json", "utf8"));
  out.H5 = frozen.H5;
  out.X1_frozenRepair = frozen.X1_replaceInPlace;
}
writeFileSync(V2 ? "results/verdicts_v2.json" : "results/verdicts.json", JSON.stringify(out, null, 2));
const v = (x: any) => (x === null ? "n/a" : x ? "PASS" : "FAIL");
console.log(`H1a colour G>N   ${v(out.H1.a.pass)}  n=${out.H1.a.n} p=${out.H1.a.p.toFixed(4)} median G ${out.H1.a.medianG?.toFixed(2)} vs N ${out.H1.a.medianN?.toFixed(2)}`);
console.log(`H1b non-colour   ${v(out.H1.b.pass)}  n=${out.H1.b.n} p=${out.H1.b.p.toFixed(4)} median G ${out.H1.b.medianG?.toFixed(2)} vs N ${out.H1.b.medianN?.toFixed(2)}`);
console.log(`H2 primary shift ${v(out.H2.pass)}  ${out.H2.shifted}/${out.H2.eligible} files; deltas ${out.H2.rows.map((r: any) => `${r.id}:${r.delta?.toFixed(3)}`).join(" ")}`);
console.log(`H3 residual gap  ${v(out.H3.pass)}  ${out.H3.withOffToken}/${out.H3.screens} G screens`);
console.log(`H4a full repair  ${v(out.H4.a.pass)}  ${out.H4.a.full}/${out.H4.screens}`);
console.log(`H4b AA failures  ${v(out.H4.b.pass)}  ${out.H4.b.failBefore} -> ${out.H4.b.failAfter}`);
console.log(`H4c no new fails ${v(out.H4.c.pass)}  ${out.H4.c.screensGainingFailure} screens`);
console.log(`H4d pixels moved ${v(out.H4.d.pass)}  median ${(100 * out.H4.d.medianChangedG).toFixed(1)}% (visible ${(100 * out.H4.d.medianVisibleG).toFixed(1)}%)`);
console.log(`H5 round trip    ${v(out.H5.pass)}  ${out.H5.notWorse}/${out.H5.n}; median ${out.H5.medianBefore?.toFixed(3)} -> ${out.H5.medianAfter?.toFixed(3)}`);
console.log(`H6 renderer      ${v(out.H6.pass)}  median diff ${(100 * out.H6.median).toFixed(2)}% (max ${(100 * out.H6.max).toFixed(2)}%)`);
console.log(`X1 replace (expl) ${out.X1_replaceInPlace.notWorse}/${out.X1_replaceInPlace.n} not worse; median ${out.X1_replaceInPlace.medianBefore?.toFixed(3)} -> ${out.X1_replaceInPlace.medianAfter?.toFixed(3)}; worse: ${out.X1_replaceInPlace.worse.map((r: any) => `${r.id}/${r.screen} ${r.before.toFixed(3)}>${r.after.toFixed(3)}`).join(" ")}`);
for (const d of out.drift) console.log(`drift step ${d.step}: colour ${d.color?.toFixed(2)} overall ${d.overall?.toFixed(2)} primary ${d.primary}`);
