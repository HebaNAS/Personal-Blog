/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import Helmet from 'react-helmet'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Layout from './src/components/layout'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  replaceBodyHTMLString(renderToString(<Layout />))
  const helmet = Helmet.renderStatic()
}