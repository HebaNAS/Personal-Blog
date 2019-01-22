import React, { Component } from 'react'
import $ from 'jquery'
import '../scss/error.scss'

class NotFoundPage extends Component {
  componentDidMount() {
    var pageX = $(document).width();
    var pageY = $(document).height();
    var mouseY=0;
    var mouseX=0;
    var yAxis = 0;
    var xAxis = 0;

    $(document).mousemove(function( event ) {
      //verticalAxis
      mouseY = event.pageY;
      yAxis = (pageY/2-mouseY)/pageY*300; 
      //horizontalAxis
      mouseX = event.pageX / -pageX;
      xAxis = -mouseX * 100 - 100;

      $('.box__ghost-eyes').css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' }); 
    });
  }

  render() {
    return(
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
    )
  }
}

export default NotFoundPage
