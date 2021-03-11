import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/page.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft } from "react-icons/bs"

const TapTempo = () => (
  <Layout>
    <SEO title="Tap Tempo project info" />

    <div className="page-container tap-tempo">
      <header>
        <nav>
          <Link className="text-link" to="/"><span className="icon"><BsArrowLeft /></span>Back</Link>
        </nav>
        <p className="num-header">04</p>
        <h1>Tap Tempo</h1>
      </header>

      <main>
        <section className="project-descr">
          <p>A beats-per-minute calculator with a colourful design, used by hundreds of music professionals every month.</p>
          <div className="column">
            <h5>My role</h5>
            <p>Design and development</p>
          </div>
          <div className="column">
            <h5>Stack</h5>
            <div className="stack-tags">
              <span className="stack-tag">JavaScript</span>
              <span className="stack-tag">jQuery</span>
              <span className="stack-tag">HTML</span>
              <span className="stack-tag">CSS</span>
              <span className="stack-tag">SVG graphics</span>
            </div>
          </div>
          <div className="column">
            <h5>Links</h5>
            <p><a className="text-link" href="https://github.com/dariatsvetkova/TapTempo" target="_blank" rel="noreferrer">View code</a></p>
            <p><a className="text-link" href="https://taptempo.net/" target="_blank" rel="noreferrer">View live</a></p>
          </div>
        </section>

        <section className="project-details">
          <article>
            <h3>Why I built it</h3>
            <p>As an extension of my passion for music, I created this beats-per-minute calculator for music professionals. It identifies a song’s tempo when you tap along with it — a feature that is often used in songwriting and recording. A frequent user of BPM calculators myself, I was frustrated with the outdated, clunky interface of those available online at the time. I decided to develop my own calculator with a modern design and intuitive interface.</p>
            <p>I created music-themed illustrations and wrote a script using JavaScript and jQuery. In addition, I deployed basic SEO that brings an increasing number of users to the website each month.</p>
          </article>
        </section>

        <section className="screenshot-container">
          <StaticImage
            className="screenshot"
            src="../images/taptempo-screen-1.png"
            placeholder="blurred"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Tap Tempo web app screenshot"
          />
          <StaticImage
            className="screenshot"
            src="../images/taptempo-screen-2.png"
            placeholder="blurred"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Tap Tempo web app screenshot"
          />
        </section>

        <section className="project-details">
          <article>
            <h3>Challenges</h3>
            <p>SVG graphics were a big part of this project. I learned the caveats and limitations of this format while applying the images as a responsive CSS background.</p>
          </article>
          <article>
            <h3>Lessons learned</h3>
            <p>In this project, I learned the value of using a JavaScript library to save time on programming the common features. It has also proven that quality design is just as important in a web project as functionality.</p>
          </article>
        </section>

        <nav className="prev-next">
          <Link className="text-link prev" to="/clap-card">
            <span className="icon"><BsArrowLeft /></span>
            Previous project
          </Link>
        </nav>
      </main>
    </div>
  </Layout>
);

export default TapTempo;