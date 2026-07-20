Two-tier pricing card. `featured` fills it with the accent and inverts the text (the year plan on the landing page). Composes `Button`.

```jsx
<PricingCard name="单次深度咨询" price="$299" note="一次 90 分钟 · 一对一"
  features={["梳理最紧迫的 401K / RSU / 税务问题","当场给出可执行清单","会后 7 天内文字答疑"]}
  cta="预约单次咨询" />
<PricingCard featured name="年度全程规划" price="$899" period="/年" note="全年陪伴 · 随时可问"
  features={["401K / RSU / 税务 季度复盘","年度现金流与退休测算","微信随时答疑 · 关键节点提醒"]}
  cta="预约年度规划" />
```

Lay two in a `grid-template-columns:1fr 1fr; gap:var(--gap-card)`.
