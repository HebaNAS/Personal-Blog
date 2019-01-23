import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import '../scss/blog.scss'

const Blog = (props) => {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter

  return(
  <Layout>
    <div className="blog-page hero is-fullheight">
      <div className="hero-head">
        <h1 className="branded-title title is-2 has-text-centered">Blog</h1>
      </div>
      <div className="hero-body">
        <div className="container">
          <p>No blog posts at the moment...</p>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Blog

const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }
`
