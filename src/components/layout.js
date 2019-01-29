import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
//import { TypographyStyle, GoogleFont } from 'react-typography'

import '../scss/main.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, location, title, description, image, pathname, article, node }) => (
  <StaticQuery
    query={query}
    render={({
        site: {
          buildTime,
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            author,
            defaultImage,
            owner,
            logo,
            siteLanguage,
            twitterUsername,
            menuLinks,
            launchIcons,
            touchIcons,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
          launchIcons: launchIcons,
          touchIcons: touchIcons,
          menuLinks: menuLinks,
        }
  
        const schemaOrgWebPage = {
          '@context': 'http://schema.org',
          '@type': 'WebPage',
          url: siteUrl,
          inLanguage: siteLanguage,
          mainEntityOfPage: siteUrl,
          description: defaultDescription,
          name: defaultTitle,
          author: {
            '@type': 'Person',
            name: author,
          },
          copyrightHolder: {
            '@type': 'Person',
            name: owner,
          },
          copyrightYear: '2019',
          creator: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Person',
            name: owner,
          },
          datePublished: '2019-01-23T10:30:00+01:00',
          dateModified: buildTime,
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}${logo}`,
          },
        }
  
        // Initial breadcrumb list
  
        const itemListElement = [
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl,
              name: 'Homepage',
            },
            position: 1,
          },
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl + '/#about',
              name: 'About',
            },
            position: 2,
          },
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl + '/#projects',
              name: 'Projects',
            },
            position: 3,
          },
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl + '/blog',
              name: 'Blog',
            },
            position: 4,
          },
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl + '/#contact',
              name: 'Contact',
            },
            position: 5,
          },
        ]
  
        let schemaArticle = null
  
        // if (article) {
        //   schemaArticle = {
        //     '@context': 'http://schema.org',
        //     '@type': 'Article',
        //     author: {
        //       '@type': 'Person',
        //       name: author,
        //     },
        //     copyrightHolder: {
        //       '@type': 'Person',
        //       name: author,
        //     },
        //     copyrightYear: '2019',
        //     creator: {
        //       '@type': 'Person',
        //       name: author,
        //     },
        //     publisher: {
        //       '@type': 'Organization',
        //       name: author,
        //       logo: {
        //         '@type': 'ImageObject',
        //         url: `${siteUrl}${logo}`,
        //       },
        //     },
        //     //datePublished: node.first_publication_date,
        //     //dateModified: node.last_publication_date,
        //     description: seo.description,
        //     headline: seo.title,
        //     inLanguage: 'en',
        //     url: seo.url,
        //     name: seo.title,
        //     image: {
        //       '@type': 'ImageObject',
        //       url: seo.image,
        //     },
        //     mainEntityOfPage: seo.url,
        //   }
        //   // Push current blogpost into breadcrumb list
        //   itemListElement.push({
        //     '@type': 'ListItem',
        //     item: {
        //       '@id': seo.url,
        //       name: seo.title,
        //     },
        //     position: 6,
        //   })
        // }
  
        const breadcrumb = {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          name: 'Breadcrumbs',
          itemListElement,
        }
      return (
      <>
      <Helmet 
        title={seo.title}
        titleTemplate={titleTemplate}
        meta={[
          { name: 'google-site-verification', content: 'PPalbOeBMAS2iLy3RzXw8fh0sYm3d5kzH1U1Hny-YpQ' },
          { name: 'image', content: seo.image },
          { name: 'description', content: seo.description },
          { name: 'image', content: seo.image },
          { name: 'keywords', content: 'data science, machine learning, AI, deep learning, portfolio, blog' },
          { name: 'theme-color', content: '#d99e8e' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { httpEquiv: 'cleartype', content: 'on' },
          { name: 'HandheldFriendly', content: 'True' },
          { name: 'MobileOptimized', content: '320' },
          { name: 'apple-mobile-web-app-title', content: seo.title },
          { name: 'apple-mobile-web-app-capable', content: 'Yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
          { name: 'charSet', content: 'utf-8' },
          // seo.url && { property: 'og:url', content: seo.url },
          // (article ? true : null) && (
          //   { property: 'og:type', content: 'article' }
          // ),
          seo.title && { property: 'og:title', content: seo.title },
          seo.description && (
            { property: 'og:description', content: seo.description }
          ),
          seo.image && { property: 'og:image', content: seo.image },
          { name: 'twitter:card', content: 'summary_large_image' },
          twitterUsername && (
            { name: 'twitter:creator', content: twitterUsername }
          ),
          seo.title && { name: 'twitter:title', content: seo.title },
          seo.description && (
            { name: 'twitter:description', content: seo.description }
          ),
          seo.image && { name: 'twitter:image', content: seo.image },
        ]}
        script={[
          //!article && { type: 'application/ld+json', innerHTML:JSON.stringify(schemaOrgWebPage) },
          //article && { type: 'application/ld+json', innerHTML: JSON.stringify(schemaArticle) },
          { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumb) },
        ]}
        link={[
          { rel: 'canonical', href: 'https://www.hebaelshimy.com/blog' },
          { rel: 'shortcut icon', href: seo.image },
          { rel: seo.launchIcons[0].nom,
            media: seo.launchIcons[0].media,
            href: seo.launchIcons[0].icon,
          },
          {
            rel: seo.launchIcons[1].nom,
            media: seo.launchIcons[1].media,
            href: seo.launchIcons[1].icon,
          },
          {
            rel: seo.launchIcons[2].nom,
            media: seo.launchIcons[2].media,
            href: seo.launchIcons[2].icon,
          },
          {
            rel: seo.launchIcons[3].nom,
            media: seo.launchIcons[3].media,
            href: seo.launchIcons[3].icon,
          },
          {
            rel: seo.launchIcons[4].nom,
            media: seo.launchIcons[4].media,
            href: seo.launchIcons[4].icon,
          },
          {
            rel: seo.launchIcons[5].nom,
            media: seo.launchIcons[5].media,
            href: seo.launchIcons[5].icon,
          },
          {
            rel: seo.launchIcons[6].nom,
            media: seo.launchIcons[6].media,
            href: seo.launchIcons[6].icon,
          },
          {
            rel: seo.touchIcons[0].type,
            href: seo.touchIcons[0].href,
          },
          {
            rel: seo.touchIcons[1].type,
            size: seo.touchIcons[1].size,
            href: seo.touchIcons[1].href,
          },
          {
            rel: seo.touchIcons[2].type,
            size: seo.touchIcons[2].size,
            href: seo.touchIcons[2].href,
          },
          {
            rel: seo.touchIcons[3].type,
            size: seo.touchIcons[3].size,
            href: seo.touchIcons[3].href,
          },
          {
            rel: seo.touchIcons[4].type,
            size: seo.touchIcons[4].size,
            href: seo.touchIcons[4].href,
          },
          {
            rel: seo.touchIcons[5].type,
            size: seo.touchIcons[5].size,
            href: seo.touchIcons[5].href,
          },
          {
            rel: seo.touchIcons[6].type,
            size: seo.touchIcons[6].size,
            href: seo.touchIcons[6].href,
          },
          { rel: 'preload', as: 'image', href: '/assets/main-bg.png' },
          { rel: 'preload', as: 'image', href: '/assets/blue-hue-bg.png' },
          { rel: 'preload', as: 'image', href: '/assets/logo.svg' },
          { rel: 'preload', as: 'image', href: '/assets/brain.svg' },
        ]}
      >
        <html lang="en" />
        {/*TypographyStyle={[ {typography: typography} ]}
        GoogleFont={[ {typography: typography} ]}*/}
      </Helmet>
        <Header menuLinks={seo.menuLinks}/>
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

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  //article: PropTypes.object,
  //node: PropTypes.object,
}

Layout.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  //article: null,
  //node: null,
}

const query = graphql`
  query SEOQuery{
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        author
        defaultImage: image
        owner
        logo
        siteLanguage
        twitterUsername
        menuLinks {
          name
          link
        }
        launchIcons {
          nom
          media
          icon
        }
        touchIcons {
          type
          size
          href
        }
      }
    }
  }
`