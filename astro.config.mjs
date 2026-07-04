import { defineConfig } from 'astro/config';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  server: {
    host: true
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true, 
    },
  }),
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  site: 'https://amaankhan.info',
});