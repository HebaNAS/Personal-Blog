/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import Helmet from 'react-helmet'

exports.onRenderBody = ({ setHeadComponents }) => {
  const Head = Helmet.Helmet.rewind()
  const regexp = /data-react-helmet="true"/g
  setHeadComponents([Head.meta.toString().replace(regexp, '')])
}
