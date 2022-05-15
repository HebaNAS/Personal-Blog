import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import {
  projectsSection,
  column,
  brandedTitle,
  project,
  overlay,
  label,
  separator,
  paddingTop1rem,
  paddingBottom1rem
} from './projects.module.css'

const Project = (props) => {
  React.useEffect(() => {
    gsap.fromTo(document.getElementById('projects'), {opacity:0, scale:0.75, delay:0.35}, {duration:0.6, opacity:1, scale:1, delay:1.3})
  })

  return (
    <StaticQuery
      query={graphql`
      query {
        project1: file(relativePath: { eq: "project1.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project2: file(relativePath: { eq: "project2.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project3: file(relativePath: { eq: "project3.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project4: file(relativePath: { eq: "project4.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project5: file(relativePath: { eq: "project5.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project6: file(relativePath: { eq: "project6.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project7: file(relativePath: { eq: "project7.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project8: file(relativePath: { eq: "project8.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
        project9: file(relativePath: { eq: "project9.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER, cropFocus: ATTENTION}, aspectRatio: 1.778, height: 180, formats: [WEBP])
          }
        }
      }
    `}
    render = {data => (
      <section className={`${paddingTop1rem} ${paddingBottom1rem} ${projectsSection} has-text-centered is-size-4`} id="projects">
        <h1 className={`${brandedTitle} title is-2`}>Projects</h1>
        <div className="columns is-desktop">
          <div className={`${column} column`}>
            <a href="https://github.com/HebaNAS/Multilayer-Perceptron/blob/master/MultilayerPerceptron.ipynb" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project1.childImageSharp.gatsbyImageData} alt="Multilayer Perceptron" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>Multilayer Perceptron &nbsp; 
                <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" />
              </div>
            </a>
          </div>
          <div className={`${column} column`}>
            <a href="https://developer.ibm.com/patterns/predict-customer-churn-using-watson-studio-and-jupyter-notebooks/" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project2.childImageSharp.gatsbyImageData} alt="Customer churn predictor" backgroundColor="lightgray" className={`${project}`} />
              <div className={`${label}`}>Customer Churn Predictor &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
          <div className={`${column} column`}>
            <a href="https://developer.ibm.com/tutorials/build-and-compare-models-using-ibm-spss-modeler/" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project3.childImageSharp.gatsbyImageData} alt="SPSS Tutorial" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>SPSS Tutorial &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
        </div>
        <div className="columns is-desktop">
          <div className={`${column} column`}>
            <a href="https://developer.ibm.com/tutorials/create-interactive-dashboards-on-watson-studio/" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project4.childImageSharp.gatsbyImageData} alt="Dashboards on IBM Watson Studio" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>Dashboard on IBM Watson Studio &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
          <div className={`${column} column`}>
            <a href="https://developer.ibm.com/tutorials/create-and-experiment-with-dl-models-using-nn-modeler/" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project5.childImageSharp.gatsbyImageData} alt="Deep Learning on IBM Watson Studio" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>Deep Learning on IBM Watson Studio &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
          <div className={`${column} column`}>
            <a href="https://hebanas.github.io/D3js-Dashboard/" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project6.childImageSharp.gatsbyImageData} alt="D3.js Dashboard" backgroundColor="lightgray" className={`${project}`} />
              <div className={`${label}`}>D3.js Dashboard &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
        </div>
        <div className="columns is-desktop">
          <div className={`${brandedTitle} column`}>
            <a href="https://github.com/HebaNAS/Gradient-Descent/blob/master/GradientDescent.ipynb" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project7.childImageSharp.gatsbyImageData} alt="Gradient Descent" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>Gradient Descent &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
          <div className={`${column} column`}>
            <a href="https://github.com/HebaNAS/KNN-Classifier/blob/master/F21DM_CW1.ipynb" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project8.childImageSharp.gatsbyImageData} alt="K-Nearest Neighbor Classifier" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>K Nearest Neighbor Classifier &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
          <div className={`${column} column`}>
            <a href="https://github.com/HebaNAS/BreakIntoAI-Tools/blob/master/Break%20into%20AI.ipynb" rel="external noopener noreferrer" target="_blank">
              <GatsbyImage image={data.project9.childImageSharp.gatsbyImageData} alt="Machine Learning libraries tutorial" backgroundColor="lightgray" className={`${project} ${overlay}`} />
              <div className={`${label}`}>Machine Learning Libraries Tutorial &nbsp; 
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external" size="xs" /></div>
            </a>
          </div>
        </div>
        <hr className={separator}></hr>
      </section>
      )}
    />
  )}

export default Project