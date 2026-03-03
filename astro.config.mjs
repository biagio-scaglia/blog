// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Cloudflare Workers Domain
  site: 'https://blog.scagliabiagio99.workers.dev',

  integrations: [mdx(), sitemap({
      filter: (page) => page !== 'https://blog.scagliabiagio99.workers.dev/500' && page !== 'https://blog.scagliabiagio99.workers.dev/404',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
	})],

  adapter: cloudflare(),
});