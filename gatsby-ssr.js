/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import Helmet from 'react-helmet'
import React from 'react'
import { renderToString } from 'react-dom/server'

import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const helmet = Helmet.renderStatic()
export const onRenderBody = ({ setHeadComponents, replaceBodyHTMLString }) => {
  const helmet = Helmet.renderStatic()

  setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
    />,

    renderToString(<Helmet />)
  ])

  renderToString(<Helmet />)
  replaceBodyHTMLString(renderToString(<About />))
  replaceBodyHTMLString(renderToString(<Projects />))
  replaceBodyHTMLString(renderToString(<Contact />))
}