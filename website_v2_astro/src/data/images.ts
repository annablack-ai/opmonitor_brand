import type { ProductImageSet } from '@/types/site';

export const siteImages = {
  brand: {
    logo: '/images/brand/logo.png',
  },
  home: {
    hero: '/images/home/home_hero_main_5_desktop.jpeg',
    heroDesktop: '/images/home/home_hero_main_5_desktop.jpeg',
    heroMobile: '/images/home/home_hero_main_5.jpeg',
  },
  certificates: ['/images/about/certificates/certificate-placeholder.svg'],
};

export const productImageRegistry: Record<string, ProductImageSet> = {
  'medical-waste': {
    hero: '/images/home/hero-brand-abstract.svg',
    flowchart: '/images/products/medical-waste-flow.svg',
    screenshots: [
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
    ],
    hardware: [
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
    ],
    scenes: ['/images/products/medical-waste-scene.svg'],
  },
  'hazardous-waste': {
    hero: '/images/home/hero-brand-abstract.svg',
    flowchart: '/images/products/medical-waste-flow.svg',
    screenshots: [
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
    ],
    hardware: [
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
      '/images/hardware/medical-waste-terminal.svg',
    ],
    scenes: ['/images/products/medical-waste-scene.svg'],
  },
  'health-supervision': {
    hero: '/images/home/hero-brand-abstract.svg',
    flowchart: '/images/products/medical-waste-flow.svg',
    screenshots: [
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
    ],
    hardware: [
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
    ],
    scenes: ['/images/products/medical-waste-scene.svg'],
  },
  'sterilization-monitoring': {
    hero: '/images/home/hero-brand-abstract.svg',
    flowchart: '/images/products/medical-waste-flow.svg',
    screenshots: [
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
    ],
    hardware: [
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
      '/images/hardware/medical-waste-terminal.svg',
    ],
    scenes: ['/images/products/medical-waste-scene.svg'],
  },
  'endoscope-compliance': {
    hero: '/images/home/hero-brand-abstract.svg',
    flowchart: '/images/products/medical-waste-flow.svg',
    screenshots: [
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
    ],
    hardware: [
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
      '/images/hardware/medical-waste-terminal.svg',
    ],
    scenes: ['/images/products/medical-waste-scene.svg'],
  },
  'carbon-management': {
    hero: '/images/home/hero-brand-abstract.svg',
    flowchart: '/images/products/medical-waste-flow.svg',
    screenshots: [
      '/images/product-screenshots/medical-waste-dashboard.svg',
      '/images/product-screenshots/medical-waste-records.svg',
      '/images/product-screenshots/medical-waste-dashboard.svg',
    ],
    hardware: [
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
      '/images/hardware/medical-waste-terminal.svg',
      '/images/hardware/medical-waste-pda.svg',
    ],
    scenes: ['/images/products/medical-waste-scene.svg'],
  },
};