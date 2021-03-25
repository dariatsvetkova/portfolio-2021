import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/project.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const ProjectTemplate = ({ pageContext, data }) => {

  const project = pageContext.project
  console.log("project: ", project)

  return (
    <Layout>
      <SEO title={`${project.title} project info`} />

      <header className={styles.headerPage}>
        <nav>
          <Link className="textLink" to="/"><span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>Back</Link>
        </nav>
        <p className={styles.numHeader}>{project.number < 10 ? "0" + project.number : project.number}</p>
        <h1>{project.title}</h1>
      </header>

      <main>
        <section className={`${styles.sectionPage} ${styles.projectDescr}`}>
          <p>{project.descr}</p>
          <div className={styles.column}>
            <h5>My role</h5>
            <p>{project.role}</p>
          </div>
          <div className={styles.column}>
            <h5>Stack</h5>
            <div>
              {project.tags.map((tag, index) => 
                <span key={index} className="stackTag">{tag}</span>
              )}
            </div>
          </div>
          <div className={styles.column}>
            <h5>Links</h5>
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
          {project.heroImg && 
            <GatsbyImage
              className={styles.heroImage}
              image={getImage(data.heroImg)}
              alt={`${project.title} project screenshot`}
            />
          }
          {project.embed &&
            <iframe className={`${styles.video} ${styles.heroImage}`}
            src={project.embed}
            title={`${project.title} project demo`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowfullscreen
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

        {/* <section className={styles.screenshotContainer}>
          <div className={styles.screenshotsLeft}>
          </div>
          <div className={styles.screenshotsRight}>
          </div>
        </section> */}

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
                <span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>
                Previous project
            </Link>
          }
          {project.next && 
            <Link className={`textLink ${styles.next}`} to={project.next}>
                Next project
                <span className={`icon ${styles.arrow}`}><BsArrowRight /></span>
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
          quality: 95
        )
      }
    }
  }
`
