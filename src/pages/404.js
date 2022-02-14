import * as React from 'react'
import Helmet from 'react-helmet'
import $ from 'jquery'

import typography from '../utils/typography'

import {
  box,
  boxGhost,
  symbol,
  boxGhostContainer,
  boxGhostEyes,
  boxEyeLeft,
  boxEyeRight,
  boxGhostBottom,
  boxGhostBottomChild,
  boxGhostShadow,
  boxDescription,
  boxDescriptionContainer,
  boxDescriptionTitle,
  boxDescriptionText,
  boxButton,
} from './error.module.css'

const NotFoundPage = () => {
  React.useEffect(() => {
    let pageX = $(document).width()
    let pageY = $(document).height()
    let mouseY = 0
    let mouseX = 0
    let yAxis = 0
    let xAxis = 0

    $(document).mousemove(( event ) => {
      mouseY = event.pageY
      yAxis = (pageY / 2 - mouseY) / pageY * 300

      mouseX = event.pageX / -pageX
      xAxis = -mouseX * 100 - 100

      $('div[class*="box-ghost-eyes"]').css({ 'transform': 'translate(' + xAxis + '%,-' + yAxis + '%)' }) 
    })
  }, [])

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
            boxSizing: 'border-box'
          }}
        >
          <div className={box}>
            <div className={boxGhost}>
              <div className={symbol}></div>
              <div className={symbol}></div>
              <div className={symbol}></div>
              <div className={symbol}></div>
              <div className={symbol}></div>
              <div className={symbol}></div>
              
              <div className={boxGhostContainer}>
                <div className={boxGhostEyes}>
                  <div className={boxEyeLeft}></div>
                  <div className={boxEyeRight}></div>
                </div>
                <div className={boxGhostBottom}>
                  <div className={boxGhostBottomChild}></div>
                  <div className={boxGhostBottomChild}></div>
                  <div className={boxGhostBottomChild}></div>
                  <div className={boxGhostBottomChild}></div>
                  <div ></div>
                </div>
              </div>
              <div className={boxGhostShadow}></div>
            </div>
            
            <div className={boxDescription}>
              <div className={boxDescriptionContainer}>
                <div className={boxDescriptionTitle}>Whoops!</div>
                <div className={boxDescriptionText}>It seems like we couldn't find the page you were looking for</div>
              </div>
              
              <a href="/" className={boxButton}>Go back</a>
              
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default NotFoundPage
