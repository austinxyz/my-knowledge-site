# Austin 理财 · Design System

A single-advisor brand system for **Austin**, a North-American Chinese personal-finance
advisor serving Bay Area Chinese engineers (401K / RSU / ISO / 529 / tax planning).
Extracted from the landing page in this project. Tone: **professional but warm — like
advice from a friend**, low-key and trustworthy, never salesy or overly "techy".

> **Sources:** derived from the project's landing page (`湾区理财顾问落地页.dc.html`).
> No external codebase, Figma, or brand guide was provided. Headshot at
> `assets/about.jpg` is the advisor's own photo (user upload).

## How to consume
Link the one entry file — it `@import`s every token + font:
```html
<link rel="stylesheet" href="styles.css">
```
Everything is driven by CSS custom properties. Switch the whole accent palette by
setting `data-theme` on any container: `green`, `teal`, `slate`, `bronze` (default is
深蓝 / deep blue, no attribute needed).

## Content fundamentals
- **Language:** Chinese-primary; technical terms kept in English inline — `401K`,
  `Backdoor Roth`, `RSU`, `vest`, `comp package`, `Fiduciary`. Never translate these.
- **Voice:** first person ("我是 Austin"), speaks to "你". Warm, plain-spoken, concrete.
  e.g. "用你听得懂的话，只给建议，不做推销。"
- **Claims:** honest and specific ("从业 10 年", "服务 200+ 客户"). Placeholder facts
  are wrapped in 〔…·占位〕 and monospace chips until the advisor supplies real ones
  (credentials, Calendly link, WeChat QR).
- **Casing:** no all-caps except letter-spaced eyebrows. **No emoji.** `✓` and `→` used
  functionally only. A compliance disclaimer sits in the footer.

## Visual foundations
- **Color:** warm off-white canvas (`--bg #fbfbf9`) on a cream backdrop (`--page`),
  toned ink/body/muted neutrals (never pure `#000`). One accent hue in three depths
  (`--accent` / `--accent-strong` / `--accent-deep`) plus a light `--accent-tint`.
  5 interchangeable schemes; discipline is 1 hue + neutrals per page.
- **Type:** `Noto Serif SC` for display/headings (warmth + authority), `Noto Sans SC`
  for body, monospace for credentials/placeholders. Scale: 44 / 30 / 19 / 17 / 15 / 13 / 12.
- **Spacing:** 4/8px grid; sections are `72px 56px`; card grids `gap 24px`.
- **Cards:** white surface, 1px `--line` border, `radius 14–16`, soft `--shadow-raise`;
  NO left-accent-border pattern. Featured pricing tier is filled with `--accent` + `--shadow-pop`.
- **Backgrounds:** flat color + on-tone section bands (`--accent-band`); the only gradient
  is a bottom protection scrim on the hero photo (legibility). No decorative gradients.
- **Imagery:** real photography, warm/neutral. Honest striped + monospace placeholders
  where assets are missing (WeChat QR).
- **Motion / states:** minimal. Hover = `brightness(.9)` dim on buttons/links. No bounces.
- **Radii:** buttons 9, chips 11, cards 14, pricing 16, pills 99.

## Iconography
No icon set in the source. Functional glyphs only — `✓` (feature check), `→` (CTA).
The brand mark is the letter **A** in `Noto Serif SC` on an accent tile — there is **no
logo file**; render the name in type where a mark is needed. If an icon set becomes
needed, use a thin-stroke CDN set (e.g. Lucide) and document it here.

## Index / manifest
- `styles.css` — entry; imports the four token files.
- `tokens/` — `typography.css`, `colors.css` (+ theme scopes), `spacing.css`, `effects.css`.
- `guidelines/` — specimen cards: colors (accent / schemes / neutrals), type (display / body),
  spacing scale, radii & shadows.
- `components/core/` — `Button`, `Badge`, `SectionHeading`.
- `components/cards/` — `FeatureCard`, `PricingCard`.
- `ui_kits/landing/` — full landing-page recreation (`index.html`), a starting point.
- `assets/about.jpg` — advisor headshot.

### Intentional additions
- `SectionHeading`, `FeatureCard`, `PricingCard` — extracted from the page's recurring
  patterns so future pages inherit the same rhythm.
