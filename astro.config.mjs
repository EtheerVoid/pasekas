import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Cloudflare Pages serves static output by default — no adapter needed.
  // Just `npm run build` and point Pages at the `dist/` folder.
  output: 'static',
  compressHTML: true,
});
