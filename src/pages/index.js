import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/index.module.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/social"
import Carousel from "../components/carousel"

const IndexPage = ({ data }) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Daria Tsvetkova",
    description:
      "Daria Tsvetkova is a software engineer and artist based in Toronto, Canada.",
    url: "https://dariatsvetkova.ca/",
    image: "https://dariatsvetkova.ca/static/daria-tsvetkova-schema.jpg",
    sameAs: [
      "https://www.linkedin.com/in/daria-tsvetkova/",
      "https://open.spotify.com/artist/4KtK51Svc4byjd4FGqroQy",
      "https://dariatsvetkova.ca",
    ],
    jobTitle: "Software Engineer",
  }

  return (
    <Layout>
      <Seo title="Home" schema={schema} />

      <header className={styles.headerHome}>
        <h1>Hi, I’m Daria.</h1>
        <nav>
          <Social classes="socialIconsVertical" />
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
          <a className="btn" href="/#about-me">
            About me
          </a>
        </p>
      </header>

      <main>
        <section
          id="about-me"
          className={`${styles.sectionHome} ${styles.about}`}
        >
          <h3>About Me</h3>
          <div className={styles.articleLeft}>
            <p>
              In {new Date().getFullYear() - 2011} years of my professional
              life, I have gone from analyzing data for a pharmaceutical
              corporation to managing well-known brands and creating digital
              strategies to building software.
            </p>
            <p>
              My education started with a degree in Chemistry; it opened
              opportunities in various industries that required strong
              analytical skills. In the following years, I pursued continuing
              education to support my evolving career goals, including Computer
              Science at Toronto Metropolitan University.
            </p>
          </div>
          <div className={styles.articleRight}>
            <p>
              My main professional interest is using technology to solve
              business problems. As a Full Stack Engineer, I specialize in
              backend development with Python and NodeJS and frontend
              development with React and other JavaScript frameworks. I am a
              privacy enthusiast and a Certified Information Privacy
              Professional (CIPP/E).
            </p>
            <p>
              Both at work and in my free time, I enjoy creativity in its
              various forms: programming,{" "}
              <a
                className="textLink"
                href="https://open.spotify.com/artist/4KtK51Svc4byjd4FGqroQy"
                target="_blank"
                rel="noreferrer"
              >
                music
              </a>
              , fashion, and{" "}
              <a
                className="textLink"
                href="https://ko-fi.com/dariascananigans/posts"
                target="_blank"
                rel="noreferrer"
              >
                creative writing
              </a>
              . You can also spot me at a local chess club, embarrassingly
              losing to 8-year-olds.
            </p>
          </div>
        </section>

        <section className={`${styles.sectionHome} ${styles.recos}`}>
          <h3>My Teammates Say…</h3>
          <Carousel recos={data.allRecos.edges} />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query projectsQuery {
    allImages: allImageSharp(
      filter: { original: { src: { regex: "/home/" } } }
    ) {
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
