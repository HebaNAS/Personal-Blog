import * as React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery'

import Logo from '../Logo/'
import { 
  isTransparent,
  brandFont,
  navbarColor,
  navbarMenuPosition,
  navbarPadding,
  marginLeft05rem,
  paddingTop1rem
} from './header.module.css'

const Header = (props) => {
  React.useEffect(() => {
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

    const hideNav = () => {
      $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden")
    }
    const showNav = () => {
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

    const hideArrow = () => {
      $(".up-arrow").removeClass("is-visible").addClass("is-hidden")
    }
    const showArrow = () => {
      $(".up-arrow").removeClass("is-hidden").addClass("is-visible")
    }
  }, [props]);

  return(
    <nav className={`${isTransparent} ${paddingTop1rem} navbar`} id="nav">
      <div className="navbar-brand">
        <Link className={`${navbarPadding} navbar-item`} to={props.menuLinks[0].link}>
          <Logo/>
          <h1 className={`${brandFont} ${marginLeft05rem}`}>Heba El-Shimy</h1>
        </Link>
        <div className="navbar-burger burger" data-target="navbarMobile">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarMobile" className={`${navbarMenuPosition} mt-3 navbar-menu`} data-nav-status="toggle">
        <div className="navbar-end">
          <a className={`${navbarColor} ${navbarPadding} navbar-item`} href={props.menuLinks[1].link}>
            About
          </a>
          <a className={`${navbarColor} ${navbarPadding} navbar-item`} href={props.menuLinks[2].link}>
            Projects
          </a>
          <a className={`${navbarColor} ${navbarPadding} navbar-item`} href={props.menuLinks[3].link}>
            Blog
          </a>
          <a className={`${navbarColor} ${navbarPadding} navbar-item`} href={props.menuLinks[4].link}>
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
