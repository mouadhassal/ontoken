// Calibrate, measure and repair every finished job in data/flowstep. Offline; no messages.
//   npx tsx study/measure.ts [--only <jobId>] [--force]
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { calibrate, FONT_CANDIDATES, processScreen } from "../src/pipeline.ts";
import { Renderer } from "../src/render.ts";
import { parseDesignMd } from "../src/tokens.ts";

const DATA = "data/flowstep";
const OUT = "results/files";
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
    const shots = meta.screens.map((s: any, k: number) => ({
      jsx: readFileSync(join(dir, `s${k + 1}.jsx`), "utf8"),
      png: readFileSync(join(dir, `s${k + 1}.png`)),
    }));
    const t0 = Date.now();
    const cal = await calibrate(r, shots);
    const screens = [];
    const fixedDir = join("data/fixed", id);
    mkdirSync(fixedDir, { recursive: true });
    for (const [k, shot] of shots.entries()) {
      const s = await processScreen(r, shot, cal, tokens);
      writeFileSync(join(fixedDir, `s${k + 1}.jsx`), s.repairedJsx);
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
