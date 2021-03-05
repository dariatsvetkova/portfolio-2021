import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1>Hi, I’m Daria.</h1>
      <nav>
        <Social />
      </nav>
      <h2>
        <span>// front-end developer</span>
        <span>// musician</span>
        <span>// creative thinker</span>
      </h2>
      <StaticImage
        className="hero-image"
        src="../images/daria-tsvetkova.png"
        placeholder="blurred"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Daria Tsvetkova, web developer and musician from Toronto"
        style={{ marginBottom: `1.45rem` }}
      />
      <a href="/#projects">
        <button>
          See my projects
        </button>
      </a>
    </header>
    <main>
      <section>
        <h3>About Me</h3>
        <p>A friend once described me as a throwback to the Renaissance era. While not nearly so old, I do enjoy creativity in its various forms: <a href="https://soundcloud.com/liuthsounds" target="_blank" rel="noreferrer">music</a>, design, <a href="https://ko-fi.com/dariascananigans/posts" target="_blank" rel="noreferrer">creative writing</a>, and, most of all, programming.</p>
        <p>My experience with programming started in middle school computer classes, where I learned languages such as Turbo Pascal and Delphi, and built elaborate text quests, a cockroach race game, and my first functioning website with an HTML table layout.</p>
        <p>Fast forward to the 2020 pandemic: I decided to use the time in quarantine to flex my programming muscles again and learn some modern languages. I picked up JavaScript, built a couple of websites, and watched a growing number of people use them every day. I learned that web development was an apt way to channel my creativity into useful products.</p>
        <p>Currently, I am <a href="https://www.linkedin.com/in/daria-tsvetkova/" target="_blank" rel="noreferrer">looking for full-time opportunities</a> in front-end development. I’m eager to learn from experienced developers and to apply my skills to help the right business grow.</p>
      </section>
      <section>
        <h3>Skills</h3>
        <p>I am a self-taught developer. I gained my knowledge through courses on Lynda, freeCodeCamp, YouTube and other platforms. I am also lucky to have been mentored by senior developers from my network who guided my learning process and reviewed my code.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>WordPress</li>
          <li>Adobe Photoshop</li>
          <li>Figma</li>
          <li>Version control, Git & GitHub</li>
          <li>Google Analytics</li>
          <li>Search Engine Optimization</li>
        </ul>
      </section>
      <section id="projects">
        <h3>Projects</h3>
        <ul>
          <li className="project-card">
            <Link to="/paintr/" className="project-container">
              <p className="num-card">01</p>
              <h4>Paintr</h4>
              <p>A web app that generates colour schemes for websites, applies them to a demo website and provides CSS code for the perfect colour scheme.</p>
              <div className="stack-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <StaticImage
                className="project-img"
                src="../images/paintr-home.png"
                placeholder="blurred"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Paintr web app screenshot"
                style={{ borderRadius: `8px` }}
              />
            </Link>
          </li>
          <li className="project-card">
            <Link to="/game-of-15/" className="project-container">
              <p className="num-card">02</p>
              <h4>Game of Fifteen</h4>
              <p>Classic 15 puzzle with modern neomorphic design, a dark mode, and multiple interaction methods that resemble the physical puzzle.</p>
              <div className="stack-tags">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>Scss</span>
              </div>
              <StaticImage
                className="project-img"
                src="../images/gameof15-home.png"
                placeholder="blurred"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Online Game of Fifteen screenshot"
                style={{ borderRadius: `8px` }}
              />
            </Link>
          </li>
          <li className="project-card">
            <Link to="/clap-card/" className="project-container">
              <p className="num-card">03</p>
              <h4>Clap Card</h4>
              <p>An interactive online birthday card that activates when a user claps their hands.</p>
              <div className="stack-tags">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Web Audio API</span>
              </div>
              <div 
                className="project-img"
                style={{ borderRadius: `8px` }}
              >
                <img src="../images/clapcard-home.gif" alt="Clap Card project demo" />
              </div>
            </Link>
          </li>
          <li className="project-card">
            <Link to="/tap-tempo/" className="project-container">
              <p className="num-card">04</p>
              <h4>Tap Tempo</h4>
              <p>A beats-per-minute calculator with a colourful design, used by hundreds of music professionals every month.</p>
              <div className="stack-tags">
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>SVG graphics</span>
              </div>
              <StaticImage
                className="project-img"
                src="../images/taptempo-home.png"
                placeholder="blurred"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Tap Tempo website screenshot"
                style={{ borderRadius: `8px` }}
              />
            </Link>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
)

export default IndexPage
