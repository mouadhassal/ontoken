// Calibrate, measure and repair every finished job in data/flowstep. Offline; no messages.
//   npx tsx study/measure.ts [--only <jobId>] [--force]
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { calibrate, FONT_CANDIDATES, processScreen } from "../src/pipeline.ts";
import { calibrateV2, FLOWSTEP_FONTS, toFlowstepDialect } from "../src/calibrate_v2.ts";
import { Renderer } from "../src/render.ts";
import { parseDesignMd } from "../src/tokens.ts";

// --v2: amendment 2 (text-colour recovery fix); writes to separate folders
const V2 = process.argv.includes("--v2");
const DATA = "data/flowstep";
const OUT = V2 ? "results/files_v2" : "results/files";
const FIXED = V2 ? "data/fixed_v2" : "data/fixed";
const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : null;
const force = process.argv.includes("--force");

function brandOf(meta: any): string {
  if (meta.job.kind === "generate") return meta.job.brief.brand;
  return JSON.parse(readFileSync(join(DATA, meta.job.base, "meta.json"), "utf8")).job.brief.brand;
}

const r = new Renderer({ fonts: FONT_CANDIDATES });
await r.open();
try {
  mkdirSync(OUT, { recursive: true });
  for (const id of readdirSync(DATA).sort()) {
    const dir = join(DATA, id);
    if (!existsSync(join(dir, "done.json")) || (only && id !== only)) continue;
    const out = join(OUT, `${id}.json`);
    if (existsSync(out) && !force) continue;
    const meta = JSON.parse(readFileSync(join(dir, "meta.json"), "utf8"));
    const brand = brandOf(meta);
    const tokens = parseDesignMd(readFileSync(`study/brands/${brand}.md`, "utf8"));
    if (V2) {
      // amendment 2: do not check or insert brand fonts Flowstep's renderer cannot paint
      const ok = FLOWSTEP_FONTS.map((f) => f.toLowerCase());
      tokens.fontFamilies = tokens.fontFamilies.filter((f) => ok.includes(f));
      tokens.typeScale = tokens.typeScale.filter((t) => ok.includes(t.family.toLowerCase()));
    }
    const shots = meta.screens.map((s: any, k: number) => ({
      jsx: readFileSync(join(dir, `s${k + 1}.jsx`), "utf8"),
      png: readFileSync(join(dir, `s${k + 1}.png`)),
    }));
    const t0 = Date.now();
    const cal = V2
      ? await calibrateV2(
          r,
          shots,
          JSON.parse(readFileSync(join("results/files", `${id}.json`), "utf8")).calibration,
          brand === "ink" ? "Source Serif 4" : null, // the only brand with a serif heading face
        )
      : await calibrate(r, shots);
    const screens = [];
    const fixedDir = join(FIXED, id);
    mkdirSync(fixedDir, { recursive: true });
    for (const [k, shot] of shots.entries()) {
      const s = await processScreen(r, shot, cal, tokens);
      writeFileSync(join(fixedDir, `s${k + 1}.jsx`), V2 ? toFlowstepDialect(s.repairedJsx) : s.repairedJsx);
      writeFileSync(join(fixedDir, `s${k + 1}.ours_before.png`), s.beforePng);
      writeFileSync(join(fixedDir, `s${k + 1}.ours_after.png`), s.afterPng);
      const { repairedJsx, afterPng, beforePng, ...rest } = s;
      screens.push({ screen: k + 1, screenId: meta.screens[k].screenId, ...rest });
    }
    const result = { id, job: meta.job, brand, arm: meta.job.arm ?? "G", calibration: cal, screens, seconds: Math.round((Date.now() - t0) / 1000) };
    writeFileSync(out, JSON.stringify(result, null, 2));
    const pct = (x: number) => `${(100 * x).toFixed(0)}%`;
    console.log(
      `${id.padEnd(14)} ${brand.padEnd(6)} font ${cal.font}${cal.serif ? `/${cal.serif}` : ""} diff ${cal.diff.map(pct).join(" ")} | ` +
        screens.map((s) => `${pct(s.before.overall.rate)}->${pct(s.after.overall.rate)} c${s.before.contrastFail}->${s.after.contrastFail}`).join("  ") +
        ` (${result.seconds}s)`,
    );
  }
} finally {
  await r.close();
}
