import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import pandacss from '@pandacss/dev/astro'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://reddit-saved.pages.dev',
  integrations: [
    react(),
    solidJs(),
    pandacss(),
    sitemap()
  ],
})
