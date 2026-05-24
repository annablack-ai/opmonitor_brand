window.opmonitorData = {
  company: {
    name: '北京智感云科技有限公司',
    shortName: '智感云',
    englishName: 'Opmonitor Tec',
    tagline: '面向医疗卫生、生态环境、公共卫生监督、院感合规与减污降碳场景的 AIoT 软硬一体数字化解决方案服务商。',
    phone: '400-160-1008',
    email: 'info@opmonitor.com',
    website: 'www.opmonitor.com',
    address: '以正式联系方式为准',
    icp: '以上线备案信息为准'
  },
  navigation: [
    { key: 'home', label: '首页', href: 'index.html' },
    { key: 'products', label: '产品与解决方案', href: 'products.html' },
    { key: 'cases', label: '客户案例', href: 'cases.html' },
    { key: 'news', label: '新闻动态', href: 'news.html' },
    { key: 'about', label: '关于我们', href: 'about.html' },
    { key: 'contact', label: '联系我们', href: 'contact.html' }
  ],
  homeStats: [
    { value: '800+', label: '累计服务客户' },
    { value: '近 30 个', label: '覆盖省市 / 地区' },
    { value: '5000 万+ 条', label: '累计业务追溯记录' },
    { value: '10 万吨+', label: '累计追踪医疗废物重量' },
    { value: '5000 台+', label: '接入智能终端与监测设备' },
    { value: '80+ 项', label: '知识产权、软著及资质成果' }
  ],
  capabilities: [
    {
      title: '智能感知',
      icon: 'cpu',
      description: '支持二维码、RFID、电子秤、温压传感器、物联网关、摄像头与移动端等多种采集方式。'
    },
    {
      title: '业务留痕',
      icon: 'database',
      description: '对产生、包装、称重、赋码、入库、出库、交接、监测、整改和归档进行责任留痕。'
    },
    {
      title: '风险提醒',
      icon: 'siren',
      description: '支持超时、漏项、重量异常、流程缺失、设备离线和参数异常等规则提醒。'
    },
    {
      title: '安全合规',
      icon: 'shield-check',
      description: '支持权限分级、日志审计、脱敏展示与本地化 / 私有化部署，适配高监管行业要求。'
    }
  ],
  customerTypes: [
    {
      title: '医疗机构',
      icon: 'hospital',
      description: '覆盖医废精细化追溯、消毒灭菌监测、内镜合规等院内管理场景。'
    },
    {
      title: '监管部门',
      icon: 'shield',
      description: '支持监管对象管理、在线监测、实时预警、非现场执法辅助和问题整改闭环。'
    },
    {
      title: '危废相关单位',
      icon: 'factory',
      description: '支持危废产生、包装、称重、赋码、入库、出库与联单关联。'
    },
    {
      title: '园区 / 集团化单位',
      icon: 'building-2',
      description: '支持多主体、多点位、多类型业务的统一查看与分级管理。'
    }
  ],
  products: [
    {
      slug: 'medical-waste',
      theme: 'blue',
      icon: 'scan-search',
      name: '医疗废物精细化追溯系统',
      shortDescription: '覆盖医疗废物分类收集、称重交接、院内转运、暂存出库与处置交接，形成业务过程留痕、责任追溯与异常提醒闭环。',
      targetUsers: ['医疗机构', '卫健监管部门', '医废处置相关单位'],
      highlights: ['院端管理', '称重交接', '责任追溯'],
      heroTitle: '医疗废物精细化追溯系统',
      heroSubtitle: '面向医疗机构、监管部门及医废相关单位，覆盖从产生、收集、转运、暂存到出库交接的全过程管理。',
      positioning: '系统通过智能称重终端、RFID / 二维码标签、移动采集、院端工作台和监管驾驶舱，辅助医疗机构落实分类管理、交接管理、暂存管理和出库管理要求。',
      painPoints: [
        '人工台账依赖度高，容易出现漏填、错填、补填。',
        '交接环节多，责任链条不易追溯。',
        '重量、时间、交接人员和暂存状态分散，管理效率低。',
        '异常事件发现滞后，难以及时提醒和闭环处理。',
        '多院区、多科室、多角色协同难度高。'
      ],
      features: [
        { title: '科室收集与分类管理', description: '按科室、类别、人员与时间进行医废收集记录。', icon: 'clipboard-list' },
        { title: '智能称重与标签打印', description: '完成重量记录、标签生成与实物绑定。', icon: 'scale' },
        { title: '院内转运与交接管理', description: '记录收集、转运、暂存、出库等节点，形成责任留痕。', icon: 'truck' },
        { title: '暂存间管理', description: '支持库存查看、入库出库、暂存时间提醒和异常记录。', icon: 'archive' },
        { title: '异常提醒', description: '支持重量异常、超时未收、交接缺失和设备离线提醒。', icon: 'triangle-alert' },
        { title: '统计报表与驾驶舱', description: '按科室、时间、类别等维度进行统计归档。', icon: 'monitor' }
      ],
      workflow: ['科室产生', '分类收集', '智能称重', '标签绑定', '院内转运', '暂存入库', '出库交接', '台账归档'],
      values: [
        '帮助医院减少人工台账，提升医废管理效率。',
        '支持全过程留痕，强化主体责任落实。',
        '提升异常发现与处置效率，降低合规风险。',
        '支持医院、处置单位、监管相关方在授权范围内协同管理。'
      ],
      cta: '想了解医废系统如何适配您的医院流程？欢迎预约产品演示。',
      softwarePanels: ['院端工作台总览', '科室收集 / 称重交接', '暂存入库 / 出库交接', '统计报表与院端驾驶舱'],
      hardwarePanels: ['智能称重终端', 'PDA 移动采集设备', '标签打印设备', 'RFID / 二维码标签']
    },
    {
      slug: 'hazardous-waste',
      theme: 'amber',
      icon: 'shield-alert',
      name: '危险废物“五即一码”规范化管理系统',
      shortDescription: '围绕危险废物“即产生、即包装、即称重、即打码、即入库”和“一码贯通”要求，提供源头作业、标签赋码、扫码入库、出库交接与联单关联。',
      targetUsers: ['医疗机构', '危废相关单位', '生态环境 / 卫健监管部门'],
      highlights: ['五即作业', '一物一码', '联单关联'],
      heroTitle: '危险废物“五即一码”规范化管理系统',
      heroSubtitle: '面向医疗机构、产废单位、危废暂存点及监管单位，帮助客户规范危险废物产生、暂存、转移和处置过程中的作业记录与追溯管理。',
      positioning: '结合智能称重终端、E-ink 电子标签、扫码设备、移动端和业务后台，支持区域医疗机构、园区和产废单位全过程规范化管理。',
      painPoints: [
        '危废产生、包装、称重、赋码和入库操作不够规范。',
        '实物、重量、标签、责任人与台账容易脱节。',
        '暂存、出库、转移和联单关联过程缺少有效核验。',
        '不同业态作业模式差异大，难以统一纳管。',
        '监管侧需要掌握纳管进度、联单状态和异常事项。'
      ],
      features: [
        { title: '“五即”作业办理', description: '支持即产生、即包装、即称重、即打码、即入库流程化办理。', icon: 'workflow' },
        { title: '一物一码标签绑定', description: '绑定实物、重量、责任人与流转状态。', icon: 'qr-code' },
        { title: '扫码入库与出库交接', description: '支持暂存入库核验、出库扫码确认和账实一致校验。', icon: 'scan-line' },
        { title: '电子联单关联', description: '关联运输、处置环节联单，辅助实现去向可追。', icon: 'file-stack' },
        { title: '业务后台', description: '支持产生、入库、出库台账和异常事项管理。', icon: 'layout-dashboard' },
        { title: '监管端驾驶舱', description: '查看纳管进度、设备状态、联单状态和异常督办。', icon: 'radar' }
      ],
      workflow: ['产生识别', '合规包装', '自动称重', '标签赋码', '扫码入库', '出库交接', '联单关联', '台账归档'],
      values: [
        '将危废管理从人工填报升级为现场作业留痕。',
        '提升危废实物、标签、重量和台账的一致性。',
        '支撑区域医疗机构、园区和产废单位规范化管理。',
        '为减污降碳协同和监管驾驶舱提供基础支撑。'
      ],
      cta: '想了解“五即一码”如何在区域或机构内落地？欢迎预约方案沟通。',
      softwarePanels: ['危废业务后台总览', '标签赋码 / 打码页面', '扫码入库页面', '联单关联与监管驾驶舱'],
      hardwarePanels: ['智能称重终端', 'E-ink 电子标签', '二维码标签', '扫码设备 / PDA']
    },
    {
      slug: 'health-supervision',
      theme: 'cyan',
      icon: 'waypoints',
      name: '智慧卫监解决方案',
      shortDescription: '融合物联网、人工智能、规则引擎与移动协同能力，支持在线监测、实时预警、非现场执法与问题闭环。',
      targetUsers: ['卫生监督机构', '卫健监管部门', '相关被监管单位'],
      highlights: ['在线监测', '实时预警', '非现场执法'],
      heroTitle: '智慧卫监解决方案',
      heroSubtitle: '围绕监管人员少、监管内容多、专业性强、证据收集困难等痛点，提升线上线下一体化监管能力。',
      positioning: '将物联网设备、在线监测系统、监管后台和预警通知能力结合，覆盖医废监管、消毒灭菌监测、放射源监测、水质监测等多类场景。',
      painPoints: [
        '监管对象多、监管人员少，线下巡检压力大。',
        '异常事件发现滞后，缺少实时预警。',
        '非现场执法证据沉淀不足。',
        '整改反馈与复核销号链条长。',
        '多类监测数据分散，态势分析困难。'
      ],
      features: [
        { title: '监管对象管理', description: '建立被监管单位基础档案和分类管理。', icon: 'folders' },
        { title: '在线监测', description: '接入传感器、摄像头与业务系统数据源。', icon: 'activity' },
        { title: '实时预警', description: '基于规则配置识别异常，并通过多渠道通知。', icon: 'bell-ring' },
        { title: '非现场执法辅助', description: '支持远程查看、事件识别、证据留痕和调度。', icon: 'eye' },
        { title: '问题闭环', description: '支持事件发现、任务派发、整改反馈、复核销号。', icon: 'check-check' },
        { title: '监管驾驶舱', description: '支持监管态势、异常趋势、对象分布和处置进展展示。', icon: 'chart-area' }
      ],
      workflow: ['监管对象接入', '在线监测', '规则识别', '实时预警', '事件处置', '整改复核', '归档分析'],
      values: [
        '提升监管覆盖效率，减少完全依赖现场检查的压力。',
        '支持异常事件及时提醒，提升监管响应速度。',
        '辅助形成证据留痕和工作闭环。',
        '推动卫生监督从经验驱动向数字化协同升级。'
      ],
      cta: '想了解智慧卫监如何支撑在线监管和非现场执法？欢迎预约方案沟通。',
      softwarePanels: ['监管驾驶舱', '在线监测页面', '实时预警列表', '事件闭环 / 复核销号'],
      hardwarePanels: ['在线监测传感器', '摄像头 / 边缘采集设备', '物联网关', '放射源 / 水质监测设备']
    },
    {
      slug: 'sterilization-monitoring',
      theme: 'cyan',
      icon: 'thermometer',
      name: '消毒灭菌监测系统',
      shortDescription: '面向医疗机构、口腔诊所、消毒供应相关场景，对灭菌过程关键参数进行在线监测、异常提醒和记录留痕。',
      targetUsers: ['医疗机构', '口腔诊所', '消毒供应中心', '监管单位'],
      highlights: ['关键参数监测', '异常提醒', '记录留痕'],
      heroTitle: '消毒灭菌监测系统',
      heroSubtitle: '围绕消毒灭菌设备运行状态和关键过程参数建立在线监测能力，辅助提升过程管理规范性。',
      positioning: '通过无线温压一体传感器、物联网关等设备，对灭菌温度、压力和运行过程进行记录和提醒，适用于机构管理和监管场景。',
      painPoints: [
        '灭菌过程记录依赖人工，追溯效率低。',
        '温度、压力等关键参数缺少在线监测和留痕。',
        '异常发现不及时，整改过程难以闭环。',
        '基层医疗机构和口腔诊所监管压力较大。'
      ],
      features: [
        { title: '设备运行监测', description: '对灭菌设备运行状态进行在线采集。', icon: 'monitor-cog' },
        { title: '关键参数记录', description: '记录温度、压力等关键过程参数。', icon: 'thermometer' },
        { title: '异常规则提醒', description: '针对阈值越界、离线和流程异常发出提醒。', icon: 'badge-alert' },
        { title: '图形化展示', description: '以曲线图与状态板方式呈现监测数据。', icon: 'line-chart' },
        { title: '事件记录', description: '沉淀事件处理过程与责任留痕。', icon: 'clipboard-check' },
        { title: '监管端查看', description: '支持院感管理端和监管端授权查看。', icon: 'shield-check' }
      ],
      workflow: ['设备接入', '参数监测', '曲线记录', '异常提醒', '事件处理', '记录归档'],
      values: [
        '减少人工记录依赖。',
        '提升消毒灭菌过程可追溯性。',
        '支持异常及时发现和整改。',
        '辅助医疗机构、诊所和监管单位提升合规管理水平。'
      ],
      cta: '想了解消毒灭菌监测如何应用于机构管理或监管场景？欢迎预约演示。',
      softwarePanels: ['设备监测总览', '温度 / 压力曲线', '异常提醒页面', '事件记录页面'],
      hardwarePanels: ['无线温压一体传感器', '物联网关', '设备接入示意图', '数据采集终端']
    },
    {
      slug: 'endoscope-compliance',
      theme: 'green',
      icon: 'microscope',
      name: '内镜合规平台',
      shortDescription: '支持内镜清洗消毒流程记录、质量控制、接口改造和数据规范化上报，满足洗消记录规范化和流程可追溯需求。',
      targetUsers: ['医疗机构内镜中心', '院感部门', '区域平台对接项目'],
      highlights: ['洗消记录', '质量控制', '接口对接'],
      heroTitle: '内镜合规平台',
      heroSubtitle: '面向医疗机构内镜中心和区域合规对接要求，支持内镜清洗消毒流程记录、质量控制、接口改造和数据规范化上报。',
      positioning: '围绕内镜清洗消毒流程记录、质量控制数据管理、接口改造和合规上报，满足内镜洗消记录规范化与区域平台对接需求。',
      painPoints: [
        '内镜洗消流程节点多，人工记录工作量大。',
        '清洗人员、方式、设备编号和消毒时间需规范留痕。',
        '质量控制数据分散，接口对接复杂。',
        '区域平台对数据传输格式有明确要求。'
      ],
      features: [
        { title: '流程记录', description: '记录内镜使用、回收、测漏、清洗、消毒 / 灭菌、干燥、存储等流程节点。', icon: 'git-branch' },
        { title: '字段管理', description: '支持内镜编号、类型、人员、流程节点等字段管理。', icon: 'list-filter' },
        { title: '关键时间记录', description: '支持手洗 / 机洗关键节点时间记录。', icon: 'clock-3' },
        { title: '质量控制', description: '记录消毒剂浓度、监测结果、批次等质控数据。', icon: 'test-tube' },
        { title: '设备状态记录', description: '记录制水设备、存储柜等相关设备状态。', icon: 'cable' },
        { title: '平台接口对接', description: '支持与区域卫生信息平台、合规平台等接口对接。', icon: 'plug-zap' }
      ],
      workflow: ['内镜使用', '回收', '测漏', '清洗', '消毒 / 灭菌', '干燥', '存储', '合规上报'],
      values: [
        '帮助医疗机构规范内镜洗消记录。',
        '支持内镜中心质量控制数据结构化管理。',
        '满足区域平台或监管侧的数据传输规范要求。',
        '为院感合规和依法执业场景提供基础支撑。'
      ],
      cta: '想了解内镜合规平台如何支持洗消记录和接口对接？欢迎预约沟通。',
      softwarePanels: ['洗消流程记录页面', '质量控制数据页面', '接口对接状态页面', '字段映射示意图'],
      hardwarePanels: ['内镜清洗设备示意', '内镜存储柜示意', '设备接入示意', '接口对接终端']
    },
    {
      slug: 'carbon-management',
      theme: 'green',
      icon: 'leaf',
      name: '碳管理与减污降碳协同',
      shortDescription: '基于固废、危废、医废等业务过程记录，拓展碳核算、减污降碳分析和综合驾驶舱能力。',
      targetUsers: ['园区', '集团化单位', '医疗机构', '管理部门'],
      highlights: ['碳账基础', '趋势分析', '综合驾驶舱'],
      heroTitle: '碳管理与减污降碳协同',
      heroSubtitle: '围绕固废、危废、医废等业务过程中的重量、流向和处置记录，拓展碳核算、减污降碳分析和综合驾驶舱能力。',
      positioning: '通过稳定的业务过程记录，为绿色低碳管理提供基础支撑，适用于园区、医疗机构和集团化单位。',
      painPoints: [
        '固废、危废、医废等业务数据分散，减污降碳分析基础不足。',
        '重量、流向、处置方式等关键记录缺少统一管理。',
        '园区或集团单位需要将环境管理与绿色低碳目标结合。',
        '减污降碳统计和材料准备工作量大。'
      ],
      features: [
        { title: '重量记录', description: '沉淀固废 / 危废 / 医废重量数据。', icon: 'weight' },
        { title: '转移与处置记录', description: '记录流向和处置方式，形成可分析台账。', icon: 'route' },
        { title: '碳账基础数据管理', description: '建立企业或机构碳账基础数据池。', icon: 'book-open-text' },
        { title: '趋势分析', description: '展示减污降碳变化趋势和重点环节。', icon: 'trending-up' },
        { title: '综合驾驶舱', description: '按园区、机构、集团维度提供综合管理视图。', icon: 'panel-top' },
        { title: '政策材料支撑', description: '支持绩效材料和项目汇报的数据组织。', icon: 'files' }
      ],
      workflow: ['业务记录', '重量统计', '流向归集', '处置分析', '碳账核算', '综合驾驶舱'],
      values: [
        '将过程记录转化为绿色管理基础数据。',
        '支持园区和集团单位开展减污降碳协同分析。',
        '辅助管理部门掌握重点环节和变化趋势。',
        '为后续碳核算、绩效评估和绿色低碳管理提供支撑。'
      ],
      cta: '想了解如何从固废管理延伸到减污降碳协同？欢迎预约沟通。',
      softwarePanels: ['碳账基础数据页面', '减污降碳综合驾驶舱', '趋势分析页面', '报表导出页面'],
      hardwarePanels: ['智能称重终端', '地磅物联网网关', '现场采集设备', '数据采集终端']
    }
  ],
  cases: [
    {
      title: '某三甲医院｜医疗废物精细化追溯系统',
      customerType: '医疗机构',
      product: '医疗废物精细化追溯系统',
      region: '华北',
      description: '围绕院内医疗废物分类收集、称重交接、院内转运、暂存出库等环节，建立业务记录、责任留痕、异常提醒和台账归档机制。'
    },
    {
      title: '某区域医疗机构｜危险废物“五即一码”规范化管理系统',
      customerType: '危废相关单位',
      product: '危险废物“五即一码”规范化管理系统',
      region: '华东',
      description: '支持源头赋码、扫码入库、出库交接和联单关联，提升危废管理规范化水平。'
    },
    {
      title: '某市级卫生监督机构｜智慧卫监解决方案',
      customerType: '监管部门',
      product: '智慧卫监解决方案',
      region: '华中',
      description: '围绕监管对象管理、在线监测、风险提醒、监督检查和问题整改，提升非现场监管和工作留痕能力。'
    },
    {
      title: '某医疗机构内镜中心｜内镜合规平台',
      customerType: '医疗机构',
      product: '内镜合规平台',
      region: '华南',
      description: '支持内镜清洗消毒记录规范化、接口化和可追溯管理，适配区域平台对接要求。'
    }
  ],
  news: [
    {
      slug: 'policy-medical-waste',
      title: '医疗废物精细化全程管理的政策要求与建设要点',
      category: '行业政策',
      categoryKey: 'policy',
      date: '2026-05-12',
      summary: '围绕分类收集、称重交接、暂存出库和责任留痕，梳理医院医废管理数字化建设重点。'
    },
    {
      slug: 'policy-hazardous-waste',
      title: '危险废物“五即一码”规范化建设趋势解读',
      category: '行业政策',
      categoryKey: 'policy',
      date: '2026-05-08',
      summary: '从源头作业、标签赋码到联单贯通，分析区域纳管和机构落地的关键控制点。'
    },
    {
      slug: 'policy-supervision',
      title: '卫生监督非现场执法的数字化建设思路',
      category: '行业政策',
      categoryKey: 'policy',
      date: '2026-04-29',
      summary: '通过在线监测、规则预警和整改闭环，提升监管覆盖率和事件响应速度。'
    },
    {
      slug: 'policy-endoscope',
      title: '内镜中心洗消记录合规对接的建设重点',
      category: '行业政策',
      categoryKey: 'policy',
      date: '2026-04-18',
      summary: '从洗消流程节点、质控字段到区域接口规范，梳理合规上报的核心要求。'
    },
    {
      slug: 'company-medical-waste',
      title: '智感云医疗废物精细化追溯系统服务客户突破新阶段',
      category: '公司动态',
      categoryKey: 'company',
      date: '2026-05-15',
      summary: '围绕院内医废管理与监管协同场景，持续提升系统稳定性、现场体验与闭环能力。'
    },
    {
      slug: 'company-hazardous-waste',
      title: '智感云危废“五即一码”解决方案在区域场景快速落地',
      category: '公司动态',
      categoryKey: 'company',
      date: '2026-05-06',
      summary: '面向区域医疗机构与产废单位，形成更轻量、更可复制的危废规范化纳管方案。'
    },
    {
      slug: 'company-supervision',
      title: '智感云智慧卫监解决方案助力监管数字化升级',
      category: '公司动态',
      categoryKey: 'company',
      date: '2026-04-25',
      summary: '以在线监测、预警联动与工作闭环为抓手，支撑多类监管对象的统一管理。'
    },
    {
      slug: 'company-endoscope',
      title: '智感云持续完善内镜合规与院感相关产品能力',
      category: '公司动态',
      categoryKey: 'company',
      date: '2026-04-12',
      summary: '面向内镜中心与院感部门，持续优化流程记录、质控字段与接口改造能力。'
    }
  ],
  about: {
    introShort: '北京智感云科技有限公司成立于 2019 年，总部位于北京亦庄经济开发区，并在安徽、江苏、山东等地设有子公司或服务团队。',
    introLong: '公司专注于医疗卫生、院感合规、公共卫生监督及生态环境相关场景的物联网应用和数字化解决方案，已形成医疗废物、危险废物、智慧卫监、消毒灭菌监测、内镜合规与减污降碳协同等产品方向。',
    tags: ['AIoT 智能感知', '软硬一体交付', '医疗卫生场景经验', '高监管业务理解', '本地化 / 私有化部署', '权限分级与日志审计', '长期运维服务能力'],
    footprints: ['北京亦庄总部', '安徽服务团队', '江苏交付支持', '山东区域服务'],
    certifications: ['ISO9001 质量管理体系认证', 'ISO27001 信息安全管理体系认证', 'ISO14001 环境管理体系认证', '知识产权管理体系认证', '知识产权与软著成果：78 项', '其他资质证书']
  }
};