# ontoken

[![CI](https://github.com/mouadhassal/ontoken/actions/workflows/ci.yml/badge.svg)](https://github.com/mouadhassal/ontoken/actions/workflows/ci.yml)

**Measure and enforce DESIGN.md adherence in AI-generated UI.** It ships with a pre-registered study of [Flowstep](https://flowstep.ai), run through its public MCP server.

`ontoken` renders a Flowstep JSX screen in headless Chromium and reads every painted value: colour, font size and family, spacing and corner radius. It scores each one against a brand's [DESIGN.md](https://github.com/google-labs-code/design.md) tokens and checks WCAG AA contrast. It can then **repair** the screen by snapping off-token values to the nearest token, editing class strings only.

Report: [`paper/ontoken_report.pdf`](paper/ontoken_report.pdf) (4 pages).

## Findings (Flowstep, October 2026)

The study was sized to Flowstep's 15-message free trial: 4 brands, 36 screens and 6,218 painted values.

| | No guidelines | DESIGN.md attached | + ontoken repair |
|---|---|---|---|
| Colours exactly on-token (median) | 18% | 53% | 100% |
| Type sizes and families | 74% | 100% | 100% |
| Spacing | 97% | 100% | 100% |
| Radii | 65% | 100% | 100% |
| Screens with zero off-token values | 0 of 12 | 0 of 24 | 33 of 36 overall |

- **Guidelines work.** Colour adherence triples, p = 0.005 on 12 matched screen pairs.
- **Flowstep re-tints the brand.** The painted primary is **darker than the DESIGN.md primary in 8 of 8 files**, and beyond one just-noticeable difference (ΔE<sub>OK</sub> > 0.02) in 6 of them. The same DESIGN.md gave different primaries in different files.
- **No drift.** Colour adherence was 54%, 54% and 53% across two chat edits.
- **Fonts.** Manrope never renders in Flowstep's PNGs. One file fell back to a Times-like serif.
- **Repair.** The median screen moves 6% of its pixels and no screen gains a contrast failure. Written back with `replace-screen-jsx`, 23 of 24 fixed screens are at least as on-brand in **Flowstep's own renderer** (median flat-pixel adherence 0.993 → 1.000).

Two pre-registered checks failed and are reported:
- H4b: contrast failures fell from 8 to 2, a 75% reduction against an 80% bar.
- H5: `add-screen-jsx` loses the screen's theme.

Two pipeline bugs found after the run are fixed in separate files. Both result sets are kept, in `results/verdicts.json` and `results/verdicts_v2.json`. See [PREREGISTRATION.md](PREREGISTRATION.md).

## How it works

1. **Theme recovery.** Flowstep screens use theme variables (`bg-primary`) whose values the API does not return. Each screen is rendered with every variable set to a unique sentinel colour, and the colour Flowstep painted at those pixels is read back. With the recovered theme, the median render differs from Flowstep's PNG on 2.2% of pixels (`src/calibrate.ts`).
2. **Measurement** (`src/measure.ts`). Every painted value is scored. Colours are composited over what is behind them, and count as on-token within ΔE<sub>OK</sub> ≤ 0.02. Dimensions count within 0.5 px.
3. **Repair** (`src/repair.ts`). Each value goes to the nearest token. Colours use chroma-weighted OKLab and must keep AA contrast. Inherited colours are fixed where they are declared. The pass re-renders until it is stable. Only `className` strings change.

## Use

```bash
npm ci && npx playwright install chromium
npx tsx src/cli.ts check screen.jsx --design DESIGN.md      # exit 1 if anything is off-token
npx tsx src/cli.ts fix   screen.jsx --design DESIGN.md -o fixed.jsx --png out
npx vitest run                                              # 30 tests
```

## Reproduce the study

The raw Flowstep outputs (JSX, PNGs, call log) are committed in `data/`, so everything below runs offline.

```bash
npx tsx study/measure.ts            # frozen pipeline   -> results/files/
npx tsx study/measure.ts --v2       # amended pipeline  -> results/files_v2/
npx tsx study/analyze.ts && npx tsx study/analyze.ts --v2
python study/figures.py && python paper/build_pdf.py
```

New generations need a Flowstep account: `npx tsx study/connect.ts`, then `npx tsx study/run.ts --phase test`.

## Layout

| Path | What |
|---|---|
| `src/jsx.ts` | parse Flowstep JSX, stable element ids, byte-preserving class edits |
| `src/render.ts`, `src/components.tsx` | React SSR + Tailwind v4 + shadcn/lucide stand-ins in Chromium |
| `src/calibrate.ts`, `src/calibrate_v2.ts` | theme, font and radius recovery from Flowstep's PNGs |
| `src/measure.ts`, `src/pixels.ts` | usages, adherence, contrast, pixel-level palette score |
| `src/repair.ts` | token snapping |
| `src/flowstep.ts` | MCP client with OAuth 2.1 PKCE |
| `study/` | protocol, brands, runner, analysis, figures |

MIT licence. Not affiliated with Flowstep.
