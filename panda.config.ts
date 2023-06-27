import { defineConfig, defineGlobalStyles } from '@pandacss/dev'
import * as c from './panda.config.json'
const { jsxFramework } = c as ReturnType<typeof defineConfig>

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      fonts: {
        body: { value: 'mgramm' },
      },
    },
  },

  globalCss: defineGlobalStyles({
    body: {
      fontFamily: 'body',
    },
  }),

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework,
})
