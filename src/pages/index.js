import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ProjectIndex from "../components/projectIndex"

import * as styles from "../styles/index.module.scss";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/social"
import Carousel from "../components/carousel";

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
      <Seo 
        title="Home"
        schema={schema}
      />

      <header className={styles.headerHome}>
        <h1>Hi, I’m Daria.</h1>
        <nav>
          <Social classes="socialIconsVertical"/>
        </nav>
        <h2>
          <span>&#47;&#47; software engineer</span>
          <span>&#47;&#47; lifelong learner</span>
          <span>&#47;&#47; privacy enthusiast</span>
        </h2>
        <StaticImage
          className={styles.heroImage}
          src="../data/images/daria-tsvetkova.png"
          quality={100}
          loading="eager"
          placeholder="tracedSVG"
          objectFit="contain"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Daria Tsvetkova, Software Engineer from Toronto, Canada"
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
            <p>In {new Date().getFullYear() - 2011} years of my professional life, I have gone from analyzing marketing data for a pharmaceutical corporation to managing well-known brands, creating digital strategies and tools and finally, building software.</p>
            <p>My education started with a degree in Chemistry; it opened opportunities in various industries that required strong analytical skills. In the following years, I pursued continuing education to support my evolving career goals. Currently, I am studying Computer Science at Toronto Metropolitan University.</p>
          </div>
          <div className={styles.articleRight}>
            <p>My main professional interest is using technology to solve business problems. As a Full Stack Engineer, I specialize in backend development with NodeJS and Python and frontend development with React and other JavaScript frameworks. I am also working on my skills in online privacy and secure handling of personal data.</p>
            <p>Both at work and in my free time, I enjoy creativity in its various forms: programming, <a className="textLink" href="https://open.spotify.com/artist/4KtK51Svc4byjd4FGqroQy" target="_blank" rel="noreferrer">music</a>, fashion, and <a className="textLink" href="https://ko-fi.com/dariascananigans/posts" target="_blank" rel="noreferrer">creative writing</a>. You can also spot me at a local chess club, embarrassingly losing to 8-year-olds.</p>
          </div>
        </section>

        <section className={`${styles.sectionHome} ${styles.recos}`}>
          <h3>My Teammates Say…</h3>
          <Carousel recos={data.allRecos.edges} />
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

        <section id="wip" className={`${styles.sectionHome} ${styles.projects} ${styles.wip}`}>
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
    allRecos: allRecommendationsJson {
      edges {
        node {
          id
          from {
            name
            relation
            company
          }
          text
        }
      }
    }
  }
`
