/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './node_modules/bulma/css/bulma.min.css'
import './node_modules/prismjs/themes/prism-tomorrow.css'
import './node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css'
import './node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css'


import anchorate from 'anchorate'

export const onRouteUpdate = (location) => {
  if (location.hash) {
    console.log(location.hash)
    anchorate({ 
      scroller: function (element) {
        if (!element) return false
        element.scrollIntoView({ behavior: 'smooth' })
        return true
      }
    })
  }
}
