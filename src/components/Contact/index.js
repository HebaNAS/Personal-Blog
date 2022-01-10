import React, { Component } from 'react'
import { TweenMax } from 'gsap'
import { supportsPassiveEvents } from 'detect-it'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../../scss/contact.scss'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", email: "", message: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let toplevel = (new Promise(function(resolve, reject) {
      document.getElementById('projects').addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
          document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start"})
          resolve()
        }
      }, supportsPassiveEvents ? {passive:true} : false)
    }))
    toplevel.then(() => {
      TweenMax.fromTo(document.getElementById('contact'), 0.6, {opacity:0, scale:0.75, delay:0.35}, {opacity:1, scale:1, delay:1.3})
    })

    document.getElementById('contact').addEventListener('wheel', (event) => {
      if (event.deltaY < 0) {
        document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start"})
      }
    }, supportsPassiveEvents ? {passive:true} : false)

    let scrollObject = {};
    window.onscroll = getScrollPosition;

    function getScrollPosition() {
      scrollObject = {
        x: window.pageXOffset,
        y: window.pageYOffset
      }

      let UID = {
        _current: 0,
        getNew: function() {
          this._current++
          return this._current
        }
      };
      
      HTMLElement.prototype.pseudoStyle = function(element, prop, value) {
        let _this = this
        let _sheetId = 'pseudoStyles'
        let _head = document.head || document.getElementsByTagName('head')[0]
        let _sheet = document.getElementById(_sheetId) || document.createElement('style')
        _sheet.id = _sheetId
        let className = 'pseudoStyle' + UID.getNew()
        
        _this.className +=  ' ' + className
        
        _sheet.innerHTML += ' .' + className + ':' + element + '{' + prop + ':' + value + '}'
        _head.appendChild(_sheet)
        return this
      } 
      
      let formDiv = document.querySelector('.form-div')
      
      if((scrollObject.y > 1500) || (document.documentElement.clientWidth <= 768 && scrollObject.y > 3200)) {
        formDiv.pseudoStyle('after', 'visibility', 'visible')
        formDiv.pseudoStyle('before', 'visibility', 'visible')
      } else {
        formDiv.pseudoStyle('after', 'visibility', 'hidden')
        formDiv.pseudoStyle('before', 'visibility', 'hidden')
      }
    }

    getScrollPosition()
  

    document.getElementsByClassName('form-div')[0].addEventListener('click', (event) => {
      event.target.classList.add('active')
    }, supportsPassiveEvents ? {passive:true} : false)
    
    document.getElementsByClassName('submit')[0].addEventListener('click', (event) => {
      let name = document.forms["contact"]["name"]
      let email = document.forms["contact"]["email"]
      let message = document.forms["contact"]["message"]
      if ((name.value !== '' && name.checkValidity() === true) 
        && (email.value !== '' && email.checkValidity() === true)
        && (message.value !== '' && message.checkValidity() === true)) {
        event.target.parentNode.parentNode.parentNode.style.visibility = 'hidden'
      }
      // setTimeout(() => {
      //   document.getElementsByClassName('ok-message')[0].classList.add('active')
      // }, 1200)
    }, supportsPassiveEvents ? {passive:true} : false)
    
    // document.getElementsByClassName('ok-message')[0].addEventListener('click', (event) => {
    //   event.target.classList.remove('active')
    //   document.getElementsByClassName('form-div')[0].classList.remove('active')
    //   document.getElementsByClassName('form-div')[0].style.visibility = 'visible'
    // })
  }

  handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, email, message } = this.state

    return (
      <section className="contact-section has-text-centered is-size-5 padding-top-1rem padding-bottom-1rem" id="contact">
        <h1 className="branded-title title is-2">Let's Connect</h1>
        <p>You can find me on</p>
        <div className="columns">
          <div className="column is-2 is-offset-2">
            <a href="https://github.com/HebaNAS/" rel="external noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="social"  size="3x" />
            </a>
          </div>
          <div className="column is-2">
            <a href="https://twitter.com/heba_el_shimy" rel="external noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="social"  size="3x" />
            </a>
          </div>
          <div className="column is-2">
            <a href="https://www.linkedin.com/in/hebaelshimy/" rel="external noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="social"  size="3x" />
            </a>
          </div>
          <div className="column is-2">
            <a href="https://www.youtube.com/channel/UCPu4b-S5AAORT626HEgLMvQ" rel="external noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faYoutube} className="social"  size="3x" />
            </a>
          </div>
        </div>
        <br></br>
        <p>Or send me a message below <span role="img" aria-label="smile">😀</span></p>

        <div className="form-main">
          <div className="form-div">
            <form name="contact" id="contactform" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thankyou">
              <input type="hidden" name="form-name" value="contact" />
              <p className="is-hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <p className="form-name">
                <input type="text" className="feedback-input" placeholder="Name" id="name" name="name" value={name} onChange={this.handleChange} required />
              </p>
              <p className="form-email">
                <input type="email" className="feedback-input" id="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} required />
              </p>
              <p className="form-message">
                  <textarea type="message" name="message" className="feedback-input" id="message" rows="3" cols="40" maxLength="500" placeholder="Maximum of 500 characters" value={message} onChange={this.handleChange} required
                  ></textarea>
              </p>
              <div className="submit">
                <input type="submit" value="Send" id="button-brand"/>
              </div>
            </form>
          </div>
        </div>
        {/*<div className="ok-message">
        <span>Your message was sent!</span></div>*/}
      </section>
      )
  }
}

export default Contact
