import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { navigate } from '@reach/router'

import typography from '../utils/typography'

import '../scss/main.scss'
import '../scss/thankyou.scss'

class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.timer = this.timer.bind(this)
    this.counter = React.createRef()
    this.t = 10
  }

  componentDidMount() {
    setInterval(() => {
      if (this.t >= 0 && this.counter.current) {
        this.counter.current.innerHTML = this.t
        this.t--
      }
    }, 1000)
  }

  timer(time) {
    if (typeof window !== 'undefined') {
      let timer = time
      setTimeout(() => {
        navigate(`/`)
      }, timer)
    }
  }

  render() {
    this.timer(10000)
    return(
      <div>
        <Helmet
            TypographyStyle={[ {typography: typography} ]}
            GoogleFont={[ {typography: typography} ]}
          />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1100,
            }}
          >
            <div id="mail-container">
              <div id="line-container">
                  <div className="line line-1"></div>
                  <div className="line line-4"></div>
                  <div className="line line-2"></div>
                  <div className="line line-5"></div>
                  <div className="line line-3"></div>
              </div>
              <div id="mail"></div>
            </div>
            <p className="thanks-message is-size-2">Your message has been sent!</p>
            <div className="box">
              <div className="box__description">
                <a href="/" className="box__button">Go back</a>
              </div>
            </div>
            <p className="redirect is-size-6">You will be redirected in <span className="timer" ref={this.counter}>{this.t}</span> seconds.</p>
          </div>
      </div>
    )
  }
}

export default ThankYou
