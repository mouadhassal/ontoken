# Pre-registration: does Flowstep paint the brand its DESIGN.md describes?

Frozen on 9 October 2026, after the development run (`dev-D1-G`, 1 file, 3 screens) and before any confirmatory generation. The commit that adds this file is the freeze point. The SHA-256 values at the end pin the protocol and the measurement code.

## Question

Flowstep lets a team attach a brand's DESIGN.md (Google's open format) to a file. Its site says every generation follows the guidelines and that "nothing drifts out of style". This study asks three things:

1. How much of what Flowstep paints is exactly on the brand's tokens (colour, type size and family, spacing, corner radius), with and without guidelines?
2. Does it stay on them across chat edits?
3. Can a deterministic post-pass (`ontoken`) close the gap without changing the design?

## What the development run showed (why the method looks the way it does)

- Flowstep's screens reference theme variables (`bg-primary`, `text-muted-foreground`, `border-border`, `rounded-xl`), not hex values. The API returns no theme. The study therefore **recovers each file's theme from Flowstep's own PNGs**:
  - Colours are recovered by sentinel rendering (`src/calibrate.ts`).
  - Fonts and radius steps are fitted by pixel L1.
  - Every screen is then measured in a renderer calibrated to match Flowstep's. On the dev file, the calibrated render differed from Flowstep's PNG on 1.0–2.3% of pixels (pixelmatch, threshold 0.1), against 4.8–15.7% with an uncalibrated theme.
- On the dev file, Flowstep painted:
  - `primary` as #006469 where the brand says #1F6F78, a shift of ΔE_OK 0.042;
  - `ink` as #001819 where the brand says #0F2A2E, a shift of 0.076;
  - `rounded-xl` as about 6 px where its own internal prompt asked for 12 px.
- Type sizes and spacing were on-token (100% and 99–100%).

Hypotheses H2 and H3 were formed after seeing this one dev file and are labelled as such. H1, H4, H5 and H6 were planned before it.

## Design (amendment 1: sized to the 15-message free trial)

| Part | Files | Messages |
|---|---|---|
| Dev (done) | D1 with guidelines (fjord) | 1 |
| Paired | F1, E1, M1, I1, each generated with guidelines (G) and without (N) | 8 |
| G only | F2, E2, M2, I2 | 4 |
| Drift | F1-G, content-only edits 1 and 2 on all 3 screens | 2 |

- **Briefs** (`study/protocol.ts`) ask for 3 screens each, name the platform, and never mention colour, type, spacing or shape. They are identical in G and N.
- **Brands** (`study/brands/*.md`): four DESIGN.md files, all passing `@google/design.md lint` with 0 errors:
  - Fjord: finance, Inter, Tailwind-compatible sizes;
  - Ember: food, DM Sans, custom sizes 13/15/17/22/28/34;
  - Moss: health, Manrope, 8-point spacing with no 12 px step;
  - Ink: editorial, Source Serif 4 headings and Inter body, sharp corners.
- **Order:** the job order is fixed by seed 20261009 (`jobs()`), with pairs first. If the quota ends early, the study stops at a job boundary and reports what completed.
- **Retries:** a failed generation (error, or a "chat" reply with no screens) is retried up to twice. Flowstep does not charge failed generations.
- **Audit:** all tool calls are logged to `data/flowstep/calls.jsonl`, and raw JSX and PNGs are kept.

## Measurement (frozen in `src/measure.ts`)

- **Usages:** every visible painted value in the calibrated render:
  - text, placeholder, icon, background, gradient-stop and border colours, composited over what is behind them;
  - font size and first font family of each text element;
  - padding, margin (except auto) and gap above 2 px;
  - corner radii of elements that paint a background or border.
- **Tolerances:** a colour is on-token if it is within ΔE_OK ≤ 0.02 of a token (about one just-noticeable difference). A dimension is on-token if it is within 0.5 px of a token. Pills (radius ≥ half the short side) always pass.
- **Screen scores:** per-category rate = on/n. Overall rate covers all usages. `allOn` means every usage is on-token.
- **Contrast:** WCAG 2.x AA for each text element (4.5, or 3.0 for large text) against its composited background.
- **Pixel palette** (renderer-independent, used for H5): the share of *flat* pixels (all 8 neighbours identical) within ΔE_OK ≤ 0.02 of a token, computed on Flowstep's own PNGs.

## Repair (frozen in `src/repair.ts`)

- **Snapping:** each off-token value snaps to the nearest token:
  - colours use OKLab distance with chroma weighted ×4, pick the nearest that keeps AA (3:1 for icons), and use `border`/`rule` tokens for borders;
  - dimensions go to the nearest scale step, with ties to the larger;
  - font family follows the typography token nearest in size.
- **Edits:** class strings only, merged with tailwind-merge. Inherited text colours are fixed where they are declared. Re-render and repeat up to 4 passes.
- **Round trip:** each repaired screen is uploaded with `add-screen-jsx` (no message cost, checked on dev) and Flowstep's render is fetched.

## Hypotheses (confirmatory data only; dev file excluded)

- **H1 (guidelines help; planned).** Paired by brief and screen index (up to 12 pairs), G beats N on:
  - (a) strict colour rate;
  - (b) overall non-colour rate (type, spacing and radius usages pooled).
  Test: exact one-sided Wilcoxon signed-rank, p < 0.05 each.
- **H2 (colour shift; formed on dev).** In at least 75% of G files where the `--primary` theme variable is recovered from ≥ 500 pixels, it differs from the brand's `primary` token by ΔE_OK > 0.02.
- **H3 (residual gap; formed on dev).** At least 75% of G screens have one or more off-token usages before repair.
- **H4 (repair, calibrated renderer; planned).** Across all test screens (G and N, against the brief's brand):
  - (a) ≥ 90% reach overall rate 1.0 after repair;
  - (b) total AA failures fall by ≥ 80% (tested only if there are ≥ 5 before);
  - (c) no screen gains an AA failure;
  - (d) on G screens, the median share of pixels changed by more than 3/255 is ≤ 25%. The repair changes colours by design; this bounds how much.
- **H5 (round trip in Flowstep's own renderer; planned).** On G screens, Flowstep's render of the repaired JSX has pixel-palette adherence ≥ that of the original in ≥ 90% of screens, with median ≥ 0.98.
- **H6 (renderer validity; planned).** The median pixelmatch difference between the calibrated render and Flowstep's PNG is ≤ 3% across test screens.
- **Drift (descriptive only; n = 1 file).** Report per-category rates for F1-G at steps 0, 1 and 2, and whether the recovered theme changed.

## Things that would count against the method

- H6 failing means the metrics describe my renderer more than Flowstep's, and H1–H4 are then reported as indicative only.
- Theme variables recovered from fewer than 50 pixels are flagged. Usages that depend on them are reported both with and without them.

## Pins

The SHA-256 values are listed in `PREREGISTRATION.sha256`, written by the freeze commit.
