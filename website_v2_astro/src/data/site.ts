import type { AboutCapabilityItem, AudiencePathway, CapabilityItem, ContactCommitment, HeroBullet, HeroPanelItem, ProofPoint, SiteMeta } from '@/types/site';

export const siteMeta: SiteMeta = {
  name: '北京智感云科技有限公司',
  shortName: '智感云',
  title: '智感云 | AIoT 赋能医疗卫生与生态环境智慧合规',
  description:
    '北京智感云科技有限公司，面向医疗废物、危险废物、卫生监督、消毒灭菌、内镜合规与减污降碳场景，提供 AIoT 软硬一体数字化解决方案。800+ 客户服务经验。',
  tagline:
    '面向医疗卫生、生态环境、公共卫生监督、院感合规与减污降碳场景的 AIoT 软硬一体数字化解决方案服务商。',
  phone: '400-160-1008',
  email: 'info@opmonitor.com',
  website: 'www.opmonitor.com',
  address: '北京市亦庄经济开发区',
  icp: '以上线备案信息为准',
};

export const homeHeroBullets: HeroBullet[] = [
  { label: '软硬一体', value: '覆盖智能终端、移动采集、业务系统与监管驾驶舱。' },
  { label: '业务过程留痕', value: '围绕关键业务节点形成过程记录和责任追溯。' },
  { label: '合规闭环', value: '从现场作业到监管协同形成完整业务闭环。' },
];

export const homeHeroPanel: HeroPanelItem[] = [
  { label: '客户服务', value: '800+ 客户长期服务经验', tone: 'success' },
  { label: '区域覆盖', value: '近 30 个省市 / 地区', tone: 'default' },
  { label: '记录沉淀', value: '5000 万+ 条业务追溯记录' },
  { label: '终端接入', value: '5000 台+ 智能终端与监测设备', tone: 'warning' },
];

export const trustHighlights = ['客户覆盖全国多地', '800+ 客户服务经验', '匿名案例与区域覆盖展示'];

export const audiencePathways: AudiencePathway[] = [
  {
    audience: '医疗机构',
    title: '院内管理与合规建设方案',
    summary: '围绕医废追溯、消毒灭菌监测、内镜合规和院内流程留痕，服务医疗机构数字化建设需求。',
    href: '/products/medical-waste/',
    ctaLabel: '查看相关方案',
    highlights: ['医废追溯', '消毒灭菌监测', '内镜合规'],
  },
  {
    audience: '监管部门',
    title: '监管协同与闭环管理方案',
    summary: '围绕在线监测、实时预警、非现场执法辅助与问题闭环，服务监管数字化建设需求。',
    href: '/products/health-supervision/',
    ctaLabel: '查看相关方案',
    highlights: ['智慧卫监', '风险提醒', '闭环监管'],
  },
  {
    audience: '危废相关单位',
    title: '危废规范化管理方案',
    summary: '围绕“五即一码”、标签赋码、扫码入库和联单关联，服务危废规范化管理建设需求。',
    href: '/products/hazardous-waste/',
    ctaLabel: '查看相关方案',
    highlights: ['五即一码', '联单关联', '源头纳管'],
  },
  {
    audience: '园区 / 集团化单位',
    title: '平台协同与减污降碳方案',
    summary: '围绕多主体协同、驾驶舱分析和集团化治理能力，服务园区与集团化客户建设需求。',
    href: '/products/carbon-management/',
    ctaLabel: '查看相关方案',
    highlights: ['集团协同', '综合驾驶舱', '减污降碳'],
  },
];

export const homeHero = {
  title: 'AIoT 赋能医疗卫生与生态环境智慧合规',
  subtitle:
    '围绕医疗废物、危险废物、卫生监督、消毒灭菌、内镜合规与减污降碳等场景，提供智能终端、业务系统、监管驾驶舱与合规闭环的一体化解决方案。',
  supporting:
    '从现场作业到监管驾驶舱，从智能感知到责任追溯，帮助医疗机构、监管部门及相关单位提升业务规范性、风险响应能力和合规管理效率。',
};

export const serviceCoverage = [
  '医疗废物精细化追溯',
  '危险废物“五即一码”',
  '智慧卫监',
  '消毒灭菌监测',
  '内镜合规',
  '碳管理与减污降碳协同',
];

export const capabilities: CapabilityItem[] = [
  {
    title: '智能感知',
    description: '支持二维码、RFID、电子秤、智能称重终端、温压传感器、物联网关、摄像头、移动端等多种采集方式。',
  },
  {
    title: '业务留痕',
    description: '对产生、包装、称重、赋码、入库、出库、交接、监测、整改、归档等关键环节进行过程记录和责任留痕。',
  },
  {
    title: '风险提醒',
    description: '支持超时、超期、漏项、重量异常、流程缺失、设备离线、参数异常等规则提醒。',
  },
  {
    title: '安全合规',
    description: '支持权限分级、日志审计、脱敏展示、本地化 / 私有化部署和授权范围内统计分析，满足医院、监管部门及相关单位的合规要求。',
  },
];

export const capabilityProcess = ['终端感知', '业务记录', '风险提醒', '合规闭环'];

export const aboutPage = {
  shortIntro:
    '北京智感云科技有限公司成立于 2019 年，总部位于北京亦庄经济开发区，并在安徽、江苏、山东等地设有子公司或服务团队。公司专注于医疗卫生、院感合规、公共卫生监督及生态环境相关场景的物联网应用和数字化解决方案，已形成医疗废物、危险废物、智慧卫监、消毒灭菌监测、内镜合规等产品方向。',
  longIntro:
    '北京智感云科技有限公司成立于 2019 年，总部位于北京亦庄经济开发区，是一家专注于高监管场景 AIoT 应用与软硬一体数字化解决方案的科技企业。公司围绕医疗卫生、院感合规、公共卫生监督、生态环境和减污降碳等方向，持续研发医疗废物精细化追溯、危险废物“五即一码”规范化管理、智慧卫监、消毒灭菌监测、内镜合规等产品。公司具备从智能硬件、嵌入式系统、移动应用、业务软件到监管驾驶舱的综合研发与交付能力，服务覆盖多类型医疗机构、监管部门及危废相关客户。通过智能感知、业务留痕、风险提醒和合规闭环，智感云帮助客户提升现场作业规范性、管理协同效率和监管响应能力。',
};

export const aboutCapabilities: AboutCapabilityItem[] = [
  { title: 'AIoT 智能感知', description: '覆盖智能终端、移动采集、在线监测与设备接入。' },
  { title: '软硬一体交付', description: '从前端感知到业务系统与监管驾驶舱形成一体化建设能力。' },
  { title: '医疗卫生场景经验', description: '围绕医废、危废、卫监、消毒灭菌和内镜合规形成持续实践。' },
  { title: '高监管业务理解', description: '适配高合规要求下的业务过程记录、追溯和风险提醒。' },
  { title: '本地化 / 私有化部署', description: '支持医院、监管部门及相关单位的安全与部署要求。' },
  { title: '权限分级与日志审计', description: '满足授权范围统计分析、审计追踪和合规治理要求。' },
  { title: '长期运维服务能力', description: '围绕多院区、多角色、多终端持续提供实施与运维支持。' },
];

export const aboutProofPoints: ProofPoint[] = [
  {
    title: '产品化沉淀',
    description: '围绕医疗废物、危险废物、智慧卫监、消毒灭菌监测、内镜合规和减污降碳形成持续演进的产品矩阵。',
  },
  {
    title: '软硬一体交付',
    description: '从前端感知设备、移动采集到业务系统和监管驾驶舱提供统一方案设计与交付能力。',
  },
  {
    title: '高监管场景理解',
    description: '针对医院、监管部门、危废相关单位与园区客户的合规要求，强调业务留痕、权限审计和风险闭环。',
  },
  {
    title: '长期服务能力',
    description: '围绕多院区、多角色、多终端场景提供上线实施、持续优化与运维支持。',
  },
];

export const contactCommitments: ContactCommitment[] = [
  {
    title: '沟通前建议准备',
    description: '建议提前明确机构类型、建设场景、关注产品、部署范围和核心问题，便于快速进入方案沟通。',
  },
  {
    title: '我们如何对接',
    description: '提交需求后，将结合您的机构类型与建设目标安排产品演示、方案答疑和重点能力说明。',
  },
  {
    title: '您将获得什么',
    description: '可获得匹配的产品方向建议、建设重点梳理、软硬件形态说明及下一步沟通建议。',
  },
];

export const certifications = [
  'ISO9001 质量管理体系认证',
  'ISO27001 信息安全管理体系认证',
  'ISO14001 环境管理体系认证',
  '知识产权管理体系认证',
  '知识产权与软著成果：78 项',
  '其他资质证书',
];

export const customerTypeCards = [
  {
    title: '医疗机构',
    description: '覆盖医废精细化追溯、消毒灭菌监测、内镜合规等院内管理场景，辅助医院减少人工台账、强化过程留痕和提升合规管理效率。',
  },
  {
    title: '监管部门',
    description: '支持监管对象管理、在线监测、实时预警、非现场执法辅助和问题整改闭环，提升监管协同能力。',
  },
  {
    title: '危废相关单位',
    description: '支持危废产生、包装、称重、赋码、入库、出库和联单关联，提升危废规范化管理水平。',
  },
  {
    title: '园区 / 集团化单位',
    description: '支持多主体、多点位、多类型业务的统一查看和分级管理，为园区无废建设和减污降碳协同提供基础支撑。',
  },
];

export const complianceNotice =
  '因医疗、监管及生态环境相关业务具有较高数据安全与合规要求，部分客户案例以匿名、概括或区域分布方式展示。页面内容仅包含经授权公开的信息，不展示真实敏感数据、业务明细、系统后台数据、精确地址或未经授权的客户标识。';