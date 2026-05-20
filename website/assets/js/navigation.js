(() => {
  const productGroups = [
    {
      title: '医疗卫生',
      items: [
        { slug: 'medical-waste', title: '医疗废物精细化追溯系统', href: 'products/medical-waste.html' },
        { slug: 'sterilization-monitoring', title: '消毒灭菌监测系统', href: 'products/sterilization-monitoring.html' },
        { slug: 'endoscope-compliance', title: '内镜合规平台', href: 'products/endoscope-compliance.html' }
      ]
    },
    {
      title: '生态环境',
      items: [
        { slug: 'hazardous-waste', title: '危险废物“五即一码”规范化管理系统', href: 'products/hazardous-waste.html' },
        { slug: 'carbon-management', title: '碳管理与减污降碳协同', href: 'products/carbon-management.html' }
      ]
    },
    {
      title: '智慧监管',
      items: [
        { slug: 'health-supervision', title: '智慧卫监解决方案', href: 'products/health-supervision.html' }
      ]
    },
    {
      title: '产品演示',
      items: [
        { path: 'contact.html', title: '预约产品演示', href: 'contact.html' },
        { path: 'products.html', title: '查看解决方案', href: 'products.html' }
      ]
    }
  ];

  const newsItems = [
    {
      key: 'policy',
      title: '行业政策',
      href: 'news.html?category=policy'
    },
    {
      key: 'company',
      title: '公司动态',
      href: 'news.html?category=company'
    }
  ];

  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const isDetailPage = window.location.pathname.includes('/products/');
  const basePrefix = isDetailPage ? '../' : '';
  const currentPath = window.location.pathname;
  const currentSearch = new URLSearchParams(window.location.search);
  const currentHash = window.location.hash;
  const buildHref = (href) => `${basePrefix}${href}`;
  const caretSvg = '<svg class="nav-link-caret" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  const isProductRoot = currentPath.includes('/products.html');
  const isProductsSection = isProductRoot || currentPath.includes('/products/');

  const isProductItemActive = (item) => {
    if (item.slug) return currentPath.includes(item.slug);
    if (item.hash) return isProductRoot && currentHash === item.hash;
    if (item.path) return currentPath.includes(`/${item.path}`);
    return false;
  };

  const setActive = (el, active) => {
    el.classList.toggle('active', Boolean(active));
    if (active) {
      el.setAttribute('aria-current', 'page');
    } else {
      el.removeAttribute('aria-current');
    }
  };

  const createMegaMenu = () => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-mega-menu';
    wrap.innerHTML = `
      <div class="nav-mega-shell">
        <div class="nav-mega-container">
        <div class="nav-mega-grid">
          ${productGroups.map((group) => `
            <div class="nav-mega-group">
              <div class="nav-mega-group-title">${group.title}</div>
              <div class="nav-mega-divider"></div>
              <div class="nav-mega-list">
                ${group.items.map((item) => `
                  <a class="nav-mega-link${isProductItemActive(item) ? ' active' : ''}" href="${buildHref(item.href)}">
                    <span class="nav-mega-title">${item.title}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      </div>
    `;
    return wrap;
  };

  const createNewsDropdown = () => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-dropdown';
    wrap.innerHTML = newsItems.map((item) => {
      const active = currentPath.includes('/news.html') && currentSearch.get('category') === item.key;
      return `
        <a class="nav-dropdown-link${active ? ' active' : ''}" href="${buildHref(item.href)}">
          <span class="nav-dropdown-label">${item.title}</span>
        </a>
      `;
    }).join('');
    return wrap;
  };

  const replaceDesktopLink = (link, label, menuNode, active) => {
    const item = document.createElement('div');
    item.className = `nav-item${label === '产品与解决方案' ? ' nav-item-products' : ''}`;
    const trigger = link.cloneNode(false);
    trigger.className = link.className.replace(/\s?active/g, '') + ' nav-link-trigger';
    trigger.innerHTML = `<span>${label}</span>${caretSvg}`;
    item.appendChild(trigger);
    item.appendChild(menuNode);
    link.replaceWith(item);
    setActive(trigger, active);
  };

  const bindDesktopDropdowns = () => {
    const navLinks = nav.querySelector('.nav-links');
    if (!navLinks) return;
    const links = Array.from(navLinks.querySelectorAll('.nav-link'));
    const productLink = links.find((link) => /products\.html$/.test(link.getAttribute('href') || ''));
    const newsLink = links.find((link) => /news\.html$/.test(link.getAttribute('href') || ''));

    if (productLink) {
      replaceDesktopLink(productLink, '产品与解决方案', createMegaMenu(), isProductsSection);
    }
    if (newsLink) {
      replaceDesktopLink(newsLink, '新闻动态', createNewsDropdown(), currentPath.includes('/news.html'));
    }

    navLinks.querySelectorAll('.nav-item > .nav-link').forEach((trigger) => {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.addEventListener('click', (event) => {
        if (window.innerWidth < 768) return;
        event.preventDefault();
        const item = trigger.parentElement;
        const shouldOpen = !item.classList.contains('open');
        navLinks.querySelectorAll('.nav-item.open').forEach((node) => {
          node.classList.remove('open');
          const link = node.querySelector(':scope > .nav-link');
          if (link) link.setAttribute('aria-expanded', 'false');
        });
        if (shouldOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) {
        navLinks.querySelectorAll('.nav-item.open').forEach((node) => {
          node.classList.remove('open');
          const link = node.querySelector(':scope > .nav-link');
          if (link) link.setAttribute('aria-expanded', 'false');
        });
      }
    });
  };

  const createMobileGroup = (label, items, active, type) => {
    const group = document.createElement('div');
    group.className = `nav-mobile-group${active ? ' open' : ''}`;
    group.innerHTML = `
      <button class="nav-mobile-trigger" type="button" aria-expanded="${active ? 'true' : 'false'}">
        <span>${label}</span>
        ${caretSvg}
      </button>
      <div class="nav-mobile-submenu">
        ${type === 'product' ? items.map((section) => `
          <div class="nav-mobile-subgroup">
            <div class="nav-mobile-subgroup-title">${section.title}</div>
            <div class="nav-mobile-subgroup-links">
              ${section.items.map((item) => `
                <a class="nav-mobile-sublink${isProductItemActive(item) ? ' active' : ''}" href="${buildHref(item.href)}">
                  <span class="nav-mobile-sublabel">${item.title}</span>
                </a>
              `).join('')}
            </div>
          </div>
        `).join('') : items.map((item) => {
          const itemActive = currentPath.includes('/news.html') && currentSearch.get('category') === item.key;
          return `
            <a class="nav-mobile-sublink${itemActive ? ' active' : ''}" href="${buildHref(item.href)}">
              <span class="nav-mobile-sublabel">${item.title}</span>
            </a>
          `;
        }).join('')}
      </div>
    `;
    return group;
  };

  const bindMobileNav = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (!mobileMenu || !hamburger) return;

    const productLink = Array.from(mobileMenu.querySelectorAll('.nav-link')).find((link) => /products\.html$/.test(link.getAttribute('href') || ''));
    const newsLink = Array.from(mobileMenu.querySelectorAll('.nav-link')).find((link) => /news\.html$/.test(link.getAttribute('href') || ''));

    if (productLink) {
      productLink.replaceWith(createMobileGroup('产品与解决方案', productGroups, isProductsSection, 'product'));
    }
    if (newsLink) {
      newsLink.replaceWith(createMobileGroup('新闻动态', newsItems, currentPath.includes('/news.html'), 'news'));
    }

    mobileMenu.querySelectorAll('.nav-mobile-trigger').forEach((button) => {
      button.addEventListener('click', () => {
        const group = button.parentElement;
        const shouldOpen = !group.classList.contains('open');
        mobileMenu.querySelectorAll('.nav-mobile-group.open').forEach((node) => {
          node.classList.remove('open');
          const trigger = node.querySelector('.nav-mobile-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
        if (shouldOpen) {
          group.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
        }
      });
    });

    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  };

  bindDesktopDropdowns();
  bindMobileNav();

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
})();