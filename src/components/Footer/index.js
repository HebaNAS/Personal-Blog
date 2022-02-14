import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { 
  footerSection,
  footerHr,
  heart
} from './footer.module.css'

const Footer = () => (
  <footer className={`${footerSection} has-text-centered is-size-6 has-text-grey-light`}>
    <hr className={footerHr}></hr>
    Handcrafted with &nbsp;
      <FontAwesomeIcon icon={faHeart} className={heart}  size="sm" />
    &nbsp; by Me
  </footer>  
)

export default Footer