import React, { Component } from 'react'
import Layout from '../components/layout'
import Animation from '../components/Animation'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

class IndexPage extends Component {
  render() {
    return(
      <Layout location={this.props.location}>
        <Animation />
        <About />
        <Projects />
        
        <a href="/">
          <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" className="up-arrow light is-hidden" />
        </a>
      </Layout>
    )
  }
}
export default IndexPage
