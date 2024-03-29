import * as React from 'react'
import { gsap } from 'gsap'
import { supportsPassiveEvents } from 'detect-it'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { navigate } from 'gatsby'

import {
  contactSection,
  formMain,
  formMessage,
  formDiv,
  feedbackInput,
  buttonBrand,
  active,
  bgLight,
  social,
  brandedTitle,
  fName,
  fEmail,
  fMessage,
  paddingTop1rem,
  paddingBottom1rem
} from './contact.module.css'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', email: '', message: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getScrollPosition = this.getScrollPosition.bind(this)
  }

  componentDidMount() {
    gsap.fromTo(document.getElementById('contact'), {opacity:0, scale:0.75, delay:0.35}, {duration:0.6, opacity:1, scale:1, delay:1.3})

    window.onscroll = this.getScrollPosition;

    this.getScrollPosition()
  
    document.querySelector('div[class*="form-div"]').addEventListener('click', (event) => {
      event.target.classList.add(active)
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
    }, supportsPassiveEvents ? {passive:true} : false)
  }

  getScrollPosition() {
    let scrollObject = {};

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
    
    if (this.props.location.hash === '#contact') {
      if((scrollObject.y > 1500) || (document.documentElement.clientWidth <= 768 && scrollObject.y > 3200)) {
        document.querySelector('div[class*="form-div"]').pseudoStyle('after', 'visibility', 'visible')
        document.querySelector('div[class*="form-div"]').pseudoStyle('before', 'visibility', 'visible')
      } else {
        document.querySelector('div[class*="form-div"]').pseudoStyle('after', 'visibility', 'hidden')
        document.querySelector('div[class*="form-div"]').pseudoStyle('before', 'visibility', 'hidden')
      }
    }
  }

  handleSubmit(e) {
    if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => navigate('/thankyou/'))
        .catch(error => alert(error))
    } else {
      alert('Please fill out all form fields')
    }
    e.preventDefault()
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
  return (
    <section className={`${contactSection} ${paddingTop1rem} ${paddingBottom1rem} has-text-centered is-size-4`} id="contact">
      <h1 className={`${brandedTitle} title is-2`}>Let's Connect</h1>
      <p>You can find me on</p>
      <div className="columns">
        <div className="column is-2 is-offset-2">
          <a href="https://github.com/HebaNAS/" rel="external noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={social}  size="3x" />
          </a>
        </div>
        <div className="column is-2">
          <a href="https://twitter.com/heba_el_shimy" rel="external noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className={social}  size="3x" />
          </a>
        </div>
        <div className="column is-2">
          <a href="https://www.linkedin.com/in/hebaelshimy/" rel="external noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={social}  size="3x" />
          </a>
        </div>
        <div className="column is-2">
          <a href="https://www.youtube.com/channel/UCPu4b-S5AAORT626HEgLMvQ" rel="external noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className={social}  size="3x" />
          </a>
        </div>
      </div>
      <br></br>
      <p>Or send me a message below <span role="img" aria-label="smile">😀</span></p>

      <div className={formMain}>
        {/* <div className={formDiv} ref={formD}> */}
        <div className={formDiv}>
          <form name="contact" id="contactform" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thankyou">
            <input type="hidden" name="form-name" value="contact" />
            <p className="is-hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p className="form-name">
              <input key="1" type="text" className={`${feedbackInput} ${bgLight} ${fName}`} placeholder="Name" id="name" name="name" value={this.state.name || ''} onChange={this.handleChange} required />
            </p>
            <p className="form-email">
              <input key="2" type="email" className={`${feedbackInput} ${bgLight} ${fEmail}`} id="email" placeholder="Email" name="email" value={this.state.email || ''} onChange={this.handleChange} required />
            </p>
            <p className={formMessage}>
                <textarea key="3" type="message" name="message" className={`${feedbackInput} ${bgLight} ${fMessage}`} id="message" rows="3" cols="40" maxLength="500" placeholder="Maximum of 500 characters" value={this.state.message || ''} onChange={this.handleChange} required
                ></textarea>
            </p>
            <div className="submit">
              <input type="submit" className={`${buttonBrand} is-size-4`} value="Send" id="button-brand" onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </section>
    )
  }
}

export default Contact
