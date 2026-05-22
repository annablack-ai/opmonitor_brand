import type { FooterLinkGroup, MegaMenuGroup, MegaMenuLink, NavItem } from '@/types/site';

export const navigation: NavItem[] = [
  { key: 'home', label: '首页', href: '/' },
  { key: 'products', label: '产品与解决方案', href: '/products/' },
  { key: 'cases', label: '客户案例', href: '/cases/' },
  { key: 'news', label: '新闻动态', href: '/news/' },
  { key: 'about', label: '关于我们', href: '/about/' },
  { key: 'contact', label: '联系我们', href: '/contact/' },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: '产品与解决方案',
    links: [
      { key: 'product-list', label: '产品与解决方案', href: '/products/' },
      { key: 'product-detail', label: '医疗废物精细化追溯系统', href: '/products/medical-waste/' },
      { key: 'hazardous', label: '危险废物“五即一码”规范化管理系统', href: '/products/hazardous-waste/' },
    ],
  },
  {
    title: '公司信息',
    links: [
      { key: 'cases', label: '客户案例', href: '/cases/' },
      { key: 'news', label: '新闻动态', href: '/news/' },
      { key: 'about', label: '关于我们', href: '/about/' },
      { key: 'contact', label: '联系我们', href: '/contact/' },
    ],
  },
];

export const productMegaMenuGroups: MegaMenuGroup[] = [
  {
    title: '医疗卫生',
    links: [
      { key: 'medical-waste', label: '医疗废物精细化追溯系统', href: '/products/medical-waste/' },
      { key: 'sterilization-monitoring', label: '消毒灭菌监测系统', href: '/products/sterilization-monitoring/' },
      { key: 'endoscope-compliance', label: '内镜合规平台', href: '/products/endoscope-compliance/' },
    ],
  },
  {
    title: '生态环境',
    links: [
      { key: 'hazardous-waste', label: '危险废物“五即一码”规范化管理系统', href: '/products/hazardous-waste/' },
      { key: 'carbon-management', label: '碳管理与减污降碳协同', href: '/products/carbon-management/' },
    ],
  },
  {
    title: '智慧监管',
    links: [
      { key: 'health-supervision', label: '智慧卫监解决方案', href: '/products/health-supervision/' },
    ],
  },
  {
    title: '产品演示',
    links: [
      { key: 'product-demo', label: '预约产品演示', href: '/contact/' },
      { key: 'product-all', label: '查看解决方案', href: '/products/' },
    ],
  },
];

export const productMegaMenuActions: MegaMenuLink[] = [
  { key: 'product-demo', label: '预约产品演示', href: '/contact/', description: '提交需求后安排产品演示与方案沟通。', icon: 'arrow-up-right' },
  { key: 'product-all', label: '查看解决方案', href: '/products/', description: '浏览六大产品方向与统一详情模板。', icon: 'arrow-right' },
];

export const newsMenuItems: MegaMenuLink[] = [
  { key: 'policy', label: '行业政策', href: '/news/?category=policy' },
  { key: 'company-news', label: '公司动态', href: '/news/?category=company' },
];