// Median per-category rates by arm, before and after repair; writes results/summary_<tag>.json.
//   npx tsx study/summary.ts [--v2]
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
const V2 = process.argv.includes("--v2");
const DIR = V2 ? "results/files_v2" : "results/files";
const med = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
const rows: any[] = [];
for (const f of readdirSync(DIR)) {
  if (f.startsWith("dev")) continue;
  const r = JSON.parse(readFileSync(`${DIR}/${f}`, "utf8"));
  const arm = r.job.kind === "edit" ? "drift" : r.arm;
  for (const s of r.screens) rows.push({ id: r.id, brand: r.brand, arm, s });
}
const cats = ["color", "colorLenient", "type", "spacing", "radius", "overall"];
const out: any = {};
for (const arm of ["N", "G"]) {
  const xs = rows.filter((r) => r.arm === arm);
  out[arm] = { screens: xs.length, before: Object.fromEntries(cats.map((c) => [c, med(xs.map((r) => r.s.before[c].rate))])), after: Object.fromEntries(cats.map((c) => [c, med(xs.map((r) => r.s.after[c].rate))])), allOnBefore: xs.filter((r) => r.s.before.allOn).length, allOnAfter: xs.filter((r) => r.s.after.allOn).length, usages: xs.reduce((a, r) => a + r.s.before.overall.n, 0) };
}
out.byBrandG = Object.fromEntries(["fjord", "ember", "moss", "ink"].map((b) => { const xs = rows.filter((r) => r.arm === "G" && r.brand === b); return [b, Object.fromEntries(cats.map((c) => [c, med(xs.map((r) => r.s.before[c].rate))]))]; }));
writeFileSync(`results/summary${V2 ? "_v2" : ""}.json`, JSON.stringify(out, null, 2));
const p = (x: number) => `${(100 * x).toFixed(0)}%`.padStart(5);
console.log("arm  n   " + cats.map((c) => c.slice(0, 7).padStart(8)).join(""));
for (const arm of ["N", "G"]) { console.log(`${arm} before ${out[arm].screens} ` + cats.map((c) => p(out[arm].before[c]).padStart(8)).join("")); console.log(`${arm} after     ` + cats.map((c) => p(out[arm].after[c]).padStart(8)).join("")); }
for (const [b, v] of Object.entries<any>(out.byBrandG)) console.log(`G ${b.padEnd(6)}   ` + cats.map((c) => p(v[c]).padStart(8)).join(""));
console.log("usages", out.G.usages + out.N.usages, "allOn before G", out.G.allOnBefore, "N", out.N.allOnBefore);
