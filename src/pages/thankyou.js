import React, { Component } from 'react'
import { navigate } from '@reach/router'

import Layout from '../components/layout'

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
    return(
      <Layout location={this.props.location}>
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
          <p className="redirect is-size-6 has-text-centered is-fullwidth">You will be redirected in <span className="timer" ref={this.counter}>{this.t}</span> seconds.</p>
        </div>
      </Layout>
    )
  }
}

export default ThankYou
