import React, { Component } from 'react'
import Link from 'gatsby-link'

import Logo from '../Logo/'
import '../../scss/header.scss';

class Header extends Component {
  componentDidMount() {
    // Mobile menu functionality
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return(
      <nav className="navbar is-black is-transparent margin-top-minus-05rem">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <Logo/>
            <h1 className="brand brand-font margin-left-05rem margin-top-1-5rem is-primary is-bold">Heba El-Shimy</h1>
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
  }
}

export default Header
