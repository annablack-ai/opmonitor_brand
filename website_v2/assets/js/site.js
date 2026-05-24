(function () {
  const data = window.opmonitorData;

  if (!data) {
    return;
  }

  const isDetailPage = window.location.pathname.includes('/website_v2/products/');
  const basePath = isDetailPage ? '../' : './';
  const currentPage = document.body.dataset.page || 'home';

  const href = (path) => `${basePath}${path}`;

  const injectSharedStyles = () => {
    if (document.getElementById('opmonitor-v2-shared-styles')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'opmonitor-v2-shared-styles';
    style.textContent = `
      @keyframes opFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      @keyframes opPulse {
        0%, 100% { opacity: .5; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.04); }
      }
      @keyframes opScan {
        0% { transform: translateX(-110%); }
        100% { transform: translateX(110%); }
      }
      @keyframes opRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .op-grid-bg {
        background-image:
          linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px);
        background-size: 32px 32px;
      }
      .op-hero-mesh {
        background:
          radial-gradient(circle at top left, rgba(0, 123, 255, 0.12), transparent 34%),
          radial-gradient(circle at 84% 12%, rgba(0, 194, 255, 0.08), transparent 22%),
          linear-gradient(180deg, #f8fbff 0%, #eef5ff 52%, #ffffff 100%);
      }
      .op-card-glow::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        background: linear-gradient(140deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.55));
        pointer-events: none;
      }
      .op-flow-line {
        background: linear-gradient(90deg, rgba(0, 123, 255, 0.06), rgba(0, 194, 255, 0.34), rgba(0, 123, 255, 0.06));
      }
      .op-scan-beam::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(0, 194, 255, 0.18), transparent);
        animation: opScan 3.6s linear infinite;
      }
      .op-ring {
        position: relative;
      }
      .op-ring::before,
      .op-ring::after {
        content: '';
        position: absolute;
        border-radius: 999px;
        border: 1px solid rgba(0, 194, 255, 0.24);
      }
      .op-ring::before {
        inset: -10px;
        animation: opRotate 12s linear infinite;
      }
      .op-ring::after {
        inset: -20px;
        border-style: dashed;
        animation: opRotate 18s linear infinite reverse;
      }
      .op-noise {
        background-image: radial-gradient(rgba(148, 163, 184, 0.16) 0.6px, transparent 0.6px);
        background-size: 14px 14px;
      }
      .op-float { animation: opFloat 6s ease-in-out infinite; }
      .op-pulse { animation: opPulse 3s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
  };

  const renderBrand = () => `
    <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
      <svg class="h-7 w-7 text-brand" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="25" y="20" width="10" height="60" rx="5" transform="rotate(-15 25 20)" fill="currentColor"></rect>
        <rect x="45" y="10" width="10" height="80" rx="5" transform="rotate(-15 45 10)" fill="currentColor"></rect>
        <rect x="65" y="30" width="10" height="40" rx="5" transform="rotate(-15 65 30)" fill="currentColor" fill-opacity="0.6"></rect>
      </svg>
    </span>
    <span>
      <span class="block text-base font-semibold tracking-[0.08em] text-slate-900">智感云</span>
      <span class="block text-[11px] tracking-[0.08em] text-slate-400">北京智感云科技有限公司</span>
    </span>
  `;

  const renderHeader = () => {
    const mount = document.querySelector('[data-site-header]');
    if (!mount) {
      return;
    }

    mount.innerHTML = `
      <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/94 backdrop-blur-xl transition-shadow duration-300" data-shell-header>
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <a href="${href('index.html')}" class="flex items-center gap-3">
            ${renderBrand()}
          </a>
          <nav class="hidden items-center gap-7 lg:flex">
            ${data.navigation.map((item) => `
              <a href="${href(item.href)}" class="border-b-2 px-1 py-2 text-sm font-medium transition-colors duration-300 ${currentPage === item.key ? 'border-brand text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'}">${item.label}</a>
            `).join('')}
          </nav>
          <div class="hidden items-center gap-3 lg:flex">
            <a href="${href('products.html')}" class="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-brand hover:text-brand">查看解决方案</a>
            <a href="${href('contact.html')}" class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.14)] transition-all duration-300 hover:bg-brand">预约产品演示</a>
          </div>
          <button type="button" data-mobile-toggle class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden">
            <i data-lucide="menu" class="h-5 w-5"></i>
          </button>
        </div>
        <div class="hidden border-t border-slate-200/80 bg-white/96 px-6 py-4 lg:hidden" data-mobile-menu>
          <nav class="flex flex-col gap-2">
            ${data.navigation.map((item) => `
              <a href="${href(item.href)}" class="rounded-2xl px-4 py-3 text-sm font-medium ${currentPage === item.key ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700'}">${item.label}</a>
            `).join('')}
            <a href="${href('contact.html')}" class="mt-2 rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white">预约产品演示</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = mount.querySelector('[data-mobile-toggle]');
    const menu = mount.querySelector('[data-mobile-menu]');
    const shellHeader = mount.querySelector('[data-shell-header]');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 12) {
        shellHeader.classList.add('shadow-[0_10px_32px_rgba(15,23,42,0.06)]');
      } else {
        shellHeader.classList.remove('shadow-[0_10px_32px_rgba(15,23,42,0.06)]');
      }
    }, { passive: true });
  };

  const renderFooter = () => {
    const mount = document.querySelector('[data-site-footer]');
    if (!mount) {
      return;
    }

    mount.innerHTML = `
      <footer class="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-10">
          <div>
            <a href="${href('index.html')}" class="flex items-center gap-3">
              <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <svg class="h-7 w-7 text-brand" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="25" y="20" width="10" height="60" rx="5" transform="rotate(-15 25 20)" fill="currentColor"></rect>
                  <rect x="45" y="10" width="10" height="80" rx="5" transform="rotate(-15 45 10)" fill="currentColor"></rect>
                  <rect x="65" y="30" width="10" height="40" rx="5" transform="rotate(-15 65 30)" fill="currentColor" fill-opacity="0.6"></rect>
                </svg>
              </span>
              <span>
                <span class="block text-base font-semibold tracking-[0.08em] text-white">智感云</span>
                <span class="block text-[11px] tracking-[0.08em] text-slate-500">北京智感云科技有限公司</span>
              </span>
            </a>
            <p class="mt-5 max-w-md text-sm leading-7 text-slate-400">${data.company.tagline}</p>
            <div class="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 text-xs leading-6 text-slate-400">
              <div class="text-[11px] uppercase tracking-[0.28em] text-slate-500">服务说明</div>
              <div class="mt-3 grid gap-2 sm:grid-cols-2">
                <span>软硬一体解决方案</span>
                <span>支持本地化部署</span>
                <span>覆盖正式业务场景</span>
                <span>支持预约演示沟通</span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-white">产品与解决方案</div>
            <div class="mt-4 grid gap-3 text-sm text-slate-400">
              ${data.products.map((item) => `<a href="${href(`products/${item.slug}.html`)}" class="transition-colors hover:text-white">${item.name}</a>`).join('')}
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-white">公司信息</div>
            <div class="mt-4 grid gap-3 text-sm text-slate-400">
              <a href="${href('cases.html')}" class="transition-colors hover:text-white">客户案例</a>
              <a href="${href('news.html')}" class="transition-colors hover:text-white">新闻动态</a>
              <a href="${href('about.html')}" class="transition-colors hover:text-white">关于我们</a>
              <a href="${href('contact.html')}" class="transition-colors hover:text-white">联系我们</a>
            </div>
          </div>
          <div>
            <div class="text-sm font-semibold text-white">联系智感云</div>
            <div class="mt-4 grid gap-4 text-sm text-slate-400">
              <div class="flex gap-3"><i data-lucide="phone" class="mt-1 h-4 w-4 text-cyanBright"></i><span>${data.company.phone}</span></div>
              <div class="flex gap-3"><i data-lucide="mail" class="mt-1 h-4 w-4 text-cyanBright"></i><span>${data.company.email}</span></div>
              <div class="flex gap-3"><i data-lucide="globe" class="mt-1 h-4 w-4 text-cyanBright"></i><span>${data.company.website}</span></div>
              <div class="flex gap-3"><i data-lucide="map-pinned" class="mt-1 h-4 w-4 text-cyanBright"></i><span>${data.company.address}</span></div>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500 lg:px-10">
          © 2026 ${data.company.name} 版权所有 · ${data.company.icp}
        </div>
      </footer>
    `;
  };

  const getThemeClasses = (theme) => {
    const map = {
      blue: {
        chip: 'bg-brand/10 text-brand',
        glow: 'from-brand/18 via-cyanBright/12 to-transparent',
        accent: 'text-brand',
        button: 'bg-brand hover:bg-slate-900'
      },
      amber: {
        chip: 'bg-amber-100 text-amber-700',
        glow: 'from-amber-200/40 via-amber-100/20 to-transparent',
        accent: 'text-amber-600',
        button: 'bg-amber-500 hover:bg-amber-600'
      },
      cyan: {
        chip: 'bg-cyanBright/10 text-cyan-700',
        glow: 'from-cyanBright/20 via-brand/10 to-transparent',
        accent: 'text-cyan-700',
        button: 'bg-cyan-600 hover:bg-cyan-700'
      },
      green: {
        chip: 'bg-emerald-100 text-emerald-700',
        glow: 'from-emerald-200/40 via-cyanBright/10 to-transparent',
        accent: 'text-emerald-700',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      }
    };

    return map[theme] || map.blue;
  };

  const renderProductCard = (product) => {
    const theme = getThemeClasses(product.theme);
    return `
      <article class="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
        <div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-r ${theme.glow}"></div>
        <div class="relative flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <span class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${theme.chip}">
              <i data-lucide="${product.icon}" class="h-6 w-6"></i>
            </span>
            <div>
              <div class="text-[11px] uppercase tracking-[0.24em] text-slate-400">${product.targetUsers[0]}</div>
              <h3 class="mt-2 text-xl font-semibold text-slate-900">${product.name}</h3>
            </div>
          </div>
          <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">${product.highlights[0]}</span>
        </div>
        <p class="relative mt-5 text-sm leading-7 text-slate-600">${product.shortDescription}</p>
        <div class="relative mt-6 grid gap-4 md:grid-cols-2">
          <div class="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
            <div class="text-[11px] uppercase tracking-[0.24em] text-slate-400">适用对象</div>
            <div class="mt-3 text-sm leading-7 text-slate-700">${product.targetUsers.join('、')}</div>
          </div>
          <div class="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
            <div class="text-[11px] uppercase tracking-[0.24em] text-slate-400">核心能力</div>
            <div class="mt-3 flex flex-wrap gap-2">
              ${product.highlights.map((item) => `<span class="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">${item}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="relative mt-4 rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-600">
          <div class="mb-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">交付方式</div>
          <div>软件平台、智能终端、实施交付与运维支持协同落地，适配正式业务管理场景。</div>
        </div>
        <div class="relative mt-8 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <div class="text-[11px] uppercase tracking-[0.24em] text-slate-400">面向正式业务场景</div>
          <a href="${href(`products/${product.slug}.html`)}" class="inline-flex items-center gap-2 text-sm font-semibold ${theme.accent} transition-all duration-300 group-hover:translate-x-0.5">
            查看方案详情
            <i data-lucide="arrow-right" class="h-4 w-4"></i>
          </a>
        </div>
      </article>
    `;
  };

  const renderStats = () => {
    const mount = document.querySelector('[data-home-stats]');
    if (!mount) {
      return;
    }

    mount.innerHTML = data.homeStats.map((item) => `
      <div class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
        <div class="text-[11px] uppercase tracking-[0.28em] text-slate-300">服务数据</div>
        <div class="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">${item.value}</div>
        <div class="mt-3 text-sm leading-7 text-slate-500">${item.label}</div>
      </div>
    `).join('');
  };

  const renderHomeProducts = () => {
    const mount = document.querySelector('[data-home-products]');
    if (!mount) {
      return;
    }
    mount.innerHTML = data.products.map(renderProductCard).join('');
  };

  const renderCapabilities = () => {
    const mount = document.querySelector('[data-home-capabilities]');
    if (!mount) {
      return;
    }

    mount.innerHTML = data.capabilities.map((item, index) => `
      <article class="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)] ${index === 1 ? 'lg:-translate-y-3' : ''}">
        <div class="mb-5 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-slate-400">
          <span>0${index + 1}</span>
          <span>${item.title}</span>
        </div>
        <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <i data-lucide="${item.icon}" class="h-6 w-6"></i>
        </span>
        <h3 class="mt-6 text-xl font-semibold text-slate-900">${item.title}</h3>
        <p class="mt-4 text-sm leading-7 text-slate-600">${item.description}</p>
        <div class="mt-6 h-px w-full bg-slate-100"></div>
        <div class="mt-5 text-xs leading-6 text-slate-400">帮助客户完成业务记录、风险提醒、责任追溯和合规闭环。</div>
      </article>
    `).join('');
  };

  const renderMapFigure = () => `
    <div class="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,123,255,0.08),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,194,255,0.08),transparent_22%)]"></div>
      <div class="relative">
        <div class="mb-4 flex items-center justify-between">
          <div>
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">区域覆盖</div>
            <div class="mt-2 text-lg font-semibold text-slate-900">客户覆盖全国多地</div>
          </div>
          <span class="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">近 30 个省市 / 地区</span>
        </div>
        <div class="mb-5 flex flex-wrap gap-2 text-xs text-slate-500">
          <span class="rounded-full bg-slate-100 px-3 py-1">医疗机构</span>
          <span class="rounded-full bg-slate-100 px-3 py-1">监管部门</span>
          <span class="rounded-full bg-slate-100 px-3 py-1">危废相关单位</span>
        </div>
        <svg viewBox="0 0 560 360" class="h-auto w-full text-slate-300" fill="none" aria-hidden="true">
          <path d="M126 88c24-18 61-35 112-42 48-7 79 2 113 18 39 18 72 54 94 96 10 19 19 57 9 83-9 22-45 33-70 39-33 8-62 13-104 17-42 4-87 4-121-10-35-14-69-47-88-82-23-42-18-95 10-119 14-12 26-14 45-21Z" stroke="currentColor" stroke-width="1.5" stroke-dasharray="8 10"></path>
          <path d="M132 106c31-13 53-13 74-10 25 5 52 10 74 18 34 13 72 37 92 70 15 25 26 52 18 78-8 26-44 41-75 49-38 10-92 19-132 11-43-9-88-43-104-82-10-24-14-63 3-88 8-11 26-28 50-36Z" stroke="currentColor" stroke-width="1"></path>
          ${[
            [160, 126, '14'],
            [238, 112, '24'],
            [316, 142, '31'],
            [400, 168, '18'],
            [278, 216, '27'],
            [196, 238, '19'],
            [354, 240, '22'],
            [428, 224, '16']
          ].map(([cx, cy, size]) => `
            <g>
              <circle cx="${cx}" cy="${cy}" r="${size}" fill="rgba(0,123,255,0.12)"></circle>
              <circle cx="${cx}" cy="${cy}" r="6" fill="#007BFF"></circle>
            </g>
          `).join('')}
        </svg>
      </div>
    </div>
  `;

  const renderCasesPreview = () => {
    const mapMount = document.querySelector('[data-home-map]');
    const caseMount = document.querySelector('[data-home-cases]');
    if (mapMount) {
      mapMount.innerHTML = renderMapFigure();
    }
    if (caseMount) {
      caseMount.innerHTML = data.cases.map((item) => `
        <article class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          <div class="flex items-center justify-between gap-3">
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">${item.customerType}</span>
            <span class="text-xs uppercase tracking-[0.24em] text-slate-400">${item.region}</span>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-slate-900">${item.title}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">${item.description}</p>
          <div class="mt-4 text-xs leading-6 text-slate-400">案例以匿名方式展示，不包含真实客户敏感信息。</div>
        </article>
      `).join('');
    }
  };

  const renderNewsCards = (items) => items.map((item) => `
    <article class="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <div class="flex items-center justify-between gap-4">
        <span class="rounded-full ${item.categoryKey === 'policy' ? 'bg-slate-900 text-white' : 'bg-brand/10 text-brand'} px-3 py-1 text-xs font-medium">${item.category}</span>
        <span class="text-xs uppercase tracking-[0.24em] text-slate-400">${item.date}</span>
      </div>
      <div class="mt-5 text-[11px] uppercase tracking-[0.24em] text-slate-300">${item.categoryKey === 'policy' ? '行业观察' : '公司动态'}</div>
      <h3 class="mt-5 text-lg font-semibold text-slate-900">${item.title}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-600">${item.summary}</p>
      <div class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        查看内容
        <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></i>
      </div>
    </article>
  `).join('');

  const renderHomeNews = () => {
    const mount = document.querySelector('[data-home-news]');
    if (!mount) {
      return;
    }
    mount.innerHTML = renderNewsCards(data.news.slice(0, 4));
  };

  const renderProductsPage = () => {
    const mount = document.querySelector('[data-products-grid]');
    if (!mount) {
      return;
    }
    mount.innerHTML = data.products.map(renderProductCard).join('');
  };

  const renderWorkflow = (steps) => `
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      ${steps.map((step, index) => `
        <div class="relative rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          <div class="mb-4 flex items-center justify-between gap-4">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">${index + 1}</span>
            ${index < steps.length - 1 ? '<span class="hidden h-1 flex-1 rounded-full op-flow-line xl:block"></span>' : '<span class="hidden flex-1 xl:block"></span>'}
          </div>
          <div class="mb-3 text-[11px] uppercase tracking-[0.24em] text-slate-300">环节 ${String(index + 1).padStart(2, '0')}</div>
          <div class="text-sm font-semibold text-slate-900">${step}</div>
        </div>
      `).join('')}
    </div>
  `;

  const renderSoftwarePanel = (labels) => `
    <div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div class="op-scan-beam relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
        <div class="flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-rose-400"></span>
          <span class="h-3 w-3 rounded-full bg-amber-400"></span>
          <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
        </div>
        <div class="mt-5 flex items-center justify-between gap-4 rounded-[22px] border border-slate-100 bg-slate-50 px-4 py-3 text-xs text-slate-500">
          <span class="uppercase tracking-[0.24em]">平台能力展示</span>
          <span>展示核心功能模块、业务数据与管理视角</span>
        </div>
        <div class="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="rounded-[26px] border border-slate-100 bg-slate-50 p-5">
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">关键业务视图</div>
            <svg viewBox="0 0 360 200" class="mt-4 h-48 w-full" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#007BFF"></stop>
                  <stop offset="100%" stop-color="#00C2FF"></stop>
                </linearGradient>
              </defs>
              <path d="M10 150 C 60 90, 120 92, 160 110 S 250 165, 350 54" stroke="url(#lineGradient)" stroke-width="4" stroke-linecap="round"></path>
              <path d="M10 150 C 60 90, 120 92, 160 110 S 250 165, 350 54 L350 200 L10 200 Z" fill="rgba(0,123,255,0.08)"></path>
            </svg>
            <div class="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-500">
              <div class="rounded-2xl bg-white p-3">在线率 99.8%</div>
              <div class="rounded-2xl bg-white p-3">异常闭环 96%</div>
              <div class="rounded-2xl bg-white p-3">节点覆盖 24h</div>
            </div>
          </div>
          <div class="space-y-4">
            ${labels.slice(0, 4).map((label, index) => `
              <div class="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <div class="text-sm font-semibold text-slate-900">${label}</div>
                    <div class="mt-2 text-xs leading-6 text-slate-500">实时状态、告警日志与业务节点留痕统一展示。</div>
                  </div>
                  <span class="inline-flex h-3 w-3 rounded-full ${index % 3 === 0 ? 'bg-emerald-400' : index % 3 === 1 ? 'bg-amber-400' : 'bg-rose-400'} op-pulse"></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="grid gap-4">
        ${['流程追踪', '风险事件', '设备在线'].map((label, index) => `
          <div class="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div class="flex items-center justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[0.24em] text-slate-400">${label}</div>
                <div class="mt-2 text-lg font-semibold text-slate-900">${index === 0 ? '监管驾驶舱视图' : index === 1 ? '风险事件处置' : '设备在线概览'} </div>
              </div>
              <i data-lucide="${index === 0 ? 'layout-dashboard' : index === 1 ? 'badge-alert' : 'router'}" class="h-5 w-5 text-brand"></i>
            </div>
            <div class="mt-4 grid gap-3 text-xs text-slate-500">
              <div class="rounded-2xl bg-slate-50 px-4 py-3">支持采集节点、状态判断和异常分级的统一查看。</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const renderHardwarePanel = (labels) => `
    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      ${labels.map((label, index) => `
        <article class="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div class="relative mx-auto flex h-40 w-full items-center justify-center overflow-hidden rounded-[24px] border border-slate-100 bg-[linear-gradient(180deg,#f8fbff,#eef6ff)]">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,194,255,0.12),transparent_28%)]"></div>
            <div class="op-ring relative flex h-24 w-20 items-center justify-center rounded-[22px] border border-slate-300 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)] ${index % 2 === 0 ? 'op-float' : ''}">
              <div class="absolute top-3 h-2 w-2 rounded-full bg-emerald-400 op-pulse"></div>
              <div class="flex h-10 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[10px] font-semibold text-slate-500">121.3℃</div>
            </div>
            <div class="absolute right-5 top-7 flex gap-1 text-brand/40">
              <span class="h-8 w-8 rounded-full border border-current"></span>
              <span class="mt-1 h-6 w-6 rounded-full border border-current"></span>
              <span class="mt-2 h-4 w-4 rounded-full border border-current"></span>
            </div>
          </div>
          <h3 class="mt-5 text-base font-semibold text-slate-900">${label}</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600">结合现场终端、采集设备和标签介质，支持业务数据采集与流程留痕。</p>
        </article>
      `).join('')}
    </div>
  `;

  const renderProductDetail = () => {
    const mount = document.querySelector('[data-product-detail]');
    if (!mount) {
      return;
    }
    const slug = document.body.dataset.productSlug;
    const product = data.products.find((item) => item.slug === slug);
    if (!product) {
      mount.innerHTML = '<div class="mx-auto max-w-3xl px-6 py-24 text-center text-slate-500">未找到产品内容。</div>';
      return;
    }
    const theme = getThemeClasses(product.theme);

    mount.innerHTML = `
      <section class="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_52%,#ffffff_100%)] text-slate-900">
        <div class="op-grid-bg absolute inset-0 opacity-40"></div>
        <div class="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
          <div>
            <div class="mb-8 flex items-center gap-5 text-[11px] uppercase tracking-[0.28em] text-slate-400">
              <span>方案概览</span>
              <span class="h-px w-10 bg-slate-300"></span>
              <span>${product.name}</span>
            </div>
            <div class="inline-flex rounded-full ${theme.chip} px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em]">方案详情</div>
            <h1 class="mt-6 text-4xl font-bold leading-tight md:text-5xl">${product.heroTitle}</h1>
            <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600">${product.heroSubtitle}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              ${product.highlights.map((item) => `<span class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">${item}</span>`).join('')}
            </div>
            <div class="mt-10 flex flex-wrap gap-4">
              <a href="${href('contact.html')}" class="rounded-full ${theme.button} px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">预约产品演示</a>
              <a href="${href('products.html')}" class="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-brand hover:text-brand">返回产品列表</a>
            </div>
          </div>
          <div class="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div class="mb-5 flex items-center justify-between gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
              <span class="uppercase tracking-[0.24em] text-slate-500">方案摘要</span>
              <span class="rounded-full border border-slate-200 bg-white px-3 py-1">关键内容</span>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div class="text-xs uppercase tracking-[0.24em] text-slate-400">适用对象</div>
                <div class="mt-4 flex flex-wrap gap-2">
                  ${product.targetUsers.map((item) => `<span class="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700">${item}</span>`).join('')}
                </div>
              </div>
              <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div class="text-xs uppercase tracking-[0.24em] text-slate-400">系统定位</div>
                <p class="mt-4 text-sm leading-7 text-slate-600">${product.positioning}</p>
              </div>
            </div>
            <div class="mt-4 grid gap-3 sm:grid-cols-3">
              ${product.highlights.map((item) => `<div class="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">${item}</div>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">产品定位</div>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">产品定位</h2>
          </div>
          <div class="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_10px_34px_rgba(15,23,42,0.04)]">
            <div class="mb-4 text-[11px] uppercase tracking-[0.28em] text-slate-300">定位说明</div>
            <p class="text-base leading-8 text-slate-600">${product.positioning}</p>
          </div>
        </div>
      </section>

      <section class="bg-slate-50">
        <div class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div class="flex items-end justify-between gap-6">
            <div>
              <div class="text-xs uppercase tracking-[0.24em] text-slate-400">业务痛点</div>
              <h2 class="mt-3 text-3xl font-semibold text-slate-900">业务痛点</h2>
            </div>
          </div>
          <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            ${product.painPoints.map((item, index) => `
              <article class="rounded-[28px] border ${index < 2 ? 'border-rose-200 bg-rose-50/70' : 'border-amber-200 bg-amber-50/70'} p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
                <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl ${index < 2 ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-700'}">
                  <i data-lucide="${index < 2 ? 'circle-alert' : 'triangle-alert'}" class="h-5 w-5"></i>
                </div>
                <p class="mt-5 text-sm leading-7 text-slate-700">${item}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div>
          <div class="text-xs uppercase tracking-[0.24em] text-slate-400">核心功能</div>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">核心功能</h2>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          ${product.features.map((item) => `
            <article class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
              <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl ${theme.chip}">
                <i data-lucide="${item.icon}" class="h-5 w-5"></i>
              </span>
              <h3 class="mt-5 text-lg font-semibold text-slate-900">${item.title}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">${item.description}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="bg-slate-50">
        <div class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div>
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">业务流程图</div>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">业务流程图</h2>
          </div>
          <div class="mt-10">${renderWorkflow(product.workflow)}</div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div>
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">软件能力概览</div>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">软件平台能力</h2>
        </div>
        <div class="mt-10">${renderSoftwarePanel(product.softwarePanels)}</div>
      </section>

      <section class="bg-slate-50">
        <div class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div>
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">硬件部署组合</div>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">硬件终端与部署方式</h2>
          </div>
          <div class="mt-10">${renderHardwarePanel(product.hardwarePanels)}</div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div>
          <div class="text-xs uppercase tracking-[0.24em] text-slate-400">应用价值</div>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">应用价值</h2>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2">
          ${product.values.map((item) => `
            <div class="flex gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
              <i data-lucide="check-circle-2" class="mt-0.5 h-5 w-5 text-emerald-500"></i>
              <p class="text-sm leading-7 text-slate-600">${item}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="px-6 pb-20 lg:px-10 lg:pb-24">
        <div class="mx-auto max-w-7xl rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)] lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-10">
          <div>
            <div class="text-xs uppercase tracking-[0.24em] text-slate-400">预约演示</div>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">预约演示</h2>
            <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-600">${product.cta}</p>
          </div>
          <a href="${href('contact.html')}" class="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand lg:mt-0">预约产品演示</a>
        </div>
      </section>
    `;
  };

  const renderCasesPage = () => {
    const mapMount = document.querySelector('[data-cases-map]');
    const typeMount = document.querySelector('[data-cases-types]');
    const listMount = document.querySelector('[data-cases-list]');
    if (mapMount) {
      mapMount.innerHTML = renderMapFigure();
    }
    if (typeMount) {
      typeMount.innerHTML = data.customerTypes.map((item) => `
        <article class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <i data-lucide="${item.icon}" class="h-6 w-6"></i>
          </span>
          <h3 class="mt-5 text-lg font-semibold text-slate-900">${item.title}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">${item.description}</p>
        </article>
      `).join('');
    }
    if (listMount) {
      listMount.innerHTML = data.cases.map((item) => `
        <article class="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          <div class="flex flex-wrap items-center gap-3">
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">${item.customerType}</span>
            <span class="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">${item.product}</span>
            <span class="text-xs uppercase tracking-[0.24em] text-slate-400">${item.region}</span>
          </div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900">${item.title}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-600">${item.description}</p>
        </article>
      `).join('');
    }
  };

  const renderNewsPage = () => {
    const filtersMount = document.querySelector('[data-news-filters]');
    const listMount = document.querySelector('[data-news-list]');
    if (!listMount) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const activeCategory = params.get('category') || 'all';
    const filters = [
      { key: 'all', label: '全部' },
      { key: 'policy', label: '行业政策' },
      { key: 'company', label: '公司动态' }
    ];
    if (filtersMount) {
      filtersMount.innerHTML = filters.map((item) => `
        <a href="${item.key === 'all' ? href('news.html') : `${href('news.html')}?category=${item.key}`}" class="rounded-full px-4 py-2 text-sm font-medium ${activeCategory === item.key ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}">${item.label}</a>
      `).join('');
    }

    const items = activeCategory === 'all'
      ? data.news
      : data.news.filter((item) => item.categoryKey === activeCategory);
    listMount.innerHTML = renderNewsCards(items);
  };

  const renderAboutPage = () => {
    const tagsMount = document.querySelector('[data-about-tags]');
    const certMount = document.querySelector('[data-about-certs]');
    const footprintMount = document.querySelector('[data-about-footprints]');
    if (tagsMount) {
      tagsMount.innerHTML = data.about.tags.map((item) => `<span class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">${item}</span>`).join('');
    }
    if (certMount) {
      certMount.innerHTML = data.about.certifications.map((item, index) => `
        <article class="rounded-[28px] border border-amber-100 bg-[linear-gradient(180deg,#fffdf7,#ffffff)] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          <div class="text-xs uppercase tracking-[0.24em] text-amber-500">资质荣誉 ${String(index + 1).padStart(2, '0')}</div>
          <h3 class="mt-4 text-lg font-semibold text-slate-900">${item}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">以极轻线框和金属感渐变作为荣誉墙展示形式，保证信息可信又克制。</p>
        </article>
      `).join('');
    }
    if (footprintMount) {
      footprintMount.innerHTML = data.about.footprints.map((item, index) => `
        <div class="relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          <div class="text-xs uppercase tracking-[0.24em] text-slate-400">0${index + 1}</div>
          <div class="mt-4 text-lg font-semibold text-slate-900">${item}</div>
        </div>
      `).join('');
    }
  };

  const renderContactPage = () => {
    const chipsMount = document.querySelector('[data-contact-products]');
    const form = document.querySelector('[data-contact-form]');
    const modal = document.querySelector('[data-contact-modal]');
    const closeBtn = document.querySelector('[data-contact-close]');

    if (chipsMount) {
      chipsMount.innerHTML = data.products.map((item) => `
        <label class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-all duration-300 hover:border-brand hover:text-brand">
          <input type="checkbox" name="productInterest" value="${item.name}" class="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand">
          <span>${item.name}</span>
        </label>
      `).join('');
    }

    if (form && modal) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.reportValidity()) {
          return;
        }
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        form.reset();
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }

    if (modal) {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        }
      });
    }
  };

  const init = () => {
    injectSharedStyles();
    renderHeader();
    renderFooter();
    renderStats();
    renderHomeProducts();
    renderCapabilities();
    renderCasesPreview();
    renderHomeNews();
    renderProductsPage();
    renderProductDetail();
    renderCasesPage();
    renderNewsPage();
    renderAboutPage();
    renderContactPage();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();