# 官网图片素材清单与 AI 配图 Prompt｜Codex 交付版

## 1. 使用目标

本文件用于指导官网图片资源结构、图片占位策略、正式图片引用方式，以及后续外部 AI 配图交付标准。

适用范围：

- 首页
- 产品与解决方案页
- 6 个产品详情页
- 客户案例页
- 新闻动态页
- 关于我们页
- 联系我们页

---

## 2. 全局图片规范

### 2.1 全局视觉风格

- 白色科技感
- 抽象系统级视觉
- 量子晶格 / 芯片感
- 微光网络
- 拓扑流场
- 高留白
- 低饱和
- Clinical Blue 医疗蓝
- Titanium Grey 钛金灰
- Pure White 纯白
- Soft Teal 柔和青色
- 不强调具体功能
- 不强调具体设备
- 不强调界面模块

### 2.2 删除或弱化的旧元素

不再将以下元素作为 AI 图主要方向：

- 悬浮 UI 面板
- 管理看板
- 普通仪表盘
- 柱状图 / 饼图
- 具体终端
- 具体称重设备
- 具体传感器
- 具象二维码大卡片
- 具象垃圾桶
- 具象危废包装桶
- 具体硬件产品外观

### 2.3 内容限制

所有 AI 配图必须满足：

- 不出现真实人物
- 不出现医生、护士、患者、监管人员等具象人物
- 不出现真实医院名称
- 不出现真实监管单位名称
- 不出现真实客户 Logo
- 不出现真实业务数据
- 不出现后台系统真实截图
- 不出现精确地图点位、经纬度、具体地址
- 不出现大段中文文字

### 2.4 图片格式

- AI 生成图：`.webp`
- 产品截图：`.png`
- 证书照片：`.jpg` 或 `.png`
- Logo：`.svg` 优先，其次 `.png`

### 2.5 建议尺寸

- 页面横幅 / Hero：16:9，建议 1920 × 1080
- 卡片缩略图：4:3，建议 1200 × 900
- 图标 / 小插图：1:1，建议 1024 × 1024
- 移动端截图：保留原比例

---

## 3. AI 视觉方向升级

### 3.1 方案 A：首页 Hero｜微光量子中枢

适用：

- 首页 Hero
- 产品总览页 Hero
- 关于我们页 Hero
- 客户案例页 Hero

视觉特征：

- 白色 / 极浅蓝背景
- 抽象 AIoT 核心中枢
- 量子核心 / 芯片感核心
- 微光粒子流
- 拓扑连接网络
- 柔和体积光
- 高留白
- 不出现具体设备和 UI 面板

### 3.2 方案 B：产品 / 方案图｜白色数字蓝图与量子晶格

适用：

- 产品与解决方案模块右侧主视觉
- 产品详情页头图
- 技术架构 / 能力介绍区
- 产品列表页 Banner

视觉特征：

- 白色 / 极浅灰蓝背景
- 精密蓝图线条
- 芯片纹理
- 量子晶格结构
- 半透明玻璃感结构块
- 微发光节点
- 秩序化连接关系

### 3.3 方案 C：能力 / 案例图｜开放式微光流场

适用：

- 软硬一体能力
- 客户覆盖
- 新闻封面
- CTA 辅助图
- 案例卡片图

视觉特征：

- 没有明确具体物体
- 由柔和流线、节点、光场、轨迹、量子波纹构成
- 表达感知、连接、留痕、流转、闭环
- 减少 AI 具象失真感

---

## 4. 官网插画风格控制与生成流程

### 4.1 AI 图职责边界

- AI 配图由外部生成并确认后交付给 Codex。
- Codex 不生成图片。
- Codex 不自行找图。
- Codex 不自行改变图片风格。
- Codex 不引用草稿目录图片。
- Codex 只负责目录结构、图片路径、CSS 占位、正式图片引用和 alt 文案。

### 4.2 Codex 允许做

- 创建 `public/images` 目录结构
- 创建图片数据映射文件
- 预留 `.webp` 路径
- 为未提供图片的位置使用 CSS 高级占位
- 为图片设置 alt
- 处理响应式裁切
- 确保不从 `_drafts` 引用图片

### 4.3 Codex 禁止做

- 生成 AI 图片
- 替换图片风格
- 使用网络图片
- 使用未确认图片
- 引用 `_drafts` 目录图片
- 用 AI 假后台图冒充真实截图
- 自行绘制具体设备线稿作为正式视觉

---

## 5. 图片资源目录

```text
public/images
├── brand
│   ├── logo.svg
│   ├── logo.png
│   └── favicon.ico
├── home
│   ├── home_hero_main.webp
│   ├── home_data_support.webp
│   ├── home_capability_visual.webp
│   ├── home_case_medical_waste.webp
│   ├── home_case_hazardous_waste.webp
│   ├── home_case_supervision.webp
│   └── home_case_endoscope.webp
├── products
│   ├── product_visual_placeholder.webp
│   ├── products_banner.webp
│   ├── medical_waste_hero.webp
│   ├── hazardous_waste_hero.webp
│   ├── health_supervision_hero.webp
│   ├── sterilization_monitoring_hero.webp
│   ├── endoscope_compliance_hero.webp
│   └── carbon_management_hero.webp
├── product-screenshots
│   ├── medical_waste_ui_01.png
│   ├── medical_waste_ui_02.png
│   ├── hazardous_waste_ui_01.png
│   ├── health_supervision_ui_01.png
│   ├── sterilization_ui_01.png
│   └── endoscope_ui_01.png
├── cases
│   ├── cases_banner.webp
│   └── china_coverage_map.svg
├── news
│   ├── news_banner.webp
│   ├── news_cover_policy.webp
│   └── news_cover_company.webp
├── about
│   ├── about_banner.webp
│   └── certificates
└── contact
    └── contact_banner.webp
```

---

## 6. Codex 图片配置建议

可在项目中创建图片路径映射，例如：

```ts
export const siteImages = {
  products: {
    placeholder: '/images/products/product_visual_placeholder.webp',
    banner: '/images/products/products_banner.webp',
    medicalWaste: '/images/products/medical_waste_hero.webp',
    hazardousWaste: '/images/products/hazardous_waste_hero.webp',
    healthSupervision: '/images/products/health_supervision_hero.webp',
    sterilizationMonitoring: '/images/products/sterilization_monitoring_hero.webp',
    endoscopeCompliance: '/images/products/endoscope_compliance_hero.webp',
    carbonManagement: '/images/products/carbon_management_hero.webp',
  },
};
```

如正式图片不存在：

- 前端应使用 CSS 高级占位，不报错。
- 不显示灰色默认图片图标。
- 不显示“图片占位”文字。

---

## 7. 必备图片清单

| 编号 | 文件名 | 页面 | 来源 | 用途 | 优先级 |
|---|---|---|---|---|---|
| 1 | `logo.svg` | 全站 | 现有素材 | 顶部导航、Footer | P0 |
| 2 | `home_hero_main.webp` | 首页 | 外部 AI 生成 | 首页首屏主视觉 | P0 |
| 3 | `products_banner.webp` | 产品列表页 | 外部 AI 生成 | 产品页横幅 | P0 |
| 4 | `medical_waste_hero.webp` | 医废产品页 | 外部 AI 生成 | 产品头图 | P0 |
| 5 | `hazardous_waste_hero.webp` | 危废产品页 | 外部 AI 生成 | 产品头图 | P0 |
| 6 | `health_supervision_hero.webp` | 智慧卫监页 | 外部 AI 生成 | 产品头图 | P0 |
| 7 | `sterilization_monitoring_hero.webp` | 消毒灭菌页 | 外部 AI 生成 | 产品头图 | P0 |
| 8 | `endoscope_compliance_hero.webp` | 内镜合规页 | 外部 AI 生成 | 产品头图 | P0 |
| 9 | `carbon_management_hero.webp` | 碳管理页 | 外部 AI 生成 | 产品头图 | P0 |
| 10 | `china_coverage_map.svg` | 客户案例页 | 前端 / SVG | 区域覆盖地图 | P0 |
| 11 | `cases_banner.webp` | 客户案例页 | 外部 AI 生成 | 页面横幅 | P1 |
| 12 | `news_banner.webp` | 新闻动态页 | 外部 AI 生成 | 页面横幅 | P1 |
| 13 | `about_banner.webp` | 关于我们页 | 外部 AI 生成 | 页面横幅 | P1 |
| 14 | `contact_banner.webp` | 联系我们页 | 外部 AI 生成 | 页面横幅 | P2 |
| 15 | `news_cover_policy.webp` | 新闻卡片 | 外部 AI 生成 | 行业政策封面 | P2 |
| 16 | `news_cover_company.webp` | 新闻卡片 | 外部 AI 生成 | 公司动态封面 | P2 |

---

## 8. 产品截图清单

产品截图可先用占位图，后续替换为脱敏截图。

| 文件名 | 产品 | 内容要求 | 说明 |
|---|---|---|---|
| `medical_waste_ui_01.png` | 医废 | 总览 / 管理看板 | 使用脱敏或模拟数据 |
| `medical_waste_ui_02.png` | 医废 | 称重 / 标签 / 暂存流程 | 使用脱敏或模拟数据 |
| `hazardous_waste_ui_01.png` | 危废 | 五即一码总览 | 使用脱敏或模拟数据 |
| `hazardous_waste_ui_02.png` | 危废 | 标签赋码 / 入库 / 出库 | 使用脱敏或模拟数据 |
| `health_supervision_ui_01.png` | 智慧卫监 | 在线监管总览 | 使用脱敏或模拟数据 |
| `health_supervision_ui_02.png` | 智慧卫监 | 实时预警 / 事件闭环 | 使用脱敏或模拟数据 |
| `sterilization_ui_01.png` | 消毒灭菌 | 温压监测 / 曲线 | 使用脱敏或模拟数据 |
| `endoscope_ui_01.png` | 内镜合规 | 流程记录 / 接口对接 | 可先用示意图 |

截图不得包含：真实客户名称、真实医院名称、患者信息、监管对象清单、真实业务明细、真实后台账号信息。

---

## 9. AI 生成图 Prompt

### 9.1 统一 Prompt 前缀

```text
基于已确认的智感云官网抽象系统级视觉风格，生成同系列官网配图。整体保持白色科技感、Clinical Blue 医疗蓝、Pure White 纯白、Titanium Grey 钛金灰、Soft Teal 柔和青色，画面应抽象、克制、系统化、留白充足，具有量子晶格、芯片感、微光网络、拓扑流场和精密秩序感。不要做成普通轻 3D SaaS 插画，不要强调具体功能、具体设备或界面模块。不要出现真实人物、医生、护士、患者、监管人员、真实医院名称、真实客户 Logo、真实后台数据、真实系统截图、精确点位、具体地址、具象垃圾桶、具体硬件产品外观、具体产品 SKU 或可识别设备造型。不要大段文字，尽量不要出现可读文字。
```

### 9.2 统一负向 Prompt

```text
不要普通 SaaS 插画，不要轻 3D 塑料感，不要过多悬浮面板，不要大量图表，不要明显仪表盘，不要普通云平台模板感，不要高饱和霓虹色，不要赛博朋克，不要糖果色，不要具体垃圾桶，不要医废桶，不要危废包装桶，不要具体智能称重设备，不要具体 PDA，不要具体传感器设备，不要具体产品 SKU，不要真实人物，不要医生、护士、患者、监管人员，不要真实医院名称，不要真实客户 Logo，不要真实后台数据，不要真实系统截图，不要大段文字，不要像说明书插画，不要过于具象，不要像后台系统截图，不要密集信息图。
```

### 9.3 材质与光感提示词

所有 Prompt 可优先使用以下词汇：

- clinical white background
- micro glow particles
- quantum lattice structure
- precision network lines
- chip-like topology
- frosted glass accents
- titanium grey details
- soft volumetric lighting
- clean architectural composition
- calm futuristic atmosphere
- high-end minimal tech aesthetic
- low saturation blue-white palette
- abstract system-level visual

### 9.4 首页 Hero｜`home_hero_main.webp`

```text
生成一张高端科技公司官网首页 Hero 全铺背景图，主题为“AIoT 赋能医疗卫生与生态环境智慧合规”。

整体采用白色科技、抽象系统级视觉，而不是普通 SaaS 插画。画面以 Pure White 纯白、Clinical Blue 医疗蓝、Titanium Grey 钛金灰和 Soft Teal 柔和青色为主，干净明亮、留白充足、克制高级，具有量子科技感、芯片感和微光未来感。

主视觉为一个抽象的 AIoT 核心中枢 / 量子核心 / 晶格核心，不要画成具体设备。核心周围延展微发光粒子流、细线拓扑网络、柔和能量环和少量连接节点，隐喻感知、连接、业务流转、责任留痕和合规闭环。整体更像系统级视觉图腾，而不是产品说明插画。

背景保持极简、安静、纯净，可带有极淡的空间雾化层次、轻微晶格纹理和低透明度量子波纹。画面左侧必须预留较大留白，适合叠加官网标题、副标题和按钮；主视觉集中在中部偏右区域。

不要出现真实人物、医生、护士、患者、监管人员；不要出现真实医院名称、真实客户 Logo、真实后台数据；不要出现具体垃圾桶、具体硬件设备、普通屏幕面板、仪表盘、二维码卡片或太多可识别 UI 模块。不要大段文字，尽量不要出现可读文字。

整体气质要高级、抽象、系统化、秩序化，减少具象物体，减少普通云平台元素，避免明显 AI 模板感。
```

### 9.5 产品 / 方案图 Prompt 母版

适用于：

- `products_banner.webp`
- `medical_waste_hero.webp`
- `hazardous_waste_hero.webp`
- `health_supervision_hero.webp`
- `sterilization_monitoring_hero.webp`
- `endoscope_compliance_hero.webp`
- `carbon_management_hero.webp`

```text
生成一张用于科技公司官网产品 / 解决方案页面的抽象概念图，主题为“白色数字蓝图与量子晶格架构”。

整体采用 Pure White 纯白、极浅蓝、Clinical Blue 医疗蓝、Titanium Grey 钛金灰为主色，风格克制、高级、系统化，不要普通 SaaS 插画感。画面为一个抽象的系统蓝图 / 晶格架构 / 拓扑网络，带有精细的结构线、网格基底、微发光节点、半透明玻璃感结构块和秩序化连接关系。整体更像一个工程级系统架构图或量子计算结构，而不是普通 3D 产品插画。

可隐喻 AIoT 中枢、数据感知、连接网络、业务留痕、风险提醒和合规闭环，但不要用明显的屏幕面板、柱状图、饼图、二维码卡片或后台界面去表达。不要出现具体设备外观，不要出现真实人物，不要出现真实医院名称、真实客户 Logo 和真实数据。

画面要安静、抽象、精密、富有秩序，留白充足，适合放在官网板块右侧或产品页头图位置。尽量不要出现可读文字。
```

### 9.6 产品方向可加入的轻量语义

| 图片 | 可加入的轻量语义 | 不应出现 |
|---|---|---|
| `medical_waste_hero.webp` | 追溯节点、责任留痕路径、合规闭环 | 垃圾桶、周转桶、具体称重设备 |
| `hazardous_waste_hero.webp` | 赋码节点、规范流程、联单关系 | 危废桶、包装桶、危险标识堆叠 |
| `health_supervision_hero.webp` | 监测网络、预警节点、监管闭环 | 监管人员、摄像头大特写、后台大屏 |
| `sterilization_monitoring_hero.webp` | 参数波形、监测节点、异常流转 | 灭菌设备、温度计大图标 |
| `endoscope_compliance_hero.webp` | 流程闭环、接口连接、质控节点 | 内镜设备具象图、清洗场景 |
| `carbon_management_hero.webp` | 流向曲线、碳账路径、协同分析 | 大叶子、碳排图标堆叠 |

---

## 10. 首页案例卡片图 Prompt

### 10.1 能力 / 案例 / 新闻图 Prompt 母版

适用于：

- `home_capability_visual.webp`
- `home_case_medical_waste.webp`
- `home_case_hazardous_waste.webp`
- `home_case_supervision.webp`
- `home_case_endoscope.webp`
- `cases_banner.webp`
- `news_banner.webp`
- `news_cover_policy.webp`
- `news_cover_company.webp`
- `about_banner.webp`
- `contact_banner.webp`

```text
生成一张抽象概念型科技官网配图，强调开放式微光流场、连接网络和合规流转。不要强调具体物体、具体设备、具体界面模块。整体以 Pure White 纯白、极浅蓝、Clinical Blue 医疗蓝和 Soft Teal 柔和青色为主，使用柔和流线、微发光粒子、点状节点、量子波纹和拓扑路径构成画面，表达 AIoT 感知、连接、流转、留痕和闭环能力。

画面应抽象、安静、系统化、高级、留白充分，不要像 SaaS 插画，不要像后台系统图，不要像云平台模板图。不要出现真实人物、真实医院、真实客户 Logo、真实设备或可识别 UI 面板。
```

---

## 11. Codex 图片处理规则

### 11.1 产品视觉占位规则

产品与解决方案模块右侧图暂时使用高级 CSS 占位，直到正式 AI 图确认。

占位风格：

- 白色 / 极浅蓝渐变
- 极淡芯片纹理
- 微光节点
- 拓扑线
- 轻量量子圆环
- 不出现“图片占位”文字
- 不出现灰色图片 icon
- 不出现具体设备线稿
- 不出现假系统截图

建议预留路径：

```ts
productVisualPlaceholder: '/images/products/product_visual_placeholder.webp'
```

### 11.2 第一版处理原则

- 所有图片路径按本文件目录结构预留。
- 没有正式图片时，使用同尺寸高级 CSS 占位或正式占位图。
- 地图使用 SVG 或前端组件实现，不使用 AI 生成的真实点位图。
- 产品截图模块可先隐藏或显示占位卡片。
- 图片组件统一支持 `alt` 文案。
- 所有图片应支持响应式裁切，避免移动端变形。

---

## 12. 图片 alt 文案

| 图片 | alt 文案 |
|---|---|
| `home_hero_main.webp` | 智感云 AIoT 软硬一体数字化解决方案 |
| `products_banner.webp` | 智感云产品与解决方案 |
| `medical_waste_hero.webp` | 医疗废物精细化追溯系统 |
| `hazardous_waste_hero.webp` | 危险废物五即一码规范化管理系统 |
| `health_supervision_hero.webp` | 智慧卫监解决方案 |
| `sterilization_monitoring_hero.webp` | 消毒灭菌监测系统 |
| `endoscope_compliance_hero.webp` | 内镜合规平台 |
| `carbon_management_hero.webp` | 碳管理与减污降碳协同 |
| `cases_banner.webp` | 智感云客户案例与区域覆盖 |
| `news_banner.webp` | 智感云新闻动态与行业政策 |
| `about_banner.webp` | 关于智感云科技 |
| `contact_banner.webp` | 联系智感云获取产品演示 |

---

## 13. 上线前必须补齐

- `logo.svg`
- 首页 Hero 图
- 6 个产品页 Hero 图
- 中国区域覆盖地图 SVG 或前端地图组件
- 至少 2 张新闻封面图
- 资质证书图片
- 产品截图占位图或脱敏截图

---

## 14. 禁止事项

- 禁止 AI 生成真实人物场景图
- 禁止使用未授权客户 Logo
- 禁止使用真实医院、监管单位、客户名称
- 禁止展示真实业务数据、后台数据、患者信息、监管对象清单
- 禁止在地图中展示具体客户点位、地址、经纬度
- 禁止使用内部投标文件截图作为官网图片
- 禁止用 AI 生成假系统截图冒充真实产品界面
