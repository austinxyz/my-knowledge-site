White content card with a numbered accent chip — the three pain-points on the landing page.

```jsx
<FeatureCard index="01" title="401K & Backdoor Roth 没做满">
  公司 match 拿了，但 after-tax 401K、Mega Backdoor Roth 这些免税额度年年浪费。
</FeatureCard>
```

Lay three in a `display:grid; grid-template-columns:repeat(3,1fr); gap:var(--gap-card)`.
