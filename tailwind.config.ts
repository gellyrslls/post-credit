import type { Config } from 'tailwindcss';

// Custom design tokens for Post-Credit blog
// Colors defined per the brand spec in the migration brief
const config: Config = {
  // Use class strategy so dark mode can be toggled programmatically
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light mode palette
        'pc-bg': '#FAF9F6',           // Off-white warm cream background
        'pc-text': '#1a1a2e',         // Dark navy / charcoal primary text
        'pc-accent': '#2d4a3e',       // Dark forest green — CTA button bg
        'pc-accent-text': '#ffffff',  // White — text on accent buttons
        'pc-border': '#e5e5e5',       // Light gray — subtle borders/dividers
        'pc-muted': '#6b7280',        // Medium gray — dates, read time, etc.
        // Dark mode palette
        'pc-dark-bg': '#0f0f0f',
        'pc-dark-text': '#e8e8e8',
        'pc-dark-muted': '#9ca3af',
      },
      fontFamily: {
        // Lora (serif) for headings — loaded via Google Fonts in BaseLayout
        heading: ['Lora', 'Georgia', 'serif'],
        // Inter (sans-serif) for body — loaded via Google Fonts in BaseLayout
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // 18px base for comfortable long-form reading
        base: ['1.125rem', { lineHeight: '1.75rem' }],
      },
      maxWidth: {
        // Comfortable reading width for individual post pages
        'post': '720px',
      },
    },
  },
  plugins: [],
};

export default config;
