import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
//import { TypographyStyle, GoogleFont } from 'react-typography'

import typography from '../utils/typography'

import '../scss/main.scss'
import Header from './Header';

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={ data => (
        <>
        <Helmet
          title="Heba El-Shimy's Portfolio & Blog"
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio' },
            { name: 'keywords', content: 'portfolio, blog' },
            { name: 'theme-color', content: '#000000' },
            { httpEquiv: 'cleartype', content: 'on' },
            { name: 'HandheldFriendly', content: 'True' },
            { name: 'MobileOptimized', content: '320' },
            { name: 'apple-mobile-web-app-title', content: 'Portfolio'},
            { name: 'apple-mobile-web-app-capable', content: 'Yes'},
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { charSet: 'utf-8' }
          ]}
          link={[
            { rel: 'shortcut icon', href: '/favicon.ico' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px)    (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-640x1136.png' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-750x1334.png' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-1242x2208.png' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-1125x2436.png' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-1536x2048.png' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-1668x2224.png' },
            { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: '/images/launch/apple-touch-startup-image-2048x2732.png' },
            { rel: 'apple-touch-icon', href: '/images/touch/apple-touch-icon.png' },
            { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/touch/apple-touch-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/touch/apple-touch-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/touch/apple-touch-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/touch/apple-touch-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/touch/apple-touch-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/touch/apple-touch-icon-152x152.png' },
            { rel: 'preload', as: 'style', href: '/styles.css' },
            { rel: 'preload', as: 'style', href: '/build-js-styles.css' },
            { rel: 'preload', as: 'script', href: '/scripts/mobileMenu.js' },
            { rel: 'preload', as: 'image', href: '/assets/main-bg.png' },
            { rel: 'preload', as: 'image', href: '/assets/blue-hue-bg.png' },
            { rel: 'preload', as: 'image', href: '/assets/logo.svg' },
            { rel: 'preload', as: 'image', href: '/assets/brain.svg' }
          ]}
          TypographyStyle={[ {typography: typography} ]}
          GoogleFont={[ {typography: typography} ]}
        />
        <Header menuLinks={data.site.siteMetadata.menuLinks}/>
        <div
          style={{
            margin: '-1rem auto',
            maxWidth: 1100,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
