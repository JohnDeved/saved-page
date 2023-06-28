# the plan

as an experiment, focus on framework agnostic libs for max flexibility
- [agnostic] framework: [astro](https://astro.build/) 
  - use [react](https://react.dev/) and [solidjs](https://www.solidjs.com/) on the same page using [astro islands](https://docs.astro.build/en/concepts/islands/)
  - on react side, make use of [preact signals](https://github.com/preactjs/signals/blob/main/packages/react/README.md#react-integration) [[doc]](https://preactjs.com/guide/v10/signals/)
  - hosting as static [cloudflare pages](https://pages.cloudflare.com/) site
  - SPA like page navigation with [prefetch](https://docs.astro.build/en/guides/integrations-guide/prefetch/) (will be possible [out of the box](https://github.com/withastro/roadmap/issues/532) with keeping state in the future)
  - automatically generate [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [agnostic] ui lib: [panda](https://panda-css.com/)
- [agnostic] image list: [egjs-infinitegrid](https://naver.github.io/egjs-infinitegrid/)
- [react] lazy image loader: [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component)
- [agnostic] gallery items: [swiperjs](https://swiperjs.com/)
- [agnostic] detail page image fullscreen: [medium-zoom](https://github.com/francoischalifour/medium-zoom#framework-integrations)
- [agnostic] anims: [motion one](https://motion.dev/)

# issues I've encountered
1. could not get ESM module (egjs-infinitegrid) to work with Astro. Lib also had commonjs version included, but couldn't get it to work with astro
    - issue URL: https://github.com/withastro/astro/issues/3174
    - workaround: client:only so that the island hosting the grid component only loads on the client
2. panda JSX components didn't work out of the box with react AND solid together at the same time.
    - issue URL: https://github.com/chakra-ui/panda/discussions/848
    - workaround: created a hacky [script](scripts/pandaCodegen.js) that generates solid and react panda components in the same project
