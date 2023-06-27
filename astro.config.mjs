import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import pandacss from '@pandacss/dev/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    solidJs(),
    pandacss(),
  ],
})
