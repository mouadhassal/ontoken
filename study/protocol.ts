// The study protocol as data: briefs, arms, drift edits and the frozen job order.
// PREREGISTRATION.md quotes this file; its SHA-256 is recorded there.

export type Brand = "fjord" | "ember" | "moss" | "ink";
export type Brief = { id: string; brand: Brand; platform: "mobile" | "web"; prompt: string };

// The last sentence stops the agent replying with questions instead of building screens.
const ask = (platform: "mobile" | "web", what: string) =>
  `Generate 3 ${platform === "mobile" ? "mobile app" : "desktop web"} screens for ${what} Do not ask clarifying questions; make reasonable assumptions.`;

/** Development briefs: used to debug the pipeline only, never in the confirmatory analysis. */
export const DEV_BRIEFS: Brief[] = [
  { id: "D1", brand: "fjord", platform: "mobile", prompt: ask("mobile", "a banking app sign-in: email and password sign-in, a two-step verification code entry, and a welcome-back home screen.") },
  { id: "D2", brand: "ember", platform: "web", prompt: ask("web", "a restaurant's website: a landing page with the menu highlights, a table reservation form, and a reservation confirmation.") },
];

/** Confirmatory briefs: three per brand, written before any Flowstep output was seen. */
export const BRIEFS: Brief[] = [
  { id: "F1", brand: "fjord", platform: "mobile", prompt: ask("mobile", "a personal budgeting app: a home dashboard with balance and recent transactions, a transaction detail screen, and a monthly spending breakdown.") },
  { id: "F2", brand: "fjord", platform: "web", prompt: ask("web", "a small-business invoicing tool: an invoice list with filters, a create-invoice form, and a payment-received confirmation.") },
  { id: "F3", brand: "fjord", platform: "mobile", prompt: ask("mobile", "a savings-goals feature: a goals overview, a create-a-new-goal form, and a goal progress detail with deposit history.") },
  { id: "E1", brand: "ember", platform: "mobile", prompt: ask("mobile", "a food delivery app: a restaurant list with search and categories, a restaurant menu, and a cart with checkout summary.") },
  { id: "E2", brand: "ember", platform: "mobile", prompt: ask("mobile", "food order tracking: order confirmed, courier on the way with an ETA, and rate your order.") },
  { id: "E3", brand: "ember", platform: "web", prompt: ask("web", "a restaurant partner dashboard: today's order queue, a menu item editor, and a weekly sales report.") },
  { id: "M1", brand: "moss", platform: "mobile", prompt: ask("mobile", "a habit tracker: today's habits checklist, an add-a-habit form, and weekly streak statistics.") },
  { id: "M2", brand: "moss", platform: "mobile", prompt: ask("mobile", "a sleep and mood journal: log last night's sleep, a mood check-in, and 30-day trends.") },
  { id: "M3", brand: "moss", platform: "web", prompt: ask("web", "a clinic patient portal: upcoming appointments, a book-an-appointment form, and a lab results list.") },
  { id: "I1", brand: "ink", platform: "mobile", prompt: ask("mobile", "a news reader: a front page with top stories, an article page, and saved articles.") },
  { id: "I2", brand: "ink", platform: "web", prompt: ask("web", "a long-read magazine: a homepage with a featured essay, an article reading view, and a newsletter sign-up page.") },
  { id: "I3", brand: "ink", platform: "mobile", prompt: ask("mobile", "the audio section of a news app: today's briefing player, an episode list, and an episode detail with transcript.") },
];

/** Arms: G = file has the brand's DESIGN.md as guidelines; N = no guidelines (chance baseline). */
export type Arm = "G" | "N";

/** Content-only edits for the drift arm; none mentions colour, type, spacing or shape. */
export const DRIFT_EDITS = [
  "Add a dismissible promotional banner near the top of each screen.",
  "Add a secondary text action below the main call to action on each screen.",
  "Add a small status badge to each list item or card.",
  "Add a help section at the bottom of each screen with a contact link.",
];
/**
 * Design actually run (amendment 1, before any test data): the free trial allows 15
 * messages, one of which was spent on dev-D1-G. The 12 briefs above were written for a
 * 40-message design; the trial design uses this subset:
 *   paired G/N:  F1, E1, M1, I1   (8 messages)
 *   G only:      F2, E2, M2, I2   (4 messages)
 *   drift:       F1-G, edits 1 and 2 (2 messages)
 */
export const PAIRED = ["F1", "E1", "M1", "I1"];
export const G_ONLY = ["F2", "E2", "M2", "I2"];
export const DRIFT_BRIEFS = ["F1"];
export const DRIFT_STEPS = 2;

export type Job =
  | { kind: "generate"; id: string; brief: Brief; arm: Arm; phase: "dev" | "test" }
  | { kind: "edit"; id: string; base: string; step: number; message: string; phase: "dev" | "test" };

/** Deterministic shuffle (mulberry32) so the job order is fixed by the seed alone. */
export function shuffle<T>(xs: T[], seed: number): T[] {
  let a = seed >>> 0;
  const rnd = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export const SEED = 20261009;

/**
 * Priority order. If the message quota runs out, the study stops at a job boundary and
 * analyses what completed: (1) G/N pairs in shuffled brief order, arms in shuffled order,
 * (2) G-only briefs in shuffled order, (3) drift steps in order.
 */
export function jobs(): Job[] {
  const out: Job[] = DEV_BRIEFS.map((b) => ({ kind: "generate", id: `dev-${b.id}-G`, brief: b, arm: "G" as Arm, phase: "dev" as const }));
  const byId = (id: string) => BRIEFS.find((b) => b.id === id)!;
  for (const id of shuffle(PAIRED, SEED)) {
    const arms: Arm[] = shuffle(["G", "N"] as Arm[], SEED + id.charCodeAt(0) * 31 + Number(id[1]));
    for (const arm of arms) out.push({ kind: "generate", id: `${id}-${arm}`, brief: byId(id), arm, phase: "test" });
  }
  for (const id of shuffle(G_ONLY, SEED + 1)) out.push({ kind: "generate", id: `${id}-G`, brief: byId(id), arm: "G", phase: "test" });
  for (let k = 0; k < DRIFT_STEPS; k++)
    for (const base of DRIFT_BRIEFS) out.push({ kind: "edit", id: `${base}-G-e${k + 1}`, base: `${base}-G`, step: k + 1, message: DRIFT_EDITS[k], phase: "test" });
  return out;
}
