(() => {
  const ICON_STROKE_WIDTH = 1.75;
  const DEFAULT_COLOR = '#334155';
  const MUTED_COLOR = '#64748B';
  const ACTIVE_COLOR = '#007BFF';

  const productIcons = {
    medical: 'route',
    hazard: 'scan-line',
    supervision: 'radar',
    sterilize: 'gauge',
    endoscope: 'workflow',
    carbon: 'chart-no-axes-combined'
  };

  const capabilityIcons = {
    '智能感知': 'radar',
    '业务留痕': 'file-clock',
    '风险提醒': 'bell-ring',
    '安全合规': 'shield-check'
  };

  const newsIcons = {
    '行业政策': 'file-text',
    '公司动态': 'newspaper',
    '默认': 'newspaper'
  };

  const footerIcons = [
    { match: /(400-|电话|phone)/i, icon: 'phone' },
    { match: /@|mail|email/i, icon: 'mail' },
    { match: /www\.|http|网站/i, icon: 'globe' },
    { match: /北京|地址|location|亦庄/i, icon: 'map-pin' }
  ];

  const contactIcons = [
    { match: /(服务热线|电话|400-)/i, icon: 'phone' },
    { match: /(邮箱|电子邮箱|@)/i, icon: 'mail' },
    { match: /(官网|网站|www\.)/i, icon: 'message-circle' },
    { match: /(地址|位置|总部)/i, icon: 'map-pin' }
  ];

  const productTitleIcons = [
    { match: /医疗废物|医废/, icon: 'route' },
    { match: /危险废物|五即一码|危废/, icon: 'scan-line' },
    { match: /智慧卫监|监督/, icon: 'radar' },
    { match: /消毒灭菌|灭菌/, icon: 'gauge' },
    { match: /内镜/, icon: 'workflow' },
    { match: /碳管理|减污降碳|碳/, icon: 'chart-no-axes-combined' }
  ];

  const semanticIcons = [
    { match: /收集|分类|转运|追溯|流程|留痕|闭环|标签|赋码|对接|接口/, icon: 'workflow' },
    { match: /称重|重量|趋势|分析|统计|驾驶舱|数据|报表/, icon: 'chart-no-axes-combined' },
    { match: /提醒|异常|预警|整改|风险/, icon: 'bell-ring' },
    { match: /合规|安全|权限|审计|认证/, icon: 'shield-check' },
    { match: /扫描|扫码|识别|感知|监测/, icon: 'scan-line' },
    { match: /网络|覆盖|服务团队|客户/, icon: 'network' },
    { match: /总部|地址|区域|北京|江苏|山东|安徽/, icon: 'map-pinned' },
    { match: /文档|台账|记录|政策|知识产权/, icon: 'scroll-text' },
    { match: /演示|预约|沟通/, icon: 'calendar-check' }
  ];

  const tonePalette = {
    blue: { bg: '#EEF6FF' },
    cyan: { bg: '#F6FAFF' },
    green: { bg: '#F6FAFF' },
    amber: { bg: '#F6FAFF' },
    red: { bg: '#F6FAFF' },
    default: { bg: '#F6FAFF' }
  };

  function detectTone(element) {
    if (element.classList.contains('tone-blue')) return 'blue';
    if (element.classList.contains('tone-cyan')) return 'cyan';
    if (element.classList.contains('tone-green')) return 'green';
    if (element.classList.contains('tone-amber')) return 'amber';
    if (element.classList.contains('tone-red')) return 'red';
    return 'default';
  }

  function applyBadgeState(element, options = {}) {
    const tone = options.tone || detectTone(element);
    const size = Number(options.size || element.dataset.size || 0);
    const bg = (tonePalette[tone] || tonePalette.default).bg;
    const active = options.active ?? element.classList.contains('is-active');

    element.dataset.iconReady = 'true';
    element.dataset.tone = tone;
    if (size) {
      element.dataset.size = String(size);
      element.style.setProperty('--icon-box-size', `${size}px`);
      element.style.setProperty('--icon-glyph-size', `${Math.max(14, Math.round(size * 0.625))}px`);
    }
    if (active) element.dataset.active = 'true';
    else element.removeAttribute('data-active');
    element.style.setProperty('--icon-badge-bg', bg);
    element.style.setProperty('--icon-stroke-color', active ? ACTIVE_COLOR : DEFAULT_COLOR);
    element.style.setProperty('--icon-muted-color', MUTED_COLOR);
  }

  function setLucideIcon(element, iconName, options = {}) {
    if (!element || !iconName) return;
    applyBadgeState(element, options);
    element.innerHTML = `<i data-lucide="${iconName}"></i>`;
  }

  function firstText(selectors, scope = document) {
    for (const selector of selectors) {
      const node = scope.querySelector(selector);
      const text = node?.textContent?.trim();
      if (text) return text;
    }
    return '';
  }

  function findMappedIcon(text, rules, fallback) {
    const target = (text || '').trim();
    if (!target) return fallback;
    const matched = rules.find((rule) => rule.match.test(target));
    return matched?.icon || fallback;
  }

  function renderProductTabs() {
    document.querySelectorAll('.product-tab').forEach((tab) => {
      const iconWrap = tab.querySelector('.product-tab-icon');
      if (!iconWrap) return;
      setLucideIcon(iconWrap, productIcons[tab.dataset.product], {
        size: 32,
        active: tab.classList.contains('is-active')
      });
    });
  }

  function renderCapabilityCards() {
    document.querySelectorAll('.capability-card').forEach((card) => {
      const iconWrap = card.querySelector('.capability-icon');
      const title = firstText(['.capability-title'], card);
      if (!iconWrap) return;
      setLucideIcon(iconWrap, capabilityIcons[title] || 'radar', { size: 40 });
    });
  }

  function renderNewsCards() {
    document.querySelectorAll('.news-card, .news-card-full').forEach((card) => {
      let iconWrap = card.querySelector('.news-card-glyph');
      const category = firstText(['.news-card-cat'], card) || '默认';
      if (!iconWrap) {
        const host = card.querySelector('.news-card-img');
        if (!host) return;
        iconWrap = document.createElement('span');
        iconWrap.className = 'news-card-glyph';
        host.appendChild(iconWrap);
      }
      iconWrap.classList.add('icon-badge', 'tone-blue');
      setLucideIcon(iconWrap, newsIcons[category] || newsIcons['默认'], { size: 20, tone: 'blue' });
    });
  }

  function renderFooterIcons() {
    document.querySelectorAll('.footer-contact-item').forEach((item) => {
      const iconWrap = item.querySelector('.footer-contact-icon');
      const text = item.textContent || '';
      const match = footerIcons.find((rule) => rule.match.test(text));
      if (!iconWrap || !match) return;
      setLucideIcon(iconWrap, match.icon, { size: 20, tone: 'default' });
    });
  }

  function renderContactCards() {
    document.querySelectorAll('.contact-info-card').forEach((card) => {
      const iconWrap = card.querySelector('.contact-info-card-icon');
      const text = card.textContent || '';
      const match = contactIcons.find((rule) => rule.match.test(text));
      if (!iconWrap || !match) return;
      setLucideIcon(iconWrap, match.icon, { size: 20 });
    });
  }

  function renderStructuredCards() {
    document.querySelectorAll('.product-card, .case-card, .feature-card, .value-card, .qual-card, .customer-type-card, .network-item').forEach((card) => {
      const iconWrap = card.querySelector('.product-card-icon, .case-card-badge, .feature-icon, .value-icon, .qual-icon, .customer-type-icon, .network-item-icon');
      const title = firstText([
        '.product-card-title',
        '.case-card-title',
        '.feature-title',
        '.value-title',
        '.qual-title',
        '.customer-type-title',
        '.network-item-label',
        'h3'
      ], card);
      if (!iconWrap) return;
      const iconName = findMappedIcon(title, productTitleIcons, findMappedIcon(title, semanticIcons, 'route'));
      const size = iconWrap.classList.contains('feature-icon') || iconWrap.classList.contains('value-icon') ? 30 : 22;
      setLucideIcon(iconWrap, iconName, { size });
    });
  }

  function renderNavCarets() {
    document.querySelectorAll('svg.nav-link-caret').forEach((node) => {
      node.outerHTML = '<span class="nav-link-caret icon-inline" data-icon-ready="true" data-size="14"><i data-lucide="chevron-down"></i></span>';
    });
  }

  function createIcons() {
    if (!window.lucide?.createIcons) return;
    window.lucide.createIcons({
      icons: window.lucide.icons,
      attrs: {
        'stroke-width': ICON_STROKE_WIDTH,
        'absolute-stroke-width': 'true'
      }
    });
  }

  function renderAll() {
    renderNavCarets();
    renderProductTabs();
    renderCapabilityCards();
    renderNewsCards();
    renderFooterIcons();
    renderContactCards();
    renderStructuredCards();
    createIcons();
  }

  window.OpmonitorIcons = {
    refresh() {
      renderAll();
    }
  };

  document.addEventListener('DOMContentLoaded', renderAll);
})();