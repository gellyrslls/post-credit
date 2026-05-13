import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// NOTE: site and base are required for correct GitHub Pages deployment under /post-credit subpath.
// All internal links use Astro's base-aware routing via import.meta.env.BASE_URL or the <a href> pattern.
export default defineConfig({
  site: 'https://gellyrslls.github.io',
  base: '/post-credit',
  integrations: [tailwind()],
});
