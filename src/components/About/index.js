import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'

import {
  aboutSection,
  brandedTitle,
  personalPhoto,
  highlight,
  highlightLess,
  tools,
  separator,
  paddingTop1rem,
  paddingBottom1rem
 } from './about.module.css'

const About = () => {
  return (
  <StaticQuery
    query={graphql`
    query {
      heba: file(relativePath: { eq: "heba.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 220, height: 220, formats: [WEBP])
        }
      }
    }
  `}
  render = {data => (
    <section className={`${aboutSection} ${paddingTop1rem} ${paddingBottom1rem} has-text-centered is-size-4`} id="about">
      <h1 className={`${brandedTitle} title is-2`}>About</h1>
      <div
        style={{
          display: `inline-flex`,
          justifyContent: `center`,
          flexWrap: `wrap`,
          marginBottom: 10,
          alignItems: `center`,
        }}
      >
        <GatsbyImage image={data.heba.childImageSharp.gatsbyImageData} alt="Personal photo" backgroundColor="lightgray" className={personalPhoto} />
      </div>
      <p>Hi, my name is Heba. I'm a Data Scientist. I spend my time mining data and extracting nuggets of <span className="is-size-4" role="img" aria-label="gold">💰</span>. I use them and my knowledge of Machine Learning and Deep Learning methods to build Artificially Intelligent applications.</p>
      <p>During my free time I love to read, drive or tinker with a new library on some side project.</p>
      <p>I speak:<br></br>
        <span className={highlight}>Python</span>,&nbsp; <span className={highlight}>Javascript</span>,&nbsp;
        <span className={highlightLess}>R</span>,&nbsp; <span className={highlightLess}>Java</span>. Oh, and Arabic and English!
      </p>
      <p>I use:<br></br>
        &#123;
        &nbsp;  
        <span className={tools}>
          Jupyter Notebooks
        </span>
        ,&nbsp;
        <span className={tools}>
          Scikit-Learn
        </span>
        ,&nbsp;
        <span className={tools}>
          Tensorflow
        </span>
        ,&nbsp;
        <span className={tools}>
          Keras
        </span>
        ,&nbsp;
        <span className={tools}>
          PyTorch
        </span>
        ,&nbsp;
        <span className={tools}>
          Pandas
        </span>
        ,&nbsp;
        <span className={tools}>
          NumPy
        </span>
        ,&nbsp;
        <span className={tools}>
          Matplotlib
        </span>
        ,&nbsp;
        <span className={tools}>
          D3.js
        </span>
        ,&nbsp;
        <span className={tools}>
          PySpark
        </span>
        ,&nbsp;
        <span className={tools}>
          Spark MLlib
        </span>
        ,&nbsp;
        <span className={tools}>
          Node.js
        </span>
        ,&nbsp;
        <span className={tools}>
          Express.js
        </span>
        ,&nbsp;
        <span className={tools}>
          React
        </span>
        ,&nbsp;
        <span className={tools}>
          Git
        </span>
        &nbsp;
        &#125;
        <br></br>
        among others
      </p>
      <hr className={separator}></hr>
    </section>
  )}
/>
)}

export default About
