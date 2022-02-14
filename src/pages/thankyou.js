import * as React from 'react'
import Helmet from 'react-helmet'
import { navigate } from 'gatsby'

import typography from '../utils/typography'

import {
  thanksMessage,
  redirect,
  mailContainer,
  lineContainer,
  line,
  mail,
  box,
  boxDescription,
  boxButton,
  line1,
  line2,
  line3,
  line4,
  line5
} from './thankyou.module.css'

const ThankYou = () => {
  const counter = React.useRef()
  let t = 10

  React.useEffect(() => {
    setInterval(() => {
      if (t >= 0 && counter.current) {
        counter.current.innerHTML = t
        t--
      }
    }, 1000)

    const timer = time => {
      if (typeof window !== 'undefined') {
        let timer = time
        setTimeout(() => {
          navigate('/', {replace:true})
        }, timer)
      }
    }
  
    timer(10000)
  }, [t])
  
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
          <div className={mailContainer} id="mail-container">
            <div className={lineContainer} id="line-container">
                <div className={`${line} ${line1}`}></div>
                <div className={`${line} ${line4}`}></div>
                <div className={`${line} ${line2}`}></div>
                <div className={`${line} ${line5}`}></div>
                <div className={`${line} ${line3}`}></div>
            </div>
            <div className={mail} id="mail"></div>
          </div>
          <p className={`${thanksMessage} is-size-2`}>Your message has been sent!</p>
          <div className={box}>
            <div className={boxDescription}>
              <a href="/" className={boxButton}>Go back</a>
            </div>
          </div>
          <p className={`${redirect} is-size-5`}>You will be redirected in <span ref={counter}>{t}</span> seconds.</p>
        </div>
    </div>
  )
}

export default ThankYou
