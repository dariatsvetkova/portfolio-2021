import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/page.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const Paintr = () => (
  <Layout>
    <SEO title="Paintr project info" />

    <header className={styles.headerPage}>
      <nav>
        <Link className="textLink" to="/"><span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>Back</Link>
      </nav>
      <p className={styles.numHeader}>01</p>
      <h1>Paintr</h1>
    </header>

    <main>
      <section className={`${styles.sectionPage} ${styles.projectDescr}`}>
        <p>Paintr is a web app that generates colour schemes for websites, applies them to a demo website and provides CSS code for the perfect colour scheme.</p>
        <div className={styles.column}>
          <h5>My role</h5>
          <p>Idea, design and development</p>
        </div>
        <div className={styles.column}>
          <h5>Stack</h5>
          <div className={styles.stackTags}>
            <span className="stackTag">React</span>
            <span className="stackTag">JavaScript</span>
            <span className="stackTag">HTML</span>
            <span className="stackTag">CSS</span>
          </div>
        </div>
        <div className={styles.column}>
          <h5>Links</h5>
          <p><a className="textLink" href="https://github.com/dariatsvetkova/paintr" target="_blank" rel="noreferrer">View code</a></p>
          <p><a className="textLink" href="https://www.paintr.io" target="_blank" rel="noreferrer">View live</a></p>
        </div>
        <StaticImage
          className={styles.heroImage}
          src="../images/paintr-screen-1.png"
          placeholder="blurred"
          objectFit="contain"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
        />
      </section>

      <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
        <article>
          <h3>Why I built it</h3>
          <p>There are a lot of tools out there that generate colour palettes. But unless you have an eye for graphic design, it is not always obvious how to properly apply a colour palette to a website. This is why I created this tool. It combines a palette generator with a mockup of a generic web page to demonstrate which colours go where. It can be used by everyone, regardless of their experience with design or coding.</p>
        </article>
        <article>
          <h3>Stack choice</h3>
          <p>React was an obvious choice for this project because it allows passing the generated colours as state to multiple components on the page. It also easily allows you to style all elements of the demo page within the component. A third-party library color-name-list was used to convert user input from colour names into hex values.</p>
          <p>The project was created with create-react-app and is hosted on Github Pages, allowing for live updates and testing via Github Actions.</p>
        </article>
      </section>

      <section className={styles.screenshotContainer}>
        <StaticImage
          className={styles.screenshot}
          src="../images/paintr-screen-2.png"
          placeholder="blurred"
          objectFit="scale-down"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
          style={{
            flex: "0 1 80vh",
            maxWidth: "content",
          }}
        />
        <StaticImage
          className={`${styles.screenshot} ${styles.screenshotMob}`}
          src="../images/paintr-screen-3.png"
          placeholder="blurred"
          objectFit="contain"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
          style={{
            // width: "auto",
            flex: "0 1 20vh",
          }}
        />
        <StaticImage
          className={styles.screenshot}
          src="../images/paintr-screen-4.png"
          placeholder="blurred"
          objectFit="contain"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
          style={{
            // width: "auto",
            flex: "0 1 20vh",
            marginLeft: "10vw",
          }}
        />
        <StaticImage
          className={styles.screenshot}
          src="../images/paintr-screen-5.png"
          placeholder="blurred"
          objectFit="contain"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
          style={{
            // width: "auto",
            flex: "0 1 20vh"
          }}
        />
      </section>

      <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
        <article>
          <h3>Challenges</h3>
          <p>For this project, I decided to write a palette generator from scratch to fulfill the requirements specific for website colour schemes: unlike other colour palettes, they contain only two to three “colourful” colours, and the rest are neutral colours that balance them. Another complexity was enforcing the WCAG contrast requirements to ensure that the resulting colour schemes meet accessibility standards.</p>
        </article>
        <article>
          <h3>Lessons learned</h3>
          <p>This project was a great practice in React core concepts and Hooks. I also took a deep dive into colour theory, different colour formats used on the web, and web design principles. Finally, I got to practise using version control, and learned about implementing a Github Actions workflow.</p>
        </article>
      </section>

      <nav className={styles.prevNext}>
        <Link className={`textLink ${styles.next}`} to="/game-of-15">
            Next project
            <span className={`icon ${styles.arrow}`}><BsArrowRight /></span>
        </Link>
      </nav>
    </main>
  </Layout>
)

export default Paintr;
