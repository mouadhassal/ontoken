// EXPLORATORY (not pre-registered; added after seeing M1-G): does Flowstep's own PNG
// renderer have the brand's font? For each brand font a file's JSX names, render the file
// with the font available and with it missing, and see which matches Flowstep's PNG (L1).
//   npx tsx study/fonts.ts
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PNG } from "pngjs";
import { l1 } from "../src/calibrate.ts";
import { FONT_CANDIDATES } from "../src/pipeline.ts";
import { Renderer } from "../src/render.ts";
import { parseDesignMd } from "../src/tokens.ts";

const r = new Renderer({ fonts: FONT_CANDIDATES });
await r.open();
const rows: any[] = [];
try {
  for (const f of readdirSync("results/files").filter((x) => x.endsWith(".json")).sort()) {
    const res = JSON.parse(readFileSync(join("results/files", f), "utf8"));
    if (res.job.kind !== "generate") continue;
    const dir = join("data/flowstep", res.id);
    const shots = res.screens.map((s: any) => ({ jsx: readFileSync(join(dir, `s${s.screen}.jsx`), "utf8"), png: readFileSync(join(dir, `s${s.screen}.png`)) }));
    const families = [...new Set(parseDesignMd(readFileSync(`study/brands/${res.brand}.md`, "utf8")).typeScale.map((t) => t.family))];
    for (const fam of families) {
      const named = shots.filter((s: any) => s.jsx.includes(`font-[${fam.replace(/ /g, "_")}]`) || s.jsx.includes(`font-['${fam.replace(/ /g, "_")}']`) || s.jsx.includes(fam)).length;
      // --font-sans set to the brand family, so font-sans text also asks for it
      const vars = { ...res.calibration.vars, "--font-sans": `"${fam}"` };
      let withF = 0;
      let without = 0;
      for (const s of shots) {
        const sz = PNG.sync.read(s.png);
        const o = { width: sz.width, height: sz.height, vars };
        withF += l1((await r.render(s.jsx, { ...o, fonts: FONT_CANDIDATES })).png, s.png);
        without += l1((await r.render(s.jsx, { ...o, fonts: FONT_CANDIDATES.filter((x) => x !== fam) })).png, s.png);
      }
      const row = { id: res.id, brand: res.brand, arm: res.arm, family: fam, screensNamingIt: named, l1With: withF / shots.length, l1Without: without / shots.length, flowstepHasIt: withF < without };
      rows.push(row);
      console.log(`${res.id.padEnd(8)} ${fam.padEnd(15)} named in ${named}/3  L1 with ${row.l1With.toFixed(2)} without ${row.l1Without.toFixed(2)} -> ${row.flowstepHasIt ? "renders it" : "FALLS BACK"}`);
    }
  }
} finally {
  await r.close();
}
writeFileSync("results/fonts_exploratory.json", JSON.stringify(rows, null, 2));
