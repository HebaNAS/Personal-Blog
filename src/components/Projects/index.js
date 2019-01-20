import React, { Component } from 'react'
import Img from 'gatsby-image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

import '../../scss/projects.scss'
import { StaticQuery, graphql } from 'gatsby'

class Project extends Component {
  componentDidMount() {
    document.getElementById('about').addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        document.getElementById('projects').scrollIntoView({behavior: "smooth"})
      }
    })

    document.getElementById('projects').addEventListener('wheel', (event) => {
      if (event.deltaY < 0) {
        document.getElementById('about').scrollIntoView({behavior: "smooth"})
      }
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
          project1: file(relativePath: { eq: "project1.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project2: file(relativePath: { eq: "project2.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project3: file(relativePath: { eq: "project3.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project4: file(relativePath: { eq: "project4.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project5: file(relativePath: { eq: "project5.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project6: file(relativePath: { eq: "project6.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project7: file(relativePath: { eq: "project7.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project8: file(relativePath: { eq: "project8.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          project9: file(relativePath: { eq: "project9.png" }) {
            childImageSharp {
              fixed(width: 325, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render = {data => (
        <section className="projects-section has-text-centered is-size-5 padding-top-1rem padding-bottom-1rem" id="projects">
          <h1 className="branded-title title is-2">Projects</h1>
          <div className="columns">
            <div className="column">
              <Img fixed={data.project1.childImageSharp.fixed} alt="Multilayer Perceptron" backgroundColor="lightgray" className="project overlay" />
            </div>
            <div className="column">
              <Img fixed={data.project2.childImageSharp.fixed} alt="Customer churn predictor" backgroundColor="lightgray" className="project" />
            </div>
            <div className="column">
              <Img fixed={data.project3.childImageSharp.fixed} alt="SPSS Tutorial" backgroundColor="lightgray" className="project overlay" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Img fixed={data.project4.childImageSharp.fixed} alt="Multilayer Perceptron" backgroundColor="lightgray" className="project overlay" />
            </div>
            <div className="column">
              <Img fixed={data.project5.childImageSharp.fixed} alt="Customer churn predictor" backgroundColor="lightgray" className="project overlay" />
            </div>
            <div className="column">
              <Img fixed={data.project6.childImageSharp.fixed} alt="SPSS Tutorial" backgroundColor="lightgray" className="project" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Img fixed={data.project7.childImageSharp.fixed} alt="Multilayer Perceptron" backgroundColor="lightgray" className="project overlay" />
            </div>
            <div className="column">
              <Img fixed={data.project8.childImageSharp.fixed} alt="Customer churn predictor" backgroundColor="lightgray" className="project overlay" />
            </div>
            <div className="column">
              <Img fixed={data.project9.childImageSharp.fixed} alt="SPSS Tutorial" backgroundColor="lightgray" className="project overlay" />
            </div>
          </div>
        </section>
        )}
      />
    )}
  }

export default Project