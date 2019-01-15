import React, { Component } from 'react'
import { Link } from 'gatsby'
//import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/layout'
import Animation from '../components/Animation'
import About from '../components/About'

//AOS.init()

class IndexPage extends Component {
  // constructor(props) {
  //   super(props)
  //   props = this.props
  // }
  
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
        <Link to="/blog/">Go to Blog Page</Link>
      </Layout>
    )
  }
}
export default IndexPage
