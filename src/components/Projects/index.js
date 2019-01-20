import React, { Component } from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { TweenMax } from 'gsap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

import '../../scss/projects.scss'

class Project extends Component {
  componentDidMount() {
    let toplevel = (new Promise(function(resolve, reject) {
      document.getElementById('about').addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
          document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start"})
          resolve()
        }
      })
    }))
    toplevel.then(() => {
      TweenMax.fromTo(document.getElementById('projects'), 0.6, {opacity:0, scale:0.75, delay:0.35}, {opacity:1, scale:1, delay:1.3})
    })

    document.getElementById('projects').addEventListener('wheel', (event) => {
      if (event.deltaY < 0) {
        document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start"})
      }
    })
  }

  render() {
    const NonStretchedImage = props => {
      let normalizedProps = props

      if (props.fluid && props.fluid.presentationWidth) {
        normalizedProps = {
          ...props,
          style: {
            ...(props.style || {}),
            maxWidth: props.fluid.presentationWidth,
            margin: "0 auto", // Used to center the image
            height: "180px",
          },
        }
      }
    
      return <Img {...normalizedProps} />
    }

    return (
      <StaticQuery
        query={graphql`
        query {
          project1: file(relativePath: { eq: "project1.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project2: file(relativePath: { eq: "project2.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project3: file(relativePath: { eq: "project3.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project4: file(relativePath: { eq: "project4.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project5: file(relativePath: { eq: "project5.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project6: file(relativePath: { eq: "project6.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project7: file(relativePath: { eq: "project7.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project8: file(relativePath: { eq: "project8.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          project9: file(relativePath: { eq: "project9.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      `}
      render = {data => (
        <section className="projects-section has-text-centered is-size-5 padding-top-1rem padding-bottom-1rem" id="projects">
          <h1 className="branded-title title is-2">Projects</h1>
          <div className="columns is-desktop">
            <div className="column">
              <a href="https://github.com/HebaNAS/Multilayer-Perceptron/blob/master/MultilayerPerceptron.ipynb">
                <NonStretchedImage fluid={data.project1.childImageSharp.fluid} alt="Multilayer Perceptron" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
            <div className="column">
              <a href="https://developer.ibm.com/patterns/predict-customer-churn-using-watson-studio-and-jupyter-notebooks/">
                <NonStretchedImage fluid={data.project2.childImageSharp.fluid} alt="Customer churn predictor" backgroundColor="lightgray" className="project" />
              </a>
            </div>
            <div className="column">
              <a href="https://developer.ibm.com/tutorials/build-and-compare-models-using-ibm-spss-modeler/">
                <NonStretchedImage fluid={data.project3.childImageSharp.fluid} alt="SPSS Tutorial" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <a href="https://developer.ibm.com/tutorials/create-interactive-dashboards-on-watson-studio/">
                <NonStretchedImage fluid={data.project4.childImageSharp.fluid} alt="Dashboards on IBM Watson Studio" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
            <div className="column">
              <a href="https://developer.ibm.com/tutorials/create-and-experiment-with-dl-models-using-nn-modeler/">
                <NonStretchedImage fluid={data.project5.childImageSharp.fluid} alt="Deep Learning on IBM Watson Studio" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
            <div className="column">
              <a href="https://hebanas.github.io/D3js-Dashboard/">
                <NonStretchedImage fluid={data.project6.childImageSharp.fluid} alt="D3.js Dashboard" backgroundColor="lightgray" className="project" />
              </a>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <a href="https://github.com/HebaNAS/Gradient-Descent/blob/master/GradientDescent.ipynb">
                <NonStretchedImage fluid={data.project7.childImageSharp.fluid} alt="Gradient Descent" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/HebaNAS/KNN-Classifier/blob/master/F21DM_CW1.ipynb">
                <NonStretchedImage fluid={data.project8.childImageSharp.fluid} alt="K-Nearest Neighbor Classifier" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/HebaNAS/BreakIntoAI-Tools/blob/master/Break%20into%20AI.ipynb">
                <NonStretchedImage fluid={data.project9.childImageSharp.fluid} alt="Machine Learning libraries tutorial" backgroundColor="lightgray" className="project overlay" />
              </a>
            </div>
          </div>
        </section>
        )}
      />
    )}
  }

export default Project