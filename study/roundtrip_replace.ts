// EXPLORATORY (after H5 failed): Flowstep keeps each AI-generated screen's theme on the
// screen, and add-screen-jsx (pre-registered H5 route) starts from the default theme.
// This replaces each original screen in place with its repaired JSX (replace-screen-jsx,
// code-first, no message cost) and fetches Flowstep's render. Originals stay in data/flowstep.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Flowstep } from "../src/flowstep.ts";

const IDS = ["F1-G", "F2-G", "E1-G", "E2-G", "M1-G", "M2-G", "I1-G", "I2-G"];
// --v2: the amendment-2 repair (data/fixed_v2); otherwise the frozen repair (data/fixed)
const FIXED = process.argv.includes("--v2") ? "data/fixed_v2" : "data/fixed";
const fs = new Flowstep({ log: "data/flowstep/calls.jsonl" });
await fs.connect();
try {
  for (const id of IDS) {
    const meta = JSON.parse(readFileSync(join("data/flowstep", id, "meta.json"), "utf8"));
    for (const [k, s] of meta.screens.entries()) {
      const out = join(FIXED, id, `s${k + 1}.flowstep_replaced.png`);
      if (existsSync(out)) continue;
      const jsx = readFileSync(join(FIXED, id, `s${k + 1}.jsx`), "utf8");
      const rep = await fs.must("replace-screen-jsx", { fileId: meta.fileId, screenId: s.screenId, jsx });
      const img = await fs.must("get-screen-image", { fileId: meta.fileId, screenId: rep.json.screenId });
      writeFileSync(out, img.image!);
      console.log(`${id} s${k + 1} replaced`);
    }
  }
} finally {
  await fs.close();
}
