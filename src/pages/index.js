import React, { Component } from 'react'
import 'aos/dist/aos.css'
import Layout from '../components/layout'
import Animation from '../components/Animation'
import About from '../components/About'

class IndexPage extends Component {
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined'
    const AOS = isBrowser ? require('aos') : 'undefined'

    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }
  
  render() {
    return(
      <Layout location={this.props.location}>
        <Animation />
        <About />
      </Layout>
    )
  }
}
export default IndexPage
