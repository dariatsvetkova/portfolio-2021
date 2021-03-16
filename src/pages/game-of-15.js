import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/page.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const GameOf15 = () => (
  <Layout>
    <SEO title="Game of Fifteen project info" />

    <header className={styles.headerPage}>
      <nav>
        <Link className="textLink" to="/"><span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>Back</Link>
      </nav>
      <p className={styles.numHeader}>02</p>
      <h1>Game of Fifteen</h1>
    </header>

    <main>
      <section className={`${styles.sectionPage} ${styles.projectDescr}`}>
        <p>Classic 15 puzzle with modern neomorphic design, a dark mode, and multiple interaction methods that resemble the physical puzzle.</p>
        <div className={styles.column}>
          <h5>My role</h5>
          <p>Design and development</p>
        </div>
        <div className={styles.column}>
          <h5>Stack</h5>
          <div className={styles.stackTags}>
            <span className="stackTag">JavaScript</span>
            <span className="stackTag">HTML</span>
            <span className="stackTag">Scss</span>
          </div>
        </div>
        <div className={styles.column}>
          <h5>Links</h5>
          <p><a className="textLink" href="https://github.com/dariatsvetkova/gameof15" target="_blank" rel="noreferrer">View code</a></p>
          <p><a className="textLink" href="https://gameof15.com/" target="_blank" rel="noreferrer">View live</a></p>
        </div>
        <StaticImage
          className={styles.heroImage}
          src="../images/gameof15-screen-1.png"
          placeholder="blurred"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Game of Fifteen web app screenshot"
        />
      </section>

      <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
        <article>
          <h3>Why I built it</h3>
          <p>This is a portfolio project that I built to showcase my JavaScript skills. For an added challenge, I decided to use the trending neomorphic style that creates a resemblance to the physical puzzle but maintains a modern look and feel.</p>
        </article>
        <article>
          <h3>Stack choice</h3>
          <p>I chose vanilla JavaScript for this project in order to consolidate my knowledge of its core concepts. Scss was used to make the styles more manageable across the project, including its dark and light modes.</p>
        </article>
      </section>

      <section className={styles.screenshotContainer}>
        <div className={styles.screenshotsLeft}>
          <StaticImage
            className={styles.screenshot}
            src="../images/gameof15-screen-2.png"
            placeholder="blurred"
            objectFit="contain"
            aspectRatio={1920/2192}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Game of Fifteen web app screenshot"
          />
        </div>
        <div className={styles.screenshotsRight}>
          <StaticImage
            className={styles.screenshot}
            src="../images/gameof15-screen-3.png"
            placeholder="blurred"
            objectFit="contain"
            aspectRatio={1920/2192}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Game of Fifteen web app screenshot"
          />
        </div>
        <StaticImage
          className={`${styles.screenshot} ${styles.screenshotMob}`}
          src="../images/gameof15-screen-4.png"
          placeholder="blurred"
          objectFit="contain"
          aspectRatio={1}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Game of Fifteen web app screenshot"
        />
      </section>

      <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
        <article>
          <h3>Challenges</h3>
          <p>One of the hidden challenges of this project was supporting the “tactile” feel in the different ways in which users move the tiles. By testing it on real users, I noticed that some tried to drag the tiles with their mouse; others tried to swipe them on a touch screen, yet others just clicked on them. I made sure that the game supported all of those interactions and worked with a keyboard for accessibility.</p>
        </article>
        <article>
          <h3>Lessons learned</h3>
          <p>In addition to cementing my knowledge of JavaScript, this project challenged my design skills and allowed me to implement complex visual elements with the help of Scss.</p>
        </article>
      </section>

      <nav className={styles.prevNext}>
        <Link className={`textLink ${styles.prev}`} to="/paintr">
          <span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>
          Previous project
        </Link>
        <Link className={`textLink ${styles.next}`} to="/clap-card">
          Next project
          <span className={`icon ${styles.arrow}`}><BsArrowRight /></span>
        </Link>
      </nav>
    </main>
  </Layout>
);

export default GameOf15;