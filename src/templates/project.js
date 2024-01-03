import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/project.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArrowLeft, ArrowRight } from "../components/icons"

const ProjectTemplate = ({ pageContext, data }) => {

  const project = pageContext.project
  let shortSlug = project.slug.slice(1)

  const screenshots = data.screenshots.edges.filter(image => {
    let path = image.node.parent.relativePath.split("/")[0]
    return path === shortSlug
  })

  const projectClass = styles[shortSlug]

  return (
    <Layout>
      <Seo title={`${project.title} Project Info`} />

      <header className={styles.headerPage}>
        <nav>
          <Link className="textLink" to="/">
            <span className={`icon ${styles.arrow}`}>
              <ArrowLeft />
            </span>
            Back
          </Link>
        </nav>
        <p className={styles.numHeader}>{project.number < 10 ? "0" + project.number : project.number}</p>
        <h1>{project.title}</h1>
      </header>

      <main className={projectClass}>
        <section className={`${styles.sectionPage} ${styles.projectDescr}`}>
          <p>{project.descr}</p>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>My role</h2>
            <p>
              {project.role}
              {project.team &&
                <>
                  {' '}
                  {project.team.map((mate, index) => {
                    return (
                      <>
                        {index > 0 && <span>, </span>}
                        <a 
                          key={`mate-${index}`}
                          className="textLink"
                          href={mate.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {mate.name}
                        </a>
                      </>
                    );
                  }
                  )}
                </>
              }
            </p>
          </div>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Stack</h2>
            <div>
              {project.tags.map((tag, index) => 
                <span key={`stack-${index}`} className="stackTag">{tag}</span>
              )}
            </div>
          </div>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Links</h2>
            <p>
              <a 
                className="textLink" 
                href={project.urls.code} 
                target="_blank" 
                rel="noreferrer"
              >
                View code
              </a>
            </p>
            {project.urls.live && 
              <p>
                <a 
                  className="textLink" 
                  href={project.urls.live}
                  target="_blank" 
                  rel="noreferrer"
                >
                  View live
                </a>
              </p>
            }
          </div>
          {data.heroImg && 
            <GatsbyImage
              className={styles.heroImage}
              image={getImage(data.heroImg)}
              loading="eager"
              alt={`${project.title} project screenshot`}
            />
          }
          {project.embed &&
            <iframe className={`${styles.video} ${styles.heroImage}`}
            src={project.embed}
            title={`${project.title} project demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            />
          }
        </section>

        <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
          <article>
            <h3>Why I built it</h3>
            <p>{project.why}</p>
          </article>
          {project.stack && 
            <article>
              <h3>Stack choice</h3>
              <p>{project.stack}</p>
            </article>          
          }
        </section>

        {screenshots.length > 0 &&
          <section className={styles.screenshotContainer}>
            {screenshots.map(screenshot => {

              const classes = `
                ${styles.screenshot}
                ${screenshot.node.parent.relativePath.match(/-mob/) ? styles.screenshotMob : ""}
                ${screenshot.node.parent.relativePath.match(/-large/) ? styles.screenshotLarge : ""}
              `
              return (
                <GatsbyImage
                  key={screenshot.node.parent.relativePath}
                  className={classes}
                  image={getImage(screenshot.node)}
                  loading="eager"
                  alt={`${project.title} project screenshot`}
                />
              )
            })}
          </section>
        }

        <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
          <article>
            <h3>Challenges</h3>
            <p>{project.challenges}</p>
          </article>
          <article>
            <h3>Lessons learned</h3>
            <p>{project.lessons}</p>
          </article>
        </section>

        <nav className={styles.prevNext}>
          {project.previous && 
            <Link className={`textLink ${styles.prev}`} to={project.previous}>
                <span className={styles.arrow}>
                  <ArrowLeft />
                </span>
                Previous project
            </Link>
          }
          {project.next && 
            <Link className={`textLink ${styles.next}`} to={project.next}>
                Next project
                <span className={styles.arrow}>
                  <ArrowRight />
                </span>
            </Link>
          }
        </nav>
      </main>
    </Layout>
  )
}

export default ProjectTemplate;

export const data = graphql`
  query($slug: String!) {
    heroImg: file(
      relativePath: { regex: "/hero/" },
      relativeDirectory: {eq: $slug}
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 100
        )
      }
    }
    screenshots: allImageSharp(filter: {original: {src: {regex: "/screen-/"}}}) {
      edges {
        node {
          gatsbyImageData(
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
