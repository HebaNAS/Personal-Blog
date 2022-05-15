import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

import { thepost, blogPageLink } from './blogpost.module.css'
require(`katex/dist/katex.min.css`)

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <section className="hero is-fullheight has-text-white">
        <div className="hero-head" style={{marginTop: '7.5rem'}}>
          <div className="block">
            <p className="title has-text-white">{post.frontmatter.title}</p>
            <small>{post.frontmatter.date}</small>
          </div>
        </div>
        <div className={`hero-body mt-0 mb-5 ${thepost} is-size-4`}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Link className={`${blogPageLink} mt-5`} to="/blog">Go back to the blog page</Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`

export default BlogPost