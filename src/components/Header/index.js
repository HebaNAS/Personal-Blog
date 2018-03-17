import React from 'react'
import Link from 'gatsby-link'

import Logo from '../Logo/'
import '../../scss/header.scss';

const Header = () => (
  <nav className="navbar is-black is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <Logo/>
      </a>
      <div className="navbar-burger burger" data-target="navbarMobile">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarMobile" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item" href="#about">
          About
        </a>
        <a className="navbar-item" href="#portfolio">
          Portfolio
        </a>
        <Link className="navbar-item" to="/blog/">
          Blog
        </Link>
        <a className="navbar-item" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  </nav>
)

export default Header
