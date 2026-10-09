// Log in once and print the account's plan and the server's tool list.
import { writeFileSync } from "node:fs";
import { Flowstep } from "../src/flowstep.ts";
const fs = new Flowstep({ log: "data/flowstep/calls.jsonl" });
await fs.connect();
const tools = await fs.listTools();
writeFileSync("data/flowstep/tools.json", JSON.stringify(tools, null, 2));
console.log("tools:", tools.map((t) => t.name).join(", "));
console.log(JSON.stringify((await fs.must("get-plan-details")).json, null, 2));
await fs.close();
