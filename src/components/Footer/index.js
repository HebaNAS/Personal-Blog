import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import '../../scss/footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="footer-section has-text-centered is-size-7 has-text-grey-light">
        <hr className="footer-hr"></hr>
        Handcrafted with &nbsp;
          <FontAwesomeIcon icon={faHeart} className="heart"  size="sm" />
        &nbsp; by Me
      </footer>  
    )
  }
}

export default Footer