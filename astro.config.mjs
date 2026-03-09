import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mnkpixel.com',
  integrations: [tailwind()],
});
