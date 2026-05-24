# 智感云官网图片素材清单

## brand/

- logo.svg — 全站导航与Footer Logo（P0，待补充）

- logo.png — 备用格式

- favicon.ico — 网站图标（P0，待补充）

## home/

- home_hero_main.webp — 首页首屏主视觉（P0，待AI生成）

- home_data_support.webp — 数据背书模块配图（P1）

- home_capability_visual.webp — 软硬一体能力模块配图（P1）

- home_case_medical_waste.webp — 医废案例卡片图（P2）

- home_case_hazardous_waste.webp — 危废案例卡片图（P2）

- home_case_supervision.webp — 卫监案例卡片图（P2）

- home_case_endoscope.webp — 内镜案例卡片图（P2）

## products/

- products_banner.webp — 产品列表页横幅（P0，待AI生成）

- medical_waste_hero.webp — 医废产品头图（P0，待AI生成）

- hazardous_waste_hero.webp — 危废产品头图（P0，待AI生成）

- health_supervision_hero.webp — 智慧卫监产品头图（P0，待AI生成）

- sterilization_monitoring_hero.webp — 消毒灭菌产品头图（P0，待AI生成）

- endoscope_compliance_hero.webp — 内镜合规产品头图（P0，待AI生成）

- carbon_management_hero.webp — 碳管理产品头图（P0，待AI生成）

## product-screenshots/

- medical_waste_ui_01.png — 医废管理看板截图（待脱敏处理后补充）

- medical_waste_ui_02.png — 医废称重/标签流程截图

- hazardous_waste_ui_01.png — 危废五即一码总览

- hazardous_waste_ui_02.png — 危废标签赋码/入库/出库

- health_supervision_ui_01.png — 卫监在线监管总览

- health_supervision_ui_02.png — 卫监实时预警/事件闭环

- sterilization_ui_01.png — 消毒灭菌温压监测曲线

- endoscope_ui_01.png — 内镜流程记录/接口对接

## cases/

- cases_banner.webp — 客户案例页横幅（P1，待AI生成）

- china_coverage_map.svg — 中国区域覆盖地图（P0，前端SVG实现）

## news/

- news_banner.webp — 新闻动态页横幅（P1，待AI生成）

- news_cover_policy.webp — 行业政策文章封面（P2）

- news_cover_company.webp — 公司动态文章封面（P2）

## about/

- about_banner.webp — 关于我们页横幅（P1，待AI生成）

- certificates/ — 资质证书图片目录（待补充）

## contact/

- contact_banner.webp — 联系我们页横幅（P2，待AI生成）

---

说明：

- P0 = 上线必须，P1 = 尽快补充，P2 = 可延后

- 占位图由前端CSS渐变背景实现，无需真实图片即可正常显示

- 所有AI生成图片的Prompt详见：官网/智感云/官网图片素材清单与ai配图prompt_codex版.md

- 新增图片建议通过仓库根目录脚本 `./manage_website_image.sh` 导入到对应分组目录。

- 推荐命令：`./manage_website_image.sh --section home --source ~/Downloads/hero.png --name home_hero_main`

- 脚本会统一转成 `.webp`、规范化文件名，并回显页面引用路径。