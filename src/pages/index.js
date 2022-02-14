import * as React from 'react'
import Layout from '../components/layout'
import Animation from '../components/Animation'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

import {
  upArrow,
  light
} from './index.module.css'

const IndexPage = () => (
  <Layout>
    <Animation />
    <About />
    <Projects />
    <Contact />
    <a href="/">
      <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" className={`${upArrow} ${light} is-hidden`} />
    </a>
  </Layout>
)

export default IndexPage
