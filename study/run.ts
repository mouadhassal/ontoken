// Run the protocol against Flowstep's MCP server. Resumable: a job with done.json is skipped.
//   npx tsx study/run.ts --phase dev        # development jobs only
//   npx tsx study/run.ts --phase test       # confirmatory jobs (after the pre-registration is frozen)
//   npx tsx study/run.ts --plan             # print the job order and exit
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Flowstep } from "../src/flowstep.ts";
import { jobs, type Job } from "./protocol.ts";

const DATA = "data/flowstep";
const phase = process.argv.includes("--phase") ? process.argv[process.argv.indexOf("--phase") + 1] : "dev";
const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : null;
const sha = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 16);
const brandMd = (b: string) => readFileSync(`study/brands/${b}.md`, "utf8");

if (process.argv.includes("--plan")) {
  for (const j of jobs()) console.log(j.phase.padEnd(5), j.kind.padEnd(9), j.id);
  process.exit(0);
}

const fs = new Flowstep({ log: join(DATA, "calls.jsonl") });

async function remaining(): Promise<{ daily: number; monthly: number; raw: any }> {
  const r = await fs.must("get-plan-details");
  const rem = r.json?.remaining?.messages ?? {};
  const unlimited = r.json?.limits?.messages?.unlimited;
  // a null or missing limit means the plan has no such limit
  const lim = (v: unknown) => (unlimited || v == null ? Infinity : Number(v));
  return { daily: lim(rem.daily), monthly: lim(rem.monthly), raw: r.json };
}

/** Save the raw get-screen-jsx response, the JSX and the PNG for each screen. */
async function saveScreens(dir: string, fileId: string, screenIds: string[]) {
  const out: { screenId: string; jsx: string; png: boolean; screenType?: string; colorTheme?: string }[] = [];
  for (const [k, screenId] of screenIds.entries()) {
    const code = await fs.must("get-screen-jsx", { fileId, screenId });
    writeFileSync(join(dir, `s${k + 1}.json`), JSON.stringify(code.json ?? code.text, null, 2));
    writeFileSync(join(dir, `s${k + 1}.jsx`), code.json?.jsx ?? code.text ?? "");
    const img = await fs.call("get-screen-image", { fileId, screenId });
    if (img.image) writeFileSync(join(dir, `s${k + 1}.png`), img.image);
    out.push({ screenId, jsx: `s${k + 1}.jsx`, png: !!img.image, screenType: code.json?.screenType, colorTheme: code.json?.colorTheme });
  }
  return out;
}

/** Design tools block until done; a failed generation is not charged, so retry twice. */
async function generate(tool: string, args: Record<string, unknown>) {
  let last = "";
  for (let attempt = 1; attempt <= 3; attempt++) {
    const r = await fs.call(tool, args);
    if (!r.isError && r.json?.status === "generated" && r.json?.screenIds?.length) return { ...r.json, attempts: attempt };
    last = r.text ?? "no screenIds";
    console.log(`  ${tool} attempt ${attempt} failed: ${last.slice(0, 200)}`);
  }
  throw new Error(`${tool} failed 3 times: ${last}`);
}

async function runJob(j: Job) {
  const dir = join(DATA, j.id);
  mkdirSync(dir, { recursive: true });
  const t0 = Date.now();
  let meta: Record<string, unknown>;
  if (j.kind === "generate") {
    const file = await fs.must("create-file", { name: `ontoken ${j.id}` });
    const fileId = file.json.file.id;
    let guidelinesSet: string | null = null;
    if (j.arm === "G") {
      const md = brandMd(j.brief.brand);
      const up = await fs.must("update-design-guidelines", { fileId, designGuidelines: md });
      guidelinesSet = sha(md);
      writeFileSync(join(dir, "guidelines_update_response.txt"), up.text ?? "");
    }
    const gen = await generate("ai-generate-screens", { fileId, message: j.brief.prompt });
    const after = await fs.call("get-design-guidelines", { fileId });
    const gl = after.json?.guidelines ?? null;
    if (gl) writeFileSync(join(dir, "guidelines_after.md"), gl);
    const screens = await saveScreens(dir, fileId, gen.screenIds);
    meta = {
      job: j,
      fileId,
      screenIds: gen.screenIds,
      screens,
      attempts: gen.attempts,
      designGuidelinesUpdated: gen.designGuidelinesUpdated,
      guidelinesSetSha: guidelinesSet,
      guidelinesAfterSha: gl ? sha(gl) : null,
    };
  } else {
    const base = JSON.parse(readFileSync(join(DATA, j.base, "meta.json"), "utf8"));
    const gen = await generate("ai-edit-screens", { fileId: base.fileId, message: j.message, elementIds: base.screenIds });
    const after = await fs.call("get-design-guidelines", { fileId: base.fileId });
    const gl = after.json?.guidelines ?? null;
    const screens = await saveScreens(dir, base.fileId, gen.screenIds);
    meta = {
      job: j,
      fileId: base.fileId,
      targets: base.screenIds,
      screenIds: gen.screenIds,
      screens,
      attempts: gen.attempts,
      designGuidelinesUpdated: gen.designGuidelinesUpdated,
      guidelinesAfterSha: gl ? sha(gl) : null,
    };
  }
  meta.seconds = Math.round((Date.now() - t0) / 1000);
  meta.finishedAt = new Date().toISOString();
  writeFileSync(join(dir, "meta.json"), JSON.stringify(meta, null, 2));
  writeFileSync(join(dir, "done.json"), "{}");
}

await fs.connect();
try {
  const todo = jobs().filter((j) => j.phase === phase && (!only || j.id === only) && !existsSync(join(DATA, j.id, "done.json")));
  console.log(`${todo.length} ${phase} jobs pending`);
  for (const j of todo) {
    const q = await remaining();
    writeFileSync(join(DATA, "plan_latest.json"), JSON.stringify(q.raw, null, 2));
    if (q.daily < 1 || q.monthly < 1) {
      console.log(`quota exhausted (daily ${q.daily}, monthly ${q.monthly}); stopping before ${j.id}`);
      break;
    }
    console.log(`[${j.id}] quota daily ${q.daily} monthly ${q.monthly}`);
    await runJob(j);
    console.log(`[${j.id}] done`);
  }
} finally {
  await fs.close();
}
