import React, { Component } from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import '../../scss/about.scss'

class About extends Component {
  componentDidMount() {
    document.getElementById('about').addEventListener('wheel', (event) => {
      if (event.deltaY < 0) {
        document.getElementById('nav').scrollIntoView({behavior: "smooth"})
      }
    })
  }

  render() {
    return (
    <StaticQuery
      query={graphql`
      query {
        heba: file(relativePath: { eq: "heba.png" }) {
          childImageSharp {
            fixed(width: 220, height: 220) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render = {data => (
        <section className="about-section has-text-centered is-size-5 padding-top-1rem padding-bottom-1rem" id="about">
            <h1 className="branded-title title is-2">About</h1>
            <Img fixed={data.heba.childImageSharp.fixed} alt="Personal photo" backgroundColor="lightgray" className="personal-photo" />
            <p>Hi, my name is Heba. I'm a Data Scientist. I spend my time mining data and extracting nuggets of <span className="is-size-4" role="img" aria-label="gold">💰</span>. I use them and my knowledge of Machine Learning and Deep Learning methods to build Artificially Intelligent applications.</p>
            <p>During my free time I love to read, drive or tinker with a new library on some side project.</p>
            <p>I speak:<br></br>
              <span className="highlight">Python</span>,&nbsp; <span className="highlight">Javascript</span>,&nbsp;
              <span className="highlight-less">R</span>,&nbsp; <span className="highlight-less">Java</span>. Oh, and Arabic and English!
            </p>
            <p>I use:<br></br>
              &#123;
              &nbsp;  
              <span className="tools">
                Jupyter Notebooks
              </span>
              ,&nbsp;
              <span className="tools">
                Scikit-Learn
              </span>
              ,&nbsp;
              <span className="tools">
                Tensorflow
              </span>
              ,&nbsp;
              <span className="tools">
                Keras
              </span>
              ,&nbsp;
              <span className="tools">
                PyTorch
              </span>
              ,&nbsp;
              <span className="tools">
                Pandas
              </span>
              ,&nbsp;
              <span className="tools">
                NumPy
              </span>
              ,&nbsp;
              <span className="tools">
                Matplotlib
              </span>
              ,&nbsp;
              <span className="tools">
                D3.js
              </span>
              ,&nbsp;
              <span className="tools">
                PySpark
              </span>
              ,&nbsp;
              <span className="tools">
                Spark MLlib
              </span>
              ,&nbsp;
              <span className="tools">
                Node.js
              </span>
              ,&nbsp;
              <span className="tools">
                Express.js
              </span>
              ,&nbsp;
              <span className="tools">
                React
              </span>
              ,&nbsp;
              <span className="tools">
                Git
              </span>
              &nbsp;
              &#125;
              <br></br>
              among others
            </p>
        </section>
      )}
    />
    )}
  }

export default About