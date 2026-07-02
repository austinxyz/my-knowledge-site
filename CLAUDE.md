# CLAUDE.md — 硅谷华人理财顾问网站

Guidance for working on this project. Site = bilingual (中文 / EN) landing site for an independent, fee-only financial advisor.

## 品牌定位

- **独立、透明、不销售产品** 的理财顾问。Fee-only + fiduciary（受托责任）——收入只来自咨询费，不靠卖产品抽佣。
- 定位关键词：中立、专业、亲和、工程师视角。顾问本人工程师出身、CFP® 持证。
- 价值主张：把复杂的钱理出清晰方向。"钱的事，慢慢聊清楚 / Your money, made clear."

## 目标受众

- 30–45 岁湾区（Bay Area）华人科技从业者 / 工程师家庭。
- 典型痛点：RSU vesting、401K / Roth / Mega Backdoor Roth、ISO 行权与 AMT、税务规划、集中持仓风险。
- 中英文均可沟通（中文、英文、中英夹杂皆可）。

## 配色方案

| 角色 | Hex | 用途 |
|------|-----|------|
| 主色 (primary) | `#1a4d3a` | CTA 按钮、强调文字、kicker |
| 深绿 (dark) | `#12362a` | booking 区块背景、深色 tier 卡片 |
| 辅色 / 浅绿 (accent) | `#e9f1ec` | kicker 背景、about 区块背景、浅色按钮底 |
| 背景色 (bg) | `#faf7f2` | 页面暖白背景 |
| 卡片白 | `#fff` | 卡片、pills、浅色按钮 |
| 正文深 (text) | `#17201c` | 主文字色 |
| 正文次 (muted) | `#5b6b63` | 段落次要文字 |
| 淡灰 (subtle) | `#8a9790` | section kicker、图片占位标签 |
| 深绿区内浅文字 | `#cfe0d8` / `#8fc4ad` / `#9fd0ba` | booking 深底上的次要文字 / kicker / QR 标签 |
| 页脚灰 | `#a89f92` | footer |

深色区块（booking / 年度 tier）文字用 `#fff`。占位纹理用 `repeating-linear-gradient` 45deg 双绿条纹。

## 字体规范

- **字体族**：`'Instrument Sans','Noto Sans SC',system-ui,sans-serif`（Google Fonts 加载 Instrument Sans 拉丁 + Noto Sans SC 中文）。
- **等宽 / 标签**：`ui-monospace,Menlo,monospace`（图片占位、QR 标签）。
- **权重**：400 / 500 / 600（拉丁），中文另含 700。标题多用 600。
- **字号**：hero h1 56px（移动 38px）；section 标题 34px；卡片标题 19–20px；正文 15–18px。
- **字距**：标题负字距 `letter-spacing:-.02em ~ -.025em`。
- 渲染：`-webkit-font-smoothing:antialiased`。

## 语气 / Tone

- 温暖、克制、专业。像信任的顾问，不像销售。
- 明确 **不推销**——反复强调 fee-only、无佣金、无销售指标。
- 中文口语但精准（"慢慢聊清楚"、"别白白溜走"）；英文简洁直接（"Sound familiar?"、"Now what?"）。
- 教育口吻、降低门槛（"越早规划越好"），零压力（"初次咨询免费，没有任何推销"）。
- 页脚免责："仅供教育用途，不构成个性化投资建议。"

## 页面列表

| 文件 | 说明 |
|------|------|
| `index.html` | 首页 / 落地页。已实现。bilingual toggle（zh/en），vanilla JS `render()` 驱动 `ZH`/`EN` 数据对象。 |
| `resources.html` | 资源 / 文章页。待建。放理财教育文章列表（RSU、401K、税务等主题）。须复用同一配色、字体、tone、导航、语言切换。 |

## index.html 必须包含的板块

按顺序：

1. **Nav** — 品牌名（🌿 + 名字）、语言切换按钮、CTA「预约免费咨询」。
2. **Hero** — kicker、h1 标题、副标、双 CTA（主 + ghost「了解服务」）、顾问照片占位。
3. **Pains（你面对的问题）** — 标题 + 3 张编号卡片（RSU / 退休账户 / 节税）。
4. **About（关于我）** — 浅绿区块，headshot 占位 + 简介 + 3 个资质 pills（CFP® / Fee-only / 中英双语）。
5. **Services（服务与定价）** — 2 个 tier 卡片：单次深度咨询（浅）、年度财务顾问（深绿）。每卡含名称、描述、价格、要点列表、CTA。
6. **FAQ（常见问题）** — 4 条问答（是否推销 / 资产不多是否值得 / 语言 / 信息安全）。
7. **Booking** — 深绿区块，标题 + 副标 + Calendly CTA + 微信 QR 占位。
8. **Footer** — 版权 + 教育免责声明。

## 技术约定

- 单文件、无构建、无框架。内容数据放 `ZH` / `EN` 两个对象，`render()` 按 `lang` 全局重绘。
- 文本经 `esc()` 转义再插入 innerHTML。
- 未填占位（有意保留）：`[您的名字]`、`$[XXX]` / `$[X,XXX]`、Calendly `your-handle`、微信 QR 图。
- 响应式：`@media (max-width:860px)` 多列栅格降为单列。
- 新页面须沿用上述配色 / 字体 / tone / 双语切换。
