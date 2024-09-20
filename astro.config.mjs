// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), vue(), react()],
  vite: {
    optimizeDeps: {
      include: ['@glidejs/glide', 'scrollreveal'], // Combine into one array
    },
  },
});
