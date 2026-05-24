import { productSummaries } from '@/data/products';
import type { FooterLinkGroup, MegaMenuGroup, MegaMenuLink, NavItem, ProductSummary } from '@/types/site';

const productBySlug = productSummaries.reduce<Record<string, ProductSummary>>((accumulator, product) => {
  accumulator[product.slug] = product;
  return accumulator;
}, {});

const productMenuLink = (slug: string): MegaMenuLink => ({
  key: slug,
  label: productBySlug[slug].displayName,
  href: `/products/${slug}/`,
  description: productBySlug[slug].englishName,
});

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
      { key: 'medical-waste', label: productBySlug['medical-waste'].displayName, href: '/products/medical-waste/' },
      { key: 'hazardous-waste', label: productBySlug['hazardous-waste'].displayName, href: '/products/hazardous-waste/' },
      { key: 'health-supervision', label: productBySlug['health-supervision'].displayName, href: '/products/health-supervision/' },
      { key: 'sterilization-monitoring', label: productBySlug['sterilization-monitoring'].displayName, href: '/products/sterilization-monitoring/' },
      { key: 'endoscope-compliance', label: productBySlug['endoscope-compliance'].displayName, href: '/products/endoscope-compliance/' },
      { key: 'carbon-management', label: productBySlug['carbon-management'].displayName, href: '/products/carbon-management/' },
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
      productMenuLink('medical-waste'),
      productMenuLink('sterilization-monitoring'),
      productMenuLink('endoscope-compliance'),
    ],
  },
  {
    title: '生态环境',
    links: [
      productMenuLink('hazardous-waste'),
      productMenuLink('carbon-management'),
    ],
  },
  {
    title: '智慧监管',
    links: [
      productMenuLink('health-supervision'),
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