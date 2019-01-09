import React from 'react'
import Link from 'gatsby-link'

import Animation from '../components/Animation'

const IndexPage = () => (
  <div>
    <Animation />
    <Link to="/blog/">Go to Blog Page</Link>
  </div>
)

export default IndexPage
