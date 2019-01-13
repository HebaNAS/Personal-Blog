import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import Animation from '../components/Animation'

const IndexPage = (props) => (
  <Layout location={props.location}>
    <Animation />
    <Link to="/blog/">Go to Blog Page</Link>
  </Layout>
)

export default IndexPage
