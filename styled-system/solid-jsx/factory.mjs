import { Dynamic } from 'solid-js/web'
import { mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { css, cx, cva, assignCss } from '../css/index.mjs';
import { normalizeHTMLProps } from '../helpers.mjs';
import { allCssProperties } from './is-valid-prop.mjs';

function styledFn(element, configOrCva = {}) {
  const cvaFn = configOrCva.__cva__ ? configOrCva : cva(configOrCva)
  
  return function StyledComponent(props) {
    const mergedProps = mergeProps({ as: element }, props)

    const [localProps, variantProps, styleProps, htmlProps, elementProps] = splitProps(
      mergedProps,
      ['as', 'class'],
      cvaFn.variantKeys,
      allCssProperties,
      normalizeHTMLProps.keys
    )

    function recipeClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const styles = assignCss(propStyles, cssStyles)
      return cx(cvaFn(variantProps), css(styles), localProps.class)
    }
    
    function cvaClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const cvaStyles = cvaFn.resolve(variantProps)
      const styles = assignCss(cvaStyles, propStyles, cssStyles)
      return cx(css(styles), localProps.class)
    }

    const classes = configOrCva.__recipe__ ? recipeClass : cvaClass
    
    return createComponent(
      Dynamic,
      mergeProps(
        {
          get component() {
            return localProps.as
          },
          get class() {
            return classes()
          }
        },
        elementProps,
        normalizeHTMLProps(htmlProps)
      )
    )
  }
}

function createJsxFactory() {
  const cache = new Map()

  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args)
    },
    get(_, el) {
      if (!cache.has(el)) {
        cache.set(el, styledFn(el))
      }
      return cache.get(el)
    },
  })
}
  
export const styled = createJsxFactory()