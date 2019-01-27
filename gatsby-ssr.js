/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import Helmet from 'react-helmet'
import React from 'react'
import { renderToString } from 'react-dom/server'

import About from './src/components/About'
import Projects from './src/components/Projects'
import Contact from './src/components/Contact'

export const onRenderBody = ({ setHeadComponents }) => {

  setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
    />,

    renderToString(<Helmet />),
    Helmet.renderStatic()
}

/*export const replaceRenderer = ({ replaceBodyHTMLString }) => {
  replaceBodyHTMLString(renderToString(<About />))
  replaceBodyHTMLString(renderToString(<Projects />))
  replaceBodyHTMLString(renderToString(<Contact />))
}*/