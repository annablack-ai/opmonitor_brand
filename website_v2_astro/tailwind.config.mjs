/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#edf5ff',
          100: '#d0e2ff',
          200: '#a6c8ff',
          300: '#78a9ff',
          400: '#4589ff',
          500: '#0f62fe',
          600: '#0043ce',
          700: '#002d9c',
        },
        ink: {
          50: '#f4f4f4',
          100: '#e0e0e0',
          200: '#c6c6c6',
          300: '#a8a8a8',
          400: '#8d8d8d',
          500: '#6f6f6f',
          600: '#525252',
          700: '#393939',
          800: '#262626',
          900: '#161616',
        },
        success: {
          500: '#24a148',
        },
        warning: {
          500: '#f1c21b',
        },
        danger: {
          500: '#da1e28',
        },
      },
      boxShadow: {
        card: '0 10px 24px rgba(22, 22, 22, 0.08)',
        soft: '0 4px 14px rgba(22, 22, 22, 0.05)',
      },
    },
  },
  plugins: [],
};