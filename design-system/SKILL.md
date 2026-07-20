---
name: austin-finance-design
description: Use this skill to generate well-branded interfaces and assets for Austin (湾区华人理财顾问 — Bay Area Chinese personal-finance advisor), either for production or throwaway prototypes/mocks. Contains colors, type, fonts, spacing, components, and a landing-page UI kit.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files
(tokens/, components/, ui_kits/, guidelines/, assets/).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and
create static HTML files that link `styles.css` for the user to view. If working on
production code, copy assets and read the rules here to design as an expert in this brand.

Core rules to honor: Chinese-primary copy with English finance terms kept inline
(401K, Backdoor Roth, RSU); warm-but-plain "friend's advice" tone, never salesy; no emoji;
Noto Serif SC headings + Noto Sans SC body; one accent hue (深蓝 default, or set
`data-theme="green|teal|slate|bronze"`) plus toned neutrals; 4/8px spacing; cards use a
thin all-around border, never a left-accent stripe.

If invoked without other guidance, ask what the user wants to build, ask a few questions,
then act as an expert designer who outputs HTML artifacts or production code as needed.
