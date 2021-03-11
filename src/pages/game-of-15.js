import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/page.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const GameOf15 = () => (
  <Layout>
    <SEO title="Game of Fifteen project info" />

    <div className="page-container game-of-15">
      <header>
        <nav>
          <Link className="text-link" to="/"><span className="icon"><BsArrowLeft /></span>Back</Link>
        </nav>
        <p className="num-header">02</p>
        <h1>Game of Fifteen</h1>
      </header>

      <main>
        <section className="project-descr">
          <p>Classic 15 puzzle with modern neomorphic design, a dark mode, and multiple interaction methods that resemble the physical puzzle.</p>
          <div className="column">
            <h5>My role</h5>
            <p>Design and development</p>
          </div>
          <div className="column">
            <h5>Stack</h5>
            <div className="stack-tags">
              <span className="stack-tag">JavaScript</span>
              <span className="stack-tag">HTML</span>
              <span className="stack-tag">Scss</span>
            </div>
          </div>
          <div className="column">
            <h5>Links</h5>
            <p><a className="text-link" href="https://github.com/dariatsvetkova/gameof15" target="_blank" rel="noreferrer">View code</a></p>
            <p><a className="text-link" href="https://gameof15.com/" target="_blank" rel="noreferrer">View live</a></p>
          </div>
          <StaticImage
            className="hero-image"
            src="../images/gameof15-screen-1.png"
            placeholder="blurred"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Game of Fifteen web app screenshot"
          />
        </section>

        <section className="project-details">
          <article>
            <h3>Why I built it</h3>
            <p>This is a portfolio project that I built to showcase my JavaScript skills. For an added challenge, I decided to use the trending neomorphic style that creates a resemblance to the physical puzzle but maintains a modern look and feel.</p>
          </article>
          <article>
            <h3>Stack choice</h3>
            <p>I chose vanilla JavaScript for this project in order to consolidate my knowledge of its core concepts. Scss was used to make the styles more manageable across the project, including its dark and light modes.</p>
          </article>
        </section>

        <section className="screenshot-container">
          <StaticImage
            className="screenshot"
            src="../images/gameof15-screen-2.png"
            placeholder="blurred"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Game of Fifteen web app screenshot"
          />
          <StaticImage
            className="screenshot"
            src="../images/gameof15-screen-3.png"
            placeholder="blurred"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Game of Fifteen web app screenshot"
          />
          <StaticImage
            className="screenshot"
            src="../images/gameof15-screen-4.png"
            placeholder="blurred"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Game of Fifteen web app screenshot"
          />
        </section>

        <section className="project-details">
          <article>
            <h3>Challenges</h3>
            <p>One of the hidden challenges of this project was supporting the “tactile” feel in the different ways in which users move the tiles. By testing it on real users, I noticed that some tried to drag the tiles with their mouse; others tried to swipe them on a touch screen, yet others just clicked on them. I made sure that the game supported all of those interactions and worked with a keyboard for accessibility.</p>
          </article>
          <article>
            <h3>Lessons learned</h3>
            <p>In addition to cementing my knowledge of JavaScript, this project challenged my design skills and allowed me to implement complex visual elements with the help of Scss.</p>
          </article>
        </section>

        <nav className="prev-next">
          <Link className="text-link prev" to="/paintr">
            <span className="icon"><BsArrowLeft /></span>
            Previous project
          </Link>
          <Link className="text-link next" to="/clap-card">
            Next project
            <span className="icon"><BsArrowRight /></span>
          </Link>
        </nav>
      </main>
    </div>
  </Layout>
);

export default GameOf15;