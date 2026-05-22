export type IconName =
  | 'logo'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'chevron-down'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'globe'
  | 'map'
  | 'shield'
  | 'layers'
  | 'chart'
  | 'monitor'
  | 'server'
  | 'scan'
  | 'workflow'
  | 'camera'
  | 'image'
  | 'chip'
  | 'check'
  | 'building'
  | 'news'
  | 'case'
  | 'award'
  | 'hardware'
  | 'gallery';

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export interface MegaMenuLink extends NavItem {
  description?: string;
  icon?: IconName;
}

export interface MegaMenuGroup {
  title: string;
  links: MegaMenuLink[];
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface SiteMeta {
  name: string;
  shortName: string;
  title: string;
  description: string;
  tagline: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  icp: string;
}

export interface HeroBullet {
  label: string;
  value: string;
}

export interface HeroPanelItem {
  label: string;
  value: string;
  tone?: 'default' | 'success' | 'warning';
}

export interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

export interface ProductSummary {
  slug: string;
  name: string;
  category: string;
  excerpt: string;
  targetUsers: string[];
  highlights: string[];
  overview: string;
  icon: IconName;
  buttonLabel: string;
  detailReady: boolean;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: IconName;
}

export interface ProductGalleryItem {
  title: string;
  description: string;
  imageAlt: string;
}

export interface ProductDetail extends ProductSummary {
  heroTitle: string;
  heroSummary: string;
  positioning: string;
  pains: string[];
  features: ProductFeature[];
  processSteps: string[];
  screenshots: ProductGalleryItem[];
  hardware: ProductGalleryItem[];
  scenes: ProductGalleryItem[];
  values: string[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface ProductImageSet {
  hero?: string;
  flowchart: string;
  screenshots: string[];
  hardware: string[];
  scenes: string[];
}

export interface CaseStudy {
  title: string;
  customerType: string;
  product: string;
  region: string;
  summary: string;
}

export interface NewsItem {
  slug: string;
  category: string;
  date: string;
  title: string;
  summary: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface AboutCapabilityItem {
  title: string;
  description: string;
}

export interface AudiencePathway {
  audience: string;
  title: string;
  summary: string;
  href: string;
  ctaLabel: string;
  highlights: string[];
}

export interface ProofPoint {
  title: string;
  description: string;
}

export interface ContactCommitment {
  title: string;
  description: string;
}

export interface ContactOptionGroup {
  label: string;
  options: string[];
}