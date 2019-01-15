import React from 'react'
import { Link } from 'gatsby'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/layout'
import Animation from '../components/Animation'
import About from '../components/About'

AOS.init()

const IndexPage = (props) => (
  <Layout location={props.location}>
    <Animation />
    <About />
    <Link to="/blog/">Go to Blog Page</Link>
  </Layout>
)

export default IndexPage
