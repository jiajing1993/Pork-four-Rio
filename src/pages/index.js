import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import './index.scss'

import SocialData from '../data/social'
import SideProjects from '../data/projects'
import CoolStuffs from '../data/coolStuff'
import Designs from '../data/design'

import RandomImage from '../images/projects/random.png'


const IndexPage = () => (
  <Layout>
    <section className="top-section">
      <div className="personal-info">
        <h1>Loh Jia Jing</h1>
        <p>
          I am a software engineer, focusing on frontend web development. 
          Sometimes, I also design user interface and experience for Mobile Application and Website.
        </p>
        <ul className="contacts-list">
          {
            SocialData.map((data, index)=> {
              return (
                <li key={index}>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <img src={data.image} alt={data.name}/>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
    <section className="project-section">
      <h5>Website I've built</h5>
      <div className="grid-row">
        {
          SideProjects.map((project, index) => {
            return (
              <div className="grid" key={index}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Project name={project.name} image={project.image} tags={project.tags} />
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
    <section className="project-section">
      <h5>Design I sketched</h5>
      <div className="grid-row">
        {
          Designs.map((design, index) => {
            return (
              <div className="grid" key={index}>
                <a href={design.link} target="_blank" rel="noopener noreferrer">
                  <Project name={design.name} image={design.image} tags={design.tags} />
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
    <section className="project-section">
      <h5>Cool Projects I've created</h5>
      <div className="grid-row">
        {
          CoolStuffs.map((project, index) => {
            return (
              <div className="grid" key={index}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Project name={project.name} image={project.image} backgroundColor={project.backgroundColor} tags={project.tags} />
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
    <section className="project-section">
      <h5>Some serious shit I'm doing</h5>
      <div className="grid-row">
        <div className="grid">
          <a href="https://jiajing19932.gitbook.io/self-cultivation-of-web-developer/" target="_blank" rel="noopener noreferrer">
            <Project name="Self Cultivation of Web Developer" image={RandomImage} tags={["writting"]} />
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
