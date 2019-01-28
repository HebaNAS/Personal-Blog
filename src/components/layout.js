import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
//import { TypographyStyle, GoogleFont } from 'react-typography'

import '../scss/main.scss'
import Header from './Header'
import Footer from './Footer'
import stringSEO from './SEO/SEO'

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
    render={ data => {
      return (
      <>
        <stringSEO />
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
        <Footer />
      </>
      )}
    }
  />
)

export default Layout
