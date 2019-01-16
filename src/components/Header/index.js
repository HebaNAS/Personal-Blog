import React, { Component } from 'react'
import { Link } from 'gatsby'
import $ from 'jquery'

import Logo from '../Logo/'
import '../../scss/header.scss';

class Header extends Component {
  componentDidMount() {

    console.log(this.props)
    // Mobile menu functionality
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)

          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }


    if ($(window).width() > 768) {
      // Hide menu on scroll
      let previousScroll = 0

      $(window).scroll(function(){
        let currentScroll = $(this).scrollTop()

        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
          if (currentScroll > previousScroll) {
            window.setTimeout(hideNav, 300)
          } else {
            window.setTimeout(showNav, 300)
          }

          previousScroll = currentScroll
        }
      })
    }

    function hideNav() {
      $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden")
    }
    function showNav() {
      $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible")
    }

    // Hide arrow on scroll
    if ($(window).width() > 768) {
      $(window).scroll(function(){
        let currentScroll = $(this).scrollTop()

        if (currentScroll > $(this).height() - 200) {
          window.setTimeout(showArrow, 300)
        } else {
          window.setTimeout(hideArrow, 300)
        }

        currentScroll = 0
      })
    }

    function hideArrow() {
      $(".up-arrow").removeClass("is-visible").addClass("is-hidden")
    }
    function showArrow() {
      $(".up-arrow").removeClass("is-hidden").addClass("is-visible")
    }
  }

  render() {
    return(
      <nav className="navbar is-black is-transparent margin-top-minus-05rem" id="nav">
        <div className="navbar-brand">
          <Link className="navbar-item" to={this.props.menuLinks[0].link}>
            <Logo/>
            <h1 className="brand brand-font margin-left-05rem margin-top-1-5rem is-primary is-bold">Heba El-Shimy</h1>
          </Link>
          <div className="navbar-burger burger" data-target="navbarMobile">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMobile" className="navbar-menu" data-nav-status="toggle">
          <div className="navbar-end">
            <a className="navbar-item" href={this.props.menuLinks[1].link}>
              About
            </a>
            <a className="navbar-item" href={this.props.menuLinks[2].link}>
              Projects
            </a>
            <Link className="navbar-item" to={this.props.menuLinks[3].link}>
              Blog
            </Link>
            <a className="navbar-item" href={this.props.menuLinks[4].link}>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
