// Upload each repaired screen to its Flowstep file as a new screen (add-screen-jsx, code-first)
// and fetch Flowstep's own render of it. Checks that the repair survives Flowstep's renderer.
//   npx tsx study/roundtrip.ts [--only <jobId>]
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Flowstep } from "../src/flowstep.ts";

const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : null;
const fs = new Flowstep({ log: "data/flowstep/calls.jsonl" });
await fs.connect();
const quota = async () => JSON.stringify((await fs.must("get-plan-details")).json.remaining);
try {
  const q0 = await quota();
  for (const id of readdirSync("data/fixed").sort()) {
    if (only && id !== only) continue;
    const meta = JSON.parse(readFileSync(join("data/flowstep", id, "meta.json"), "utf8"));
    for (const [k, s] of meta.screens.entries()) {
      const out = join("data/fixed", id, `s${k + 1}.flowstep_after.png`);
      if (existsSync(out)) continue;
      const orig = JSON.parse(readFileSync(join("data/flowstep", id, `s${k + 1}.json`), "utf8"));
      const jsx = readFileSync(join("data/fixed", id, `s${k + 1}.jsx`), "utf8");
      const add = await fs.must("add-screen-jsx", {
        fileId: meta.fileId,
        name: `ontoken fixed ${id} s${k + 1}`.slice(0, 100),
        fidelity: orig.fidelity ?? "ui",
        screenType: orig.screenType,
        colorTheme: orig.colorTheme ?? "default",
        jsx,
      });
      const img = await fs.must("get-screen-image", { fileId: meta.fileId, screenId: add.json.screenId });
      writeFileSync(out, img.image!);
      const back = await fs.must("get-screen-jsx", { fileId: meta.fileId, screenId: add.json.screenId });
      writeFileSync(join("data/fixed", id, `s${k + 1}.flowstep_after.json`), JSON.stringify(back.json, null, 2));
      console.log(`${id} s${k + 1} -> ${add.json.screenId}`);
    }
  }
  const q1 = await quota();
  console.log(`quota before ${q0} after ${q1}`);
} finally {
  await fs.close();
}
