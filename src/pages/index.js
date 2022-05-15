import * as React from 'react'
import Layout from '../components/layout'
import Animation from '../components/Animation'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const IndexPage = ({ location }) => {
  return(
    <Layout location={ location }>
      <Animation />
      <About />
      <Projects />
      <Contact location={ location } />
    </Layout>
  )
}

export default IndexPage
