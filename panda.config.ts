import { defineConfig, defineGlobalStyles } from '@pandacss/dev'
import * as c from './panda.config.json'
const { jsxFramework } = c as ReturnType<typeof defineConfig>

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  globalCss: defineGlobalStyles({
    body: {
      fontFamily: 'mgramm',
      bg: 'black',
      color: 'white',
    },
    h1: {
      "display": "block",
      "font-size": "2em",
      "margin-block-start": "0.67em",
      "margin-block-end": "0.67em",
      "margin-inline-start": "0px",
      "margin-inline-end": "0px",
    },
    p: { "display": "block", "marginBlockStart": "1em", "marginBlockEnd": "1em", "marginInlineStart": "0px", "marginInlineEnd": "0px" },
    ul: {"display":"block","listStyleType":"disc","marginBlockStart":"1em","marginBlockEnd":"1em","marginInlineStart":"0px","marginInlineEnd":"0px","paddingInlineStart":"40px"},
    li: {"display":"list-item","text-align":"-webkit-match-parent"},
    ol: {"display":"block","listStyleType":"decimal","marginBlockStart":"1em","marginBlockEnd":"1em","marginInlineStart":"0px","marginInlineEnd":"0px","paddingInlineStart":"40px"},
  }),

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework,
})
