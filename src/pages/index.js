import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to About Page</Link>
    <br/>
    <Link to="/blog/">Go to Blog Page</Link>
  </div>
)

export default IndexPage
