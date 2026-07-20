# Austin 理财 · Design Tokens (extract)

Structured token extract of the *Austin 理财 · Design System* in this project. Values are
pulled from the live token files (`tokens/*.css`) — nothing invented. Consume the real CSS
via `styles.css`; this doc is the human-readable reference.

- **Sources:** `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`,
  `tokens/effects.css`, and the landing page they were extracted from.
- **Tone of the system:** warm-neutral canvas, one accent hue, professional-but-warm.

---

## Colors

### Brand accent — 深蓝 (default)
| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#274a6d` | Primary buttons, links, filled pricing tier, hero photo panel |
| `--accent-strong` | `#1f3d59` | Booking band background |
| `--accent-deep` | `#162c40` | Footer background |
| `--accent-tint` | `#eef2f7` | Pills, icon chips, credential chips |
| `--accent-band` | `#f3f6f9` | About-section band |
| `--accent-border` | `#e6ebef` | Borders on tinted bands / outline buttons |
| `--check` | `#9ec8ee` | Check marks on the filled tier |
| `--link` | → `--accent` | Anchor color |

**On-accent text** (for dark accent surfaces):
`--on-accent #ffffff` · `--on-accent-muted #cfdce8` · `--on-accent-faint #9db1c6`

### Alternative accent schemes (opt-in via `data-theme` on a container)
| Scheme | `--accent` | `--accent-strong` | `--accent-deep` | `--accent-tint` | `--check` |
|---|---|---|---|---|---|
| `green` | `#2f5d4e` | `#274b3f` | `#16362b` | `#eaf1ec` | `#8fd3b6` |
| `teal` | `#1f5a5f` | `#184a4e` | `#0f3437` | `#e7f1f1` | `#86d0cf` |
| `slate` | `#3a4a63` | `#2e3b50` | `#202938` | `#eef0f5` | `#a9b7d0` |
| `bronze` | `#6b5334` | `#57432a` | `#3a2d1c` | `#f3efe7` | `#d8c297` |
| *(default)* `深蓝` | `#274a6d` | `#1f3d59` | `#162c40` | `#eef2f7` | `#9ec8ee` |

### Neutrals (warm-toned; no pure #000)
| Token | Hex | Usage |
|---|---|---|
| `--page` | `#eceae4` | Outermost backdrop / canvas |
| `--bg` | `#fbfbf9` | Page surface (warm off-white) |
| `--surface` | `#ffffff` | Cards |
| `--ink` | `#1c2420` | Headings |
| `--body` | `#4b5650` | Body copy |
| `--muted` | `#78827b` | Eyebrows, captions, meta |
| `--line` | `#e8ebe8` | Hairline borders / dividers |

> **Semantic colors (success / warning / error / info): not defined** — this brand had no
> such states in the source. See Findings.

---

## Typography

**Families**
| Token | Stack | Role |
|---|---|---|
| `--font-display` | `'Noto Serif SC', Georgia, serif` | Headlines (warmth + authority) |
| `--font-body` | `'Noto Sans SC', system-ui, -apple-system, sans-serif` | Body |
| `--font-mono` | `ui-monospace, Menlo, Consolas, monospace` | Credentials / placeholders |

**Size scale** (px)
| Token | Size | Named style |
|---|---|---|
| `--text-hero` | 44 | Hero H1 |
| `--text-price` | 40 | Pricing figure |
| `--text-h2` | 30 | Section heading |
| `--text-h3` | 19 | Card heading |
| `--text-title` | 18 | Pricing tier title |
| `--text-lead` | 17 | Hero subhead |
| `--text-body-lg` | 16 | Emphasized body |
| `--text-body` | 15 | Body |
| `--text-small` | 13 | Captions |
| `--text-eyebrow` | 12 | Eyebrow label |

**Weights (loaded only):** `--weight-regular 400` · `--weight-medium 500` ·
`--weight-semibold 600` · `--weight-bold 700`

**Line height:** `--lh-tight 1.28` · `--lh-snug 1.4` · `--lh-body 1.75` · `--lh-loose 1.8`

**Letter spacing:** `--track-eyebrow 0.16em` (eyebrow labels only)

---

## Spacing (4/8px grid)
| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--space-1` | 4px | | `--space-6` | 32px |
| `--space-2` | 8px | | `--space-7` | 40px |
| `--space-3` | 12px | | `--space-8` | 56px |
| `--space-4` | 16px | | `--space-9` | 72px |
| `--space-5` | 24px | | | |

**Composite / layout**
`--gap-card 24px` · `--pad-card 32px 28px` · `--pad-card-lg 40px 32px` ·
`--section-y 72px` · `--section-x 56px` · `--page-max 1080px`

---

## Radii
`--radius-sm 7px` (logo tile) · `--radius 9px` (buttons) · `--radius-md 11px` (icon chips) ·
`--radius-lg 14px` (cards, photos) · `--radius-xl 16px` (pricing cards) · `--radius-pill 99px`

## Shadows
| Token | Value | Usage |
|---|---|---|
| `--shadow-card` | `0 1px 3px rgba(0,0,0,.06)` | Resting cards |
| `--shadow-raise` | `0 4px 22px rgba(0,0,0,.07)` | Raised cards |
| `--shadow-photo` | `0 16px 36px rgba(28,44,62,.2)` | Photos |
| `--shadow-pop` | `0 16px 34px rgba(0,0,0,.22)` | Featured pricing tier |

---

## Findings

**Sources used:** the project's four `tokens/*.css` files and the landing page
(`湾区理财顾问落地页.dc.html` / `ui_kits/landing/index.html`).

**Categories extracted:** colors (accent + 4 alt schemes + neutrals + on-accent), typography
(families, size scale, weights, line-height, tracking), spacing, radii, shadows.

**Gaps — your decisions to make (not filled silently):**
- **Semantic colors** (success / warning / error / info) — none in the source; add if forms
  or status UI are ever needed.
- **Full neutral ramp** — only 5 neutral steps exist (`page → line`), not a 9–11 step gray
  scale. Fine for a marketing page; expand if you build data-dense UI.
- **Z-index, motion durations/easings, breakpoints** — not tokenized (single fixed-width
  page; hover is a one-off `brightness(.9)`).

**Inconsistencies / notes:**
- `--gap-card` is `24px` (on-grid); the original page used `26px` in places — already
  consolidated to 24.
- `--radius-sm/md` (7px / 11px) are off the 4/8 grid — intentional, carried from the
  page's original values; not snapped.
- Accent themes are complete for the visible surfaces but only redefine the accent-family
  vars; neutrals stay shared across all schemes (by design).

**Recommended next steps:** review this file, then reference `styles.css` in every new
page so the system stays consistent; add semantic + neutral-ramp tokens only when a
surface actually needs them.
