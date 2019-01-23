import React from 'react'
import Helmet from 'react-helmet'
import config from '../../../config/SiteConfig'

const SEO = (props) => {
  const { postNode, postPath, postSEO } = props
  let title
  let description
  let image
  let postURL
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

  if (postSEO) {
    const postMeta = postNode.frontmatter
    title = postMeta.title
    description = postNode.excerpt
    image = postMeta.cover.childImageSharp.resize.src
    postURL = config.siteUrl + realPrefix + postPath
  } else {
    console.log(title)
    title = config.siteTitle
    description = config.siteDescription
    image = config.siteLogo
  }

  image = config.siteUrl + realPrefix + image

  const blogURL = config.siteUrl + config.pathPrefix
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]

  if (postSEO) {
    schemaOrgJSONLD.push([
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      },
    ])
  }

  return (
    <Helmet
      meta={[
        { name: 'description', content: 'description'},
        { name: 'image', content: 'image' },
      ]}
      script={[{ 
        type: 'application/ld+json', 
        innerHTML: 'JSON.stringify(schemaOrgJSONLD)' 
      }]}
      meta={[
        { property: 'og:locale', content: 'en_EN' },
        { property: 'og:site_name', content: {config.ogSiteName} },
        { property: 'og:url', content: {postSEO ? postURL : blogURL} }
      ]}
      { postSEO ? meta={[
        {property: 'og:type', content: 'article' }
      ]} : null }
      meta={[
        { property: 'og:title', content: {title} },
        { property: 'og:description', content: {description} },
        { property: 'og:image', content: {image} },
        { property: 'fb:app_id', content: {config.siteFBAppID ? config.siteFBAppID : ''} },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: {config.userTwitter ? config.userTwitter : ''} },
        { name: 'twitter:title', content: {title} },
        { name: 'twitter:url', content: {config.siteUrl} },
        { name: 'twitter:description', content: {description} },
        { name: 'twitter:image', content: {image} }
      ]}
    />
  )
}

export default SEO