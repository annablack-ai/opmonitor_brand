# ECTMS Asset Registry Intl v1

## Scope
- Output: full brochure + one-pager intl_v1
- Baseline date: 2026-03-19
- Rule: prioritize A-grade assets for print export

## Fields
- asset_id
- usage_page
- file_path
- source
- copyright_status
- resolution_status
- file_size_status
- replacement_priority
- owner
- last_check_date
- grade

## Registry
| asset_id | usage_page | file_path | source | copyright_status | resolution_status | file_size_status | replacement_priority | owner | last_check_date | grade |
|---|---|---|---|---|---|---|---|---|---|---|
| ectms_hero_cover_v01 | P1, OnePager-Hero | ../../../../../assets/images/ectms/hero-cover-v01.jpeg | internal | confirmed | check-before-print | check-before-print | P0 | design | 2026-03-19 | B |
| ectms_policy_cover_ws507 | P2 | ../../../../../assets/images/ectms/图片1.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_flow_map_v01 | P3 | ../../../../../assets/images/ectms/内镜追溯流程图.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_dashboard_overview | P4, OnePager-Core | ../../../../../assets/images/ectms/管理后台数据概览.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_mobile_ui_v02 | P4, OnePager-Core | ../../../../../assets/images/ectms/手机端2.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_bigscreen_ui_v01 | P4 | ../../../../../assets/images/ectms/内镜监控大屏.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_scene_install_02 | P5, OnePager-Core | ../../../../../assets/images/ectms/现场安装图02.png | internal | confirmed | check-before-print | check-before-print | P0 | design | 2026-03-19 | B |
| ectms_hw_reader_v01 | P5, OnePager-Core | ../../../../../assets/images/ectms/hw-reader.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_hw_gateway_v01 | P5 | ../../../../../assets/images/ectms/hw-gateway.png | internal | confirmed | check-before-print | check-before-print | P1 | design | 2026-03-19 | B |
| ectms_hw_usb_receiver_v01 | P5 | ../../../../../assets/images/ectms/hw-usb.png | internal | confirmed | check-before-print | check-before-print | P2 | design | 2026-03-19 | B |
| ectms_hw_usb_reader_v01 | P5 | ../../../../../assets/images/ectms/hw-usb-cardreader.png | internal | confirmed | check-before-print | check-before-print | P2 | design | 2026-03-19 | B |
| opmonitor_logo_root | P1,P2,P3,P4,P5,P6,P7,P8,OnePager | ../../../../../opmoniter_logo.png | internal | confirmed | pass | pass | P0 | brand | 2026-03-19 | A |

## Grade Rules
- A: print-ready + copyright confirmed.
- B: usable for structure and online preview; replace with print-grade before final PDF.
- C: not allowed in delivery.

## Export Gate
- Block export if any P0 asset remains B/C.
- Allow test export if P1/P2 assets are B, but mark as draft.
