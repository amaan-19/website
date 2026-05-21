import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import preact from '@astrojs/preact';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://amaankhan.info',
  integrations: [preact()]
});