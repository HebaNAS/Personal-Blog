import React, { Component } from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { TweenMax } from 'gsap'
import detectIt from 'detect-it'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import '../../scss/projects.scss'

class Project extends Component {
  componentDidMount() {
    let toplevel = (new Promise(function(resolve, reject) {
      document.getElementById('about').addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
          document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start"})
          resolve()
        }
      }, detectIt.passiveEvents ? {passive:true} : false)
    }))
    toplevel.then(() => {
      TweenMax.fromTo(document.getElementById('projects'), 0.6, {opacity:0, scale:0.75, delay:0.35}, {opacity:1, scale:1, delay:1.3})
    })

    document.getElementById('projects').addEventListener('wheel', (event) => {
      if (event.deltaY < 0) {
        document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start"})
      }
    }, detectIt.passiveEvents ? {passive:true} : false)
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
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project2: file(relativePath: { eq: "project2.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project3: file(relativePath: { eq: "project3.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project4: file(relativePath: { eq: "project4.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project5: file(relativePath: { eq: "project5.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project6: file(relativePath: { eq: "project6.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project7: file(relativePath: { eq: "project7.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project8: file(relativePath: { eq: "project8.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
          }
          project9: file(relativePath: { eq: "project9.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
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
              <a href="https://github.com/HebaNAS/Multilayer-Perceptron/blob/master/MultilayerPerceptron.ipynb" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project1.childImageSharp.fluid} alt="Multilayer Perceptron" backgroundColor="lightgray" className="project overlay" />
                <div className="label">Multilayer Perceptron &nbsp; 
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" />
                </div>
              </a>
            </div>
            <div className="column">
              <a href="https://developer.ibm.com/patterns/predict-customer-churn-using-watson-studio-and-jupyter-notebooks/" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project2.childImageSharp.fluid} alt="Customer churn predictor" backgroundColor="lightgray" className="project" />
                <div className="label">Customer Churn Predictor &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
            <div className="column">
              <a href="https://developer.ibm.com/tutorials/build-and-compare-models-using-ibm-spss-modeler/" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project3.childImageSharp.fluid} alt="SPSS Tutorial" backgroundColor="lightgray" className="project overlay" />
                <div className="label">SPSS Tutorial &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <a href="https://developer.ibm.com/tutorials/create-interactive-dashboards-on-watson-studio/" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project4.childImageSharp.fluid} alt="Dashboards on IBM Watson Studio" backgroundColor="lightgray" className="project overlay" />
                <div className="label">Dashboard on IBM Watson Studio &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
            <div className="column">
              <a href="https://developer.ibm.com/tutorials/create-and-experiment-with-dl-models-using-nn-modeler/" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project5.childImageSharp.fluid} alt="Deep Learning on IBM Watson Studio" backgroundColor="lightgray" className="project overlay" />
                <div className="label">Deep Learning on IBM Watson Studio &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
            <div className="column">
              <a href="https://hebanas.github.io/D3js-Dashboard/" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project6.childImageSharp.fluid} alt="D3.js Dashboard" backgroundColor="lightgray" className="project" />
                <div className="label">D3.js Dashboard &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <a href="https://github.com/HebaNAS/Gradient-Descent/blob/master/GradientDescent.ipynb" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project7.childImageSharp.fluid} alt="Gradient Descent" backgroundColor="lightgray" className="project overlay" />
                <div className="label">Gradient Descent &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/HebaNAS/KNN-Classifier/blob/master/F21DM_CW1.ipynb" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project8.childImageSharp.fluid} alt="K-Nearest Neighbor Classifier" backgroundColor="lightgray" className="project overlay" />
                <div className="label">K Nearest Neighbor Classifier &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/HebaNAS/BreakIntoAI-Tools/blob/master/Break%20into%20AI.ipynb" rel="external noopener noreferrer" target="_blank">
                <NonStretchedImage fluid={data.project9.childImageSharp.fluid} alt="Machine Learning libraries tutorial" backgroundColor="lightgray" className="project overlay" />
                <div className="label">Machine Learning Libraries Tutorial &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
              </a>
            </div>
          </div>
          <hr className="separator"></hr>
        </section>
        )}
      />
    )}
  }

export default Project