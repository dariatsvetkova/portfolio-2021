import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GameOf15 = () => (
  <Layout>
    <SEO title="Game of Fifteen project info" />
    <Link to="/">Back</Link>
    <p className="num-header">02</p>
    <h1>Game of Fifteen</h1>
    <p>Classic 15 puzzle with modern neomorphic design, a dark mode, and multiple interaction methods that resemble the physical puzzle.</p>
    <div className="column-container">
      <div className="column">
        <h5>My role</h5>
        <p>Design and development</p>
      </div>
      <div className="column">
        <h5>Stack</h5>
        <div className="stack-tags">
          <span>JavaScript</span>
          <span>HTML</span>
          <span>Scss</span>
        </div>
      </div>
      <div className="column">
        <h5>Links</h5>
        <a href="https://github.com/dariatsvetkova/gameof15" target="_blank" rel="noreferrer">View code</a>
        <a href="https://gameof15.com/" target="_blank" rel="noreferrer">View live</a>
      </div>
    </div>
    <StaticImage
      className="hero-image"
      src="../images/gameof15-screen-1.png"
      placeholder="blurred"
      width={900}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Game of Fifteen web app screenshot"
    />

    <article>
      <h3>Why I built it</h3>
      <p>This is a portfolio project that I built to showcase my JavaScript skills. For an added challenge, I decided to use the trending neomorphic style that creates a resemblance to the physical puzzle but maintains a modern look and feel.</p>
      <h3>Stack choice</h3>
      <p>I chose vanilla JavaScript for this project in order to consolidate my knowledge of its core concepts. Scss was used to make the styles more manageable across the project, including its dark and light modes.</p>

      <div className="screenshot-container" style={{ "width": "100%" }}>
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
      </div>

      <h3>Challenges</h3>
      <p>One of the hidden challenges of this project was supporting the “tactile” feel in the different ways in which users move the tiles. By testing it on real users, I noticed that some tried to drag the tiles with their mouse; others tried to swipe them on a touch screen, yet others just clicked on them. I made sure that the game supported all of those interactions and worked with a keyboard for accessibility.</p>
      <h3>Lessons learned</h3>
      <p>In addition to cementing my knowledge of JavaScript, this project challenged my design skills and allowed me to implement complex visual elements with the help of Scss.</p>
    </article>
    <Link to="/clap-card">Next project</Link>
    <Link to="/paintr">Previous project</Link>
  </Layout>
);

export default GameOf15;