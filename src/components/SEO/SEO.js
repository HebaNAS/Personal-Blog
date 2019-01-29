import React from 'react'
import Helmet from 'react-helmet'
import ReactDOMServer from 'react-dom/server'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

//import typography from '../../utils/typography'
//import { helmet } from '../../../gatsby-ssr'

const SEO = ({ title, description, image, pathname, article, node }) => (
  <StaticQuery
    query={query}
    render={ data => ({
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
          launchIcons: {
            nom,
            media,
            icon,
          },
          touchIcons: {
            type,
            size,
            href,
          },
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
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

      if (article) {
        schemaArticle = {
          '@context': 'http://schema.org',
          '@type': 'Article',
          author: {
            '@type': 'Person',
            name: author,
          },
          copyrightHolder: {
            '@type': 'Person',
            name: author,
          },
          copyrightYear: '2019',
          creator: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: author,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}${logo}`,
            },
          },
          datePublished: node.first_publication_date,
          dateModified: node.last_publication_date,
          description: seo.description,
          headline: seo.title,
          inLanguage: 'en',
          url: seo.url,
          name: seo.title,
          image: {
            '@type': 'ImageObject',
            url: seo.image,
          },
          mainEntityOfPage: seo.url,
        }
        // Push current blogpost into breadcrumb list
        itemListElement.push({
          '@type': 'ListItem',
          item: {
            '@id': seo.url,
            name: seo.title,
          },
          position: 6,
        })
      }

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
            seo.url && { property: 'og:url', content: seo.url },
            (article ? true : null) && (
              { property: 'og:type', content: 'article' }
            ),
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
            !article && { type: 'application/ld+json', innerHTML:JSON.stringify(schemaOrgWebPage) },
            article && { type: 'application/ld+json', innerHTML: JSON.stringify(schemaArticle) },
            { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumb) },
          ]}
          link={[
            { rel: 'canonical', href: 'https://www.hebaelshimy.com/blog' },
            { rel: 'shortcut icon', href: seo.image },
            { rel: data.site.siteMetadata.launchIcons[0].nom,
              media: data.site.siteMetadata.launchIcons[0].media,
              href: data.site.siteMetadata.launchIcons[0].icon,
            },
            {
              rel: data.site.siteMetadata.launchIcons[1].nom,
              media: data.site.siteMetadata.launchIcons[1].media,
              href: data.site.siteMetadata.launchIcons[1].icon,
            },
            {
              rel: data.site.siteMetadata.launchIcons[2].nom,
              media: data.site.siteMetadata.launchIcons[2].media,
              href: data.site.siteMetadata.launchIcons[2].icon,
            },
            {
              rel: data.site.siteMetadata.launchIcons[3].nom,
              media: data.site.siteMetadata.launchIcons[3].media,
              href: data.site.siteMetadata.launchIcons[3].icon,
            },
            {
              rel: data.site.siteMetadata.launchIcons[4].nom,
              media: data.site.siteMetadata.launchIcons[4].media,
              href: data.site.siteMetadata.launchIcons[4].icon,
            },
            {
              rel: data.site.siteMetadata.launchIcons[5].nom,
              media: data.site.siteMetadata.launchIcons[5].media,
              href: data.site.siteMetadata.launchIcons[5].icon,
            },
            {
              rel: data.site.siteMetadata.launchIcons[6].nom,
              media: data.site.siteMetadata.launchIcons[6].media,
              href: data.site.siteMetadata.launchIcons[6].icon,
            },
            {
              rel: data.site.siteMetadata.touchIcons[0].type,
              href: data.site.siteMetadata.touchIcons[0].href,
            },
            {
              rel: data.site.siteMetadata.touchIcons[1].type,
              size: data.site.siteMetadata.touchIcons[1].size,
              href: data.site.siteMetadata.touchIcons[1].href,
            },
            {
              rel: data.site.siteMetadata.touchIcons[2].type,
              size: data.site.siteMetadata.touchIcons[2].size,
              href: data.site.siteMetadata.touchIcons[2].href,
            },
            {
              rel: data.site.siteMetadata.touchIcons[3].type,
              size: data.site.siteMetadata.touchIcons[3].size,
              href: data.site.siteMetadata.touchIcons[3].href,
            },
            {
              rel: data.site.siteMetadata.touchIcons[4].type,
              size: data.site.siteMetadata.touchIcons[4].size,
              href: data.site.siteMetadata.touchIcons[4].href,
            },
            {
              rel: data.site.siteMetadata.touchIcons[5].type,
              size: data.site.siteMetadata.touchIcons[5].size,
              href: data.site.siteMetadata.touchIcons[5].href,
            },
            {
              rel: data.site.siteMetadata.touchIcons[6].type,
              size: data.site.siteMetadata.touchIcons[6].size,
              href: data.site.siteMetadata.touchIcons[6].href,
            },
            { rel: 'preload', as: 'script', href: '/scripts/mobileMenu.js' },
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
      </>  
      )
    }}
  />
)

const stringSEO = ReactDOMServer.renderToString(SEO)
const helmet = Helmet.renderStatic()
//console.log(helmet)
export default stringSEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  node: null,
}

const query = graphql`
  query data {
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
