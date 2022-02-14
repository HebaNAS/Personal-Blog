import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  blogHeadImage,
  onTop,
  blogPage,
  blogPageLink,
  brandedTitle,
  darkBackground,
  cardHover,
  posts,
  blogpost,
  underline
} from './blog.module.css'

const Blog = ({ location, data }) => {
  const seo = {
    siteTitle: data.site.siteMetadata.title,
    siteDescription: data.site.siteMetadata.description,
    siteImage: `${data.site.siteMetadata.url}${data.site.siteMetadata.image}`,
    siteUrl: `${data.site.siteMetadata.url}${'/'}`,
    launchIcons: data.site.siteMetadata.launchIcons,
    touchIcons: data.site.siteMetadata.touchIcons,
    menuLinks: data.site.siteMetadata.menuLinks,
  }

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: seo.siteUrl,
    inLanguage: data.site.siteMetadata.siteLanguage,
    mainEntityOfPage: seo.siteUrl,
    description: seo.siteDescription,
    name: seo.siteTitle,
    author: {
      '@type': 'Person',
      name: data.site.siteMetadata.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: data.site.siteMetadata.owner,
    },
    copyrightYear: new Date().getFullYear(),
    creator: {
      '@type': 'Person',
      name: data.site.siteMetadata.author,
    },
    publisher: {
      '@type': 'Person',
      name: data.site.siteMetadata.owner,
    },
    datePublished: '2019-01-23T10:30:00+01:00',
    dateModified: data.site.buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${seo.siteUrl}${data.site.siteMetadata.logo}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': seo.siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': seo.siteUrl + '/#about',
        name: 'About',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': seo.siteUrl + '/#projects',
        name: 'Projects',
      },
      position: 3,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': seo.siteUrl + '/blog',
        name: 'Blog',
      },
      position: 4,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': seo.siteUrl + '/#contact',
        name: 'Contact',
      },
      position: 5,
    },
  ]

  let schemaArticle = null

  if (data.first) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: data.site.siteMetadata.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: data.site.siteMetadata.author,
      },
      copyrightYear: data.first.post[0].frontmatter.date,
      creator: {
        '@type': 'Person',
        name: data.site.siteMetadata.author,
      },
      publisher: {
        '@type': 'Person',
        name: data.site.siteMetadata.author,
        logo: {
          '@type': 'ImageObject',
          url: `${seo.siteUrl}${data.site.siteMetadata.logo}`,
        },
      },
      datePublished: data.first.post[0].frontmatter.date,
      description: seo.siteDescription,
      headline: seo.siteTitle,
      inLanguage: 'en',
      url: seo.siteUrl,
      name: seo.siteTitle,
      image: {
        '@type': 'ImageObject',
        url: seo.siteImage,
      },
      mainEntityOfPage: seo.siteUrl,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.siteUrl,
        name: seo.siteTitle,
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
    title={seo.siteTitle}
    titleTemplate={data.site.siteMetadata.titleTemplate}
    meta={[
      { name: 'google-site-verification', content: 'PPalbOeBMAS2iLy3RzXw8fh0sYm3d5kzH1U1Hny-YpQ' },
      { name: 'image', content: seo.siteImage },
      { name: 'description', content: seo.siteDescription },
      { name: 'image', content: seo.siteImage },
      { name: 'keywords', content: 'data science, machine learning, AI, deep learning, portfolio, blog' },
      { name: 'theme-color', content: '#d99e8e' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { httpEquiv: 'cleartype', content: 'on' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'apple-mobile-web-app-title', content: seo.siteTitle },
      { name: 'apple-mobile-web-app-capable', content: 'Yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'charSet', content: 'utf-8' },
      seo.siteUrl && { property: 'og:url', content: seo.siteUrl },
      { property: 'og:type', content: 'article' },
      seo.siteTitle && { property: 'og:title', content: seo.siteTitle },
      seo.siteDescription && (
        { property: 'og:description', content: seo.siteDescription }
      ),
      seo.siteImage && { property: 'og:image', content: seo.siteImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      data.site.siteMetadata.twitterUsername && (
        { name: 'twitter:creator', content: data.site.siteMetadata.twitterUsername }
      ),
      seo.siteTitle && { name: 'twitter:title', content: seo.siteTitle },
      seo.siteDescription && (
        { name: 'twitter:description', content: seo.siteDescription }
      ),
      seo.siteImage && { name: 'twitter:image', content: seo.siteImage },
    ]}
    script={[
      { type: 'application/ld+json', innerHTML:JSON.stringify(schemaOrgWebPage) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(schemaArticle) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumb) },
    ]}
    link={[
      { rel: 'canonical', href: 'https://www.hebaelshimy.com' },
      { rel: 'shortcut icon', href: seo.siteImage },
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
    <html lang="en" style={{minHeight: "100%", scrollBehavior: "smooth", backgroundColor: "#000000"}} />
    <body style={{minHeight: "100%",
      scrollBehavior: "smooth",
      backgroundColor: "#000000",
      background: "url('/assets/blue-hue-bg.png') no-repeat 100% bottom, url('/assets/main-bg.png') no-repeat 100% top",
      backgroundSize: "cover, cover",
      color: "#dddddd",
      fontFamily: "'Dosis', sans-serif",
      fontSize: "1.2rem"}} />
  </Helmet>
  <Header menuLinks={seo.menuLinks}/>
  <section className={`hero ${blogPage}`}>
    <div className="hero-head mt-4 mb-5">
      <GatsbyImage image={data.blogHead.childImageSharp.gatsbyImageData} alt="Library" loading="lazy" className={blogHeadImage} />
      <h1 className={`${brandedTitle} title is-2 has-text-centered mt-5 pt-5`}>Blog</h1>
    </div>
    <div className={`hero-body`}>
      <div className="container is-max-widescreen">
        <Link to={location.href + data.first.post[0].fields.slug.substring(1)}>
          <div className={`${darkBackground} ${cardHover} card columns is-tablet has-text-white`}>
            <div className="column is-half">
              <div className="card-image">
                <span className={`${onTop} tag is-medium has-text-weight-semibold`}>
                  Featured
                </span>
                <figure className="image">
                  <GatsbyImage image={data.first.post[0].frontmatter.thumbnail.childImageSharp.gatsbyImageData} alt="Featured post" loading="lazy" />
                </figure>
              </div>
            </div>
            <div className="column">
              <div className="card-content">
                <div className="card-header">
                  <p className={`card-header-title has-text-white is-size-4 ${underline}`}>
                    {data.first.post[0].frontmatter.title}
                  </p>
                  <br/>
                  <p className="subtitle has-text-white is-size-5">
                    {data.first.post[0].frontmatter.date}
                  </p>
                </div>
                <div className="content">
                  {data.first.post[0].excerpt}
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={`container ${posts} mt-5`}>
        {data.blog.posts ?
          data.blog.posts.map(post => (
            <Link to={location.href + data.first.post[0].fields.slug.substring(1)}>
              <div className={`${darkBackground} ${cardHover} card ${blogpost} has-text-white`}>
                <div className="card-image">
                  <figure className="image">
                    <GatsbyImage image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData} alt="Blog post" loading="lazy" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <p className={`card-header-title has-text-white is-size-4 ${underline}`}>
                      {post.frontmatter.title}
                    </p>
                    <br/>
                    <p className="subtitle has-text-white is-size-5">
                      {post.frontmatter.date}
                    </p>
                  </div>
                  <div className="content">
                    {post.excerpt}
                    <br/>
                  </div>
                </div>
              </div>
            </Link>
          ))
          : <p>No blog posts at the moment...</p>
        }
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <Link className={blogPageLink} to="/">Go back to the homepage</Link>
      </div>
    </div>
  </section>
  <Footer />
  </>
)}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      buildTime(formatString: "DD-MM-YYYY")
      siteMetadata {
        title
        titleTemplate
        description
        url
        image
        author
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
    first: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
      post: nodes {
        frontmatter {
          date(fromNow: false, formatString: "DD.MM.YYYY")
          title
          author
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 1200, height: 600)
            }
          }
        }
        excerpt
        fields {
          slug
        }
        id
      }
    }
    blog: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, skip: 1) {
      posts: nodes {
        frontmatter {
          date(fromNow: false, formatString: "DD.MM.YYYY")
          title
          author
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 1200, height: 600)
            }
          }
        }
        excerpt
        fields {
          slug
        }
        id
      }
    }
    blogHead: file(relativePath: { eq: "blog-head.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }`
