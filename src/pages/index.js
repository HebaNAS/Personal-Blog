import * as React from 'react'
import AOS from 'aos'
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
import 'aos/dist/aos.css';

const IndexPage = ({ location }) => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return(
    <Layout>
      <Animation />
      <About />
      <Projects />
      <Contact location={ location } />
      <a href="/" data-aos="fade-up">
        <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" className={`${upArrow} ${light}`} />
      </a>
    </Layout>
  )
}

export default IndexPage
