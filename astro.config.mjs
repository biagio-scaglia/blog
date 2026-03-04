// @ts-check

import mdx from '@astrojs/mdx';

import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Cloudflare Workers Domain
  site: 'https://blog.scagliabiagio99.workers.dev',

  integrations: [mdx()],
  adapter: cloudflare(),
});