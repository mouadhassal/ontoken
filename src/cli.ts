#!/usr/bin/env -S npx tsx
// ontoken check <screen.jsx> --design DESIGN.md [--json]
// ontoken fix   <screen.jsx> --design DESIGN.md [-o fixed.jsx] [--png prefix]
import { readFileSync, writeFileSync } from "node:fs";
import { hex } from "./color.ts";
import { measure, type Report } from "./measure.ts";
import { diffFraction } from "./pixels.ts";
import { Renderer } from "./render.ts";
import { repair } from "./repair.ts";
import { parseDesignMd } from "./tokens.ts";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : undefined;
}

const pct = (x: number) => `${(100 * x).toFixed(1)}%`;

export function describe(rep: Report): string {
  const s = rep.summary;
  const line = (k: string, c: { n: number; on: number; rate: number }) => `  ${k.padEnd(8)} ${String(c.on).padStart(4)}/${String(c.n).padEnd(4)} ${pct(c.rate)}`;
  const out = [
    line("colour", s.color),
    line("type", s.type),
    line("spacing", s.spacing),
    line("radius", s.radius),
    line("overall", s.overall),
    `  contrast ${s.contrastN - s.contrastFail}/${s.contrastN} pass WCAG AA`,
  ];
  const off = rep.usages.filter((u) => !u.on).slice(0, 12);
  if (off.length) out.push("  first off-token values:");
  for (const u of off)
    out.push(`    ${u.owner ?? "-"} ${u.cat}/${u.kind}: ${u.color ? hex(u.color) : u.family ?? `${u.px}px`}`);
  return out.join("\n");
}

async function main() {
  const [cmd, file] = process.argv.slice(2);
  const design = arg("--design");
  if (!cmd || !file || !design) {
    console.error("usage: ontoken check|fix <screen.jsx> --design DESIGN.md [-o out.jsx] [--png prefix] [--json]");
    process.exit(2);
  }
  const tokens = parseDesignMd(readFileSync(design, "utf8"));
  const src = readFileSync(file, "utf8");
  const renderer = new Renderer({ fonts: [...new Set(["Inter", ...tokens.typeScale.map((t) => t.family)])] });
  try {
    if (cmd === "check") {
      const r = await renderer.render(src);
      const rep = measure(r.els, tokens);
      if (process.argv.includes("--json")) console.log(JSON.stringify(rep.summary, null, 2));
      else console.log(`${file} vs ${tokens.name}\n${describe(rep)}`);
      if (arg("--png")) writeFileSync(`${arg("--png")}.png`, r.png);
      process.exitCode = rep.summary.allOn && rep.summary.contrastFail === 0 ? 0 : 1;
    } else if (cmd === "fix") {
      const res = await repair(renderer, src, tokens);
      const out = arg("-o") ?? file.replace(/(\.\w+)?$/, ".fixed$1");
      writeFileSync(out, res.src);
      console.log(`before\n${describe(res.beforeReport)}\nafter (${res.passes.length - 1} passes, ${res.editedNodes} elements edited)\n${describe(res.afterReport)}`);
      console.log(`  pixels changed ${pct(diffFraction(res.before.png, res.after.png))}  -> ${out}`);
      if (arg("--png")) {
        writeFileSync(`${arg("--png")}.before.png`, res.before.png);
        writeFileSync(`${arg("--png")}.after.png`, res.after.png);
      }
    } else throw new Error(`unknown command ${cmd}`);
  } finally {
    await renderer.close();
  }
}

if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/")}` || process.argv[1].endsWith("cli.ts")) await main();
