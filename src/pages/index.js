import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ProjectIndex from "../components/projectIndex"

import * as styles from "../styles/index.module.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const IndexPage = ({ data }) => {

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Daria Tsvetkova",
    "description": "Daria Tsvetkova is a software developer and musician based in Toronto, Canada.",
    "url": "https://dariatsvetkova.ca/",
    "image": "https://dariatsvetkova.ca/static/daria-tsvetkova-schema.jpg",
    "sameAs": [
      "https://twitter.com/daria_tsss",
      "https://www.linkedin.com/in/daria-tsvetkova/",
      "https://dariatsvetkova.ca",
      "https://soundcloud.com/liuthsounds",
      "https://www.instagram.com/liuth.sounds/"
    ],
    "jobTitle": "Software Developer and Musician"
  }

  return (
    <Layout>
      <SEO 
        title="Home"
        schema={schema}
      />

      <header className={styles.headerHome}>
        <h1>Hi, I’m Daria.</h1>
        <nav>
          <Social classes="socialIconsVertical"/>
        </nav>
        <h2>
          <span>&#47;&#47; software developer</span>
          <span>&#47;&#47; musician</span>
          <span>&#47;&#47; creative thinker</span>
        </h2>
        <StaticImage
          className={styles.heroImage}
          src="../data/images/daria-tsvetkova.png"
          quality={100}
          loading="eager"
          placeholder="tracedSVG"
          objectFit="contain"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Daria Tsvetkova, web developer and musician from Toronto"
        />
        <p className={styles.btnContainer}>
          <a className="btn" href="/#projects">
              See my projects
          </a>
        </p>
      </header>

      <main>
        <section className={`${styles.sectionHome} ${styles.about}`}>
          <h3>About Me</h3>
          <div className={styles.articleLeft}>
            <p>A friend once described me as a throwback to the Renaissance era. While not nearly so old, I do enjoy creativity in its various forms: <a className="textLink" href="https://soundcloud.com/liuthsounds" target="_blank" rel="noreferrer">music</a>, design, <a className="textLink" href="https://ko-fi.com/dariascananigans/posts" target="_blank" rel="noreferrer">creative writing</a>, and, most of all, programming.</p>
            <p>My experience with programming started in middle school computer classes, where I learned Turbo Pascal and Delphi, and built elaborate text quests, a cockroach race game, and my first functioning website with an HTML table layout.</p>
          </div>
          <div className={styles.articleRight}>
            <p>Fast forward to the 2020 pandemic: I decided to use the time in quarantine to flex my programming muscles again and learn some modern languages. I picked up JavaScript, built a couple of websites, and watched a growing number of people use them every day. I learned that web development was an apt way to channel my creativity into useful products.</p>
            <p>Currently, I am working as a Full-Stack Developer at <a className="textLink" href="http://codebusters.ca/" target="_blank" rel="noreferrer">Code Busters</a>, where I build web applications and contribute to developer education materials focused on React and Firebase.</p>
          </div>
        </section>

        <section className={`${styles.sectionHome} ${styles.skills}`}>
          <h3>Skills</h3>
          <p>I am a self-taught developer. I gained my knowledge through courses on Lynda, freeCodeCamp, YouTube and other platforms. I am also lucky to have been mentored by senior developers from my network who guided my learning process and reviewed my code.</p>
          <ul>
            <li>HTML</li>
            <li>CSS, Scss</li>
            <li>styled-components</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Gatsby.js</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>Git & GitHub</li>
            <li>WordPress</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Google Analytics</li>
            <li>Search Engine Optimization</li>
          </ul>
        </section>

        <section id="projects" className={`${styles.sectionHome} ${styles.projects}`}>
          <h3>Projects</h3>
          <ProjectIndex 
            projects={data.allProjects.edges.filter(project => {
              return !(!project.node.slug)
            })}
            images={data.allImages.edges}
          />
        </section>

        <section className={`${styles.sectionHome} ${styles.projects} ${styles.wip}`}>
          <h3>Work in Progress</h3>
          <ProjectIndex
            projects={data.allProjects.edges.filter(project => {
              return !project.node.slug
            })}
            images={data.allImages.edges}
          />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query projectsQuery {
    allProjects: allProjectsJson(
      sort: { order: ASC, fields: number }
    ) {
      edges {
        node {
          slug
          number
          title
          descr
          tags
        }
      }
    }
    allImages: allImageSharp(filter: {original: {src: {regex: "/home/"}}}) {
      edges {
        node {
          gatsbyImageData(
            aspectRatio: 1.6129
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
          )
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }  
  }
`
