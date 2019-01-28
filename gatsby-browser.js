/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/scss/main.scss'

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

// exports.onRouteUpdate = (location) => {
//   if (location.hash) {
//     setTimeout(() => {
//       document.querySelector(`${location.hash}`).scrollIntoView();
//     }, 0)
//   }
// }
