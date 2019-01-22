import React, { Component } from 'react'
import '../scss/thankyou.scss'

class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.timer = this.timer.bind(this)
    this.counter = React.createRef()
  }

  timer(time) {
    let timer = time
    setTimeout(() => {
      window.location='/'
    }, timer)
  }

  render() {
    let t = 10

    return(
      <div>
        {this.timer(10000)}
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
        <p className="thanks-message is-size-2 has-text-centered is-fullwidth">Your message has been sent!</p>
        <div className="box">
          <div className="box__description">
            <a href="/" className="box__button">Go back</a>
          </div>
        </div>
        <p className="redirect is-size-6 has-text-centered is-fullwidth">You will be redirected in <span className="timer" ref={this.counter}>{
          setInterval(() => {
            if (t >= 0 && this.counter.current) {
              this.counter.current.innerHTML = t
              t--
            }
          }, 1000)
        }</span> seconds.</p>
      </div>
    )
  }
}

export default ThankYou
