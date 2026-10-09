"""Figures for the report. Reads results/*.json and PNGs; writes paper/fig_*.png.
Run with any Python that has matplotlib and pillow:  python study/figures.py
"""
import json
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "paper"
OUT.mkdir(exist_ok=True)
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 9, "axes.spines.top": False, "axes.spines.right": False})

summary = json.loads((ROOT / "results/summary_v2.json").read_text())
verd = json.loads((ROOT / "results/verdicts_v2.json").read_text())


def brand_colors(brand):
    import re
    text = (ROOT / f"study/brands/{brand}.md").read_text()
    head = text.split("typography:")[0]
    return dict(re.findall(r'^  ([\w-]+): "(#[0-9A-Fa-f]{6})"', head, re.M))


# ---------- Fig 1: brand token vs what Flowstep painted (primary and body text)
rows = []
for f in sorted((ROOT / "results/files_v2").glob("[EFIM][0-9]-G.json")):
    r = json.loads(f.read_text())
    if r["job"]["kind"] != "generate":
        continue
    bc = brand_colors(r["brand"])
    v = r["calibration"]["vars"]
    sup = r["calibration"]["support"]
    rows.append((r["id"], r["brand"], bc["primary"], v.get("--primary"), sup.get("--primary", 0), bc["ink"], v.get("--foreground"), sup.get("--foreground", 0)))
h2 = {x["id"]: x["delta"] for x in verd["H2"]["rows"]}

fig, ax = plt.subplots(figsize=(3.4, 3.3))
ax.set_xlim(0, 10)
ax.set_ylim(-0.5, len(rows) + 0.6)
ax.axis("off")
ax.text(1.0, len(rows) + 0.15, "primary\nbrand | painted", ha="center", va="bottom", fontsize=7)
ax.text(5.6, len(rows) + 0.15, "body text\nbrand | painted", ha="center", va="bottom", fontsize=7)
for i, (fid, brand, bp, fp, sp, bi, fi, si) in enumerate(rows[::-1]):
    y = i
    for x, c in [(0.0, bp), (1.0, fp), (4.6, bi), (5.6, fi)]:
        if c:
            ax.add_patch(Rectangle((x, y), 0.95, 0.8, color=c, ec="#999", lw=0.3))
    ax.text(2.15, y + 0.4, f"ΔE {h2.get(fid, 0):.3f}", va="center", fontsize=7, color="#b42318" if (h2.get(fid) or 0) > 0.02 else "#2e7d4f")
    ax.text(-0.15, y + 0.4, fid, va="center", ha="right", fontsize=7)
    if fi and si >= 50:
        from math import sqrt
        ax.text(6.75, y + 0.4, f"{fi}", va="center", fontsize=6, color="#555")
ax.text(0.0, -0.45, "ΔE = OKLab distance; 0.02 ≈ 1 just-noticeable difference", fontsize=6, color="#555")
fig.tight_layout()
fig.savefig(OUT / "fig_theme.png", dpi=220)
plt.close(fig)

# ---------- Fig 2: adherence by category
cats = [("color", "Colour"), ("type", "Type"), ("spacing", "Spacing"), ("radius", "Radius"), ("overall", "Overall")]
fig, ax = plt.subplots(figsize=(3.4, 2.5))
w = 0.27
series = [
    ("No guidelines (N, 12 screens)", [summary["N"]["before"][c] for c, _ in cats], "#c9c9c9"),
    ("DESIGN.md attached (G, 24)", [summary["G"]["before"][c] for c, _ in cats], "#1f6f78"),
    ("G + ontoken repair", [summary["G"]["after"][c] for c, _ in cats], "#f2a541"),
]
for k, (lab, vals, col) in enumerate(series):
    xs = [i + (k - 1) * w for i in range(len(cats))]
    ax.bar(xs, [100 * v for v in vals], w, label=lab, color=col)
    for x, v in zip(xs, vals):
        ax.text(x, 100 * v + 1.5, f"{100 * v:.0f}", ha="center", fontsize=5.5)
ax.set_xticks(range(len(cats)))
ax.set_xticklabels([n for _, n in cats], fontsize=7.5)
ax.set_ylabel("median % of values on-token", fontsize=7.5)
ax.set_ylim(0, 110)
ax.tick_params(axis="y", labelsize=7)
ax.legend(fontsize=6.5, frameon=False, loc="upper center", ncol=1, bbox_to_anchor=(0.5, -0.13))
fig.tight_layout()
fig.savefig(OUT / "fig_rates.png", dpi=220)
plt.close(fig)

# ---------- Fig 3: Flowstep's own render, original vs repaired in place
picks = [("F1-G", 1), ("E2-G", 2), ("M2-G", 1), ("I1-G", 1)]
ims = []
for fid, k in picks:
    a = Image.open(ROOT / f"data/flowstep/{fid}/s{k}.png").convert("RGB")
    b = Image.open(ROOT / f"data/fixed_v2/{fid}/s{k}.flowstep_replaced.png").convert("RGB")
    ims.append((fid, a, b))
H = 560
cells = []
for fid, a, b in ims:
    a = a.crop((0, 0, a.width, min(a.height, H)))
    b = b.crop((0, 0, b.width, min(b.height, H)))
    cells.append((fid, a, b))
gap = 8
W = sum(a.width + b.width + gap * 2 for _, a, b in cells)
canvas = Image.new("RGB", (W, H), "white")
x = 0
for fid, a, b in cells:
    canvas.paste(a, (x, 0))
    canvas.paste(b, (x + a.width + gap // 2, 0))
    x += a.width + b.width + gap * 2
fig, ax = plt.subplots(figsize=(7.0, 7.0 * H / W + 0.35))
ax.imshow(canvas)
ax.axis("off")
x = 0
for fid, a, b in cells:
    ax.text(x + a.width / 2, -10, f"{fid}: Flowstep", ha="center", fontsize=6.5)
    ax.text(x + a.width + gap // 2 + b.width / 2, -10, "after ontoken", ha="center", fontsize=6.5, color="#1f6f78")
    x += a.width + b.width + gap * 2
fig.tight_layout(pad=0.2)
fig.savefig(OUT / "fig_before_after.png", dpi=220)
plt.close(fig)
print("figures written")
