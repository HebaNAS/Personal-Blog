import React, { Component } from 'react'
import $ from 'jquery'

import Layout from '../components/layout'

import '../scss/error.scss'

class NotFoundPage extends Component {
  componentDidMount() {
    let pageX = $(document).width()
    let pageY = $(document).height()
    let mouseY = 0
    let mouseX = 0
    let yAxis = 0
    let xAxis = 0

    $(document).mousemove(function( event ) {
      mouseY = event.pageY
      yAxis = (pageY / 2 - mouseY) / pageY * 300

      mouseX = event.pageX / -pageX
      xAxis = -mouseX * 100 - 100

      $('.box__ghost-eyes').css({ 'transform': 'translate(' + xAxis + '%,-' + yAxis + '%)' }) 
    })
  }

  render() {
    return(
      <Layout>
        <div className="box">
          <div className="box__ghost">
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            
            <div className="box__ghost-container">
              <div className="box__ghost-eyes">
                <div className="box__eye-left"></div>
                <div className="box__eye-right"></div>
              </div>
              <div className="box__ghost-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="box__ghost-shadow"></div>
          </div>
          
          <div className="box__description">
            <div className="box__description-container">
              <div className="box__description-title">Whoops!</div>
              <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
            </div>
            
            <a href="/" className="box__button">Go back</a>
            
          </div>
          
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
