import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/index.scss";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import clapCard from "../images/clapcard-home.gif"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="home-container">
      <header>
        <h1>Hi, I’m Daria.</h1>
        <nav>
          <Social classes="social-icons-vertical"/>
        </nav>
        <h2>
          <span>&#47;&#47; front-end developer</span>
          <span>&#47;&#47; musician</span>
          <span>&#47;&#47; creative thinker</span>
        </h2>
        <StaticImage
          className="hero-image"
          src="../images/daria-tsvetkova.png"
          placeholder="blurred"
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Daria Tsvetkova, web developer and musician from Toronto"
          style={{ marginBottom: `1.45rem` }}
        />
        <p className="btn-container">
          <a className="btn" href="/#projects">
              See my projects
          </a>
        </p>
      </header>

      <main>
        <section className="about">
          <h3>About Me</h3>
          <div className="article-left">
            <p>A friend once described me as a throwback to the Renaissance era. While not nearly so old, I do enjoy creativity in its various forms: <a className="text-link" href="https://soundcloud.com/liuthsounds" target="_blank" rel="noreferrer">music</a>, design, <a className="text-link" href="https://ko-fi.com/dariascananigans/posts" target="_blank" rel="noreferrer">creative writing</a>, and, most of all, programming.</p>
            <p>My experience with programming started in middle school computer classes, where I learned languages such as Turbo Pascal and Delphi, and built elaborate text quests, a cockroach race game, and my first functioning website with an HTML table layout.</p>
          </div>
          <div className="article-right">
            <p>Fast forward to the 2020 pandemic: I decided to use the time in quarantine to flex my programming muscles again and learn some modern languages. I picked up JavaScript, built a couple of websites, and watched a growing number of people use them every day. I learned that web development was an apt way to channel my creativity into useful products.</p>
            <p>Currently, I am <a className="text-link" href="https://www.linkedin.com/in/daria-tsvetkova/" target="_blank" rel="noreferrer">looking for full-time opportunities</a> in front-end development. I’m eager to learn from experienced developers and to apply my skills to help the right business grow.</p>
          </div>
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <p>I am a self-taught developer. I gained my knowledge through courses on Lynda, freeCodeCamp, YouTube and other platforms. I am also lucky to have been mentored by senior developers from my network who guided my learning process and reviewed my code.</p>
          <ul>
            <div>
              <li>HTML</li>
              <li>CSS</li>
              <li>Scss</li>
              <li>JavaScript</li>
            </div>
            <div>
              <li>React</li>
              <li>Node.js</li>
              <li>Version control, Git & GitHub</li>
              <li>WordPress</li>
            </div>
            <div>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>Google Analytics</li>
              <li>Search Engine Optimization</li>
            </div>
          </ul>
        </section>

        <section id="projects" className="projects">
          <h3>Projects</h3>
          <ul>

            <li className="project-card">
              <Link to="/paintr/" className="project-container">
                <small className="num-card">01</small>
                <h4>Paintr</h4>
                <StaticImage
                  className="project-img"
                  src="../images/paintr-home.png"
                  placeholder="blurred"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Paintr web app screenshot"
                />
                <p className="descr">A web app that generates colour schemes for websites, applies them to a demo website and provides CSS code for the perfect colour scheme. <span className="text-link">Learn more</span></p>
                <div className="stack-tags">
                  <span className="stack-tag">React</span>
                  <span className="stack-tag">JavaScript</span>
                  <span className="stack-tag">HTML</span>
                  <span className="stack-tag">CSS</span>
                </div>
              </Link>
            </li>

            <li className="project-card">
              <Link to="/game-of-15/" className="project-container">
                <small className="num-card">02</small>
                <h4>Game of Fifteen</h4>
                <StaticImage
                  className="project-img"
                  src="../images/gameof15-home.png"
                  placeholder="blurred"
                  // width={300}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Online Game of Fifteen screenshot"
                />
                <p>Classic 15 puzzle with modern neomorphic design, a dark mode, and multiple interaction methods that resemble the physical puzzle. <span className="text-link">Learn more</span></p>
                <div className="stack-tags">
                  <span className="stack-tag">JavaScript</span>
                  <span className="stack-tag">HTML</span>
                  <span className="stack-tag">Scss</span>
                </div>
              </Link>
            </li>

            <li className="project-card">
              <Link to="/clap-card/" className="project-container">
                <small className="num-card">03</small>
                <h4>Clap Card</h4>
                <div className="project-img">
                  <img 
                    src={clapCard} 
                    alt="Clap Card project demo"
                    style={{
                      maxWidth: '700px',
                      margin: '0',
                    }}
                  />
                </div>
                <p>An interactive online birthday card that activates when a user claps their hands. <span className="text-link">Learn more</span></p>
                <div className="stack-tags">
                  <span className="stack-tag">JavaScript</span>
                  <span className="stack-tag">HTML</span>
                  <span className="stack-tag">CSS</span>
                  <span className="stack-tag">Web Audio API</span>
                </div>
              </Link>
            </li>

            <li className="project-card">
              <Link to="/tap-tempo/" className="project-container">
                <small className="num-card">04</small>
                <h4>Tap Tempo</h4>
                <StaticImage
                  className="project-img"
                  src="../images/taptempo-home.png"
                  placeholder="blurred"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Tap Tempo website screenshot"
                />
                <p>A beats-per-minute calculator with a colourful design, used by hundreds of music professionals every month. <span className="text-link">Learn more</span></p>
                <div className="stack-tags">
                  <span className="stack-tag">JavaScript</span>
                  <span className="stack-tag">jQuery</span>
                  <span className="stack-tag">HTML</span>
                  <span className="stack-tag">CSS</span>
                  <span className="stack-tag">SVG graphics</span>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </Layout>
)

export default IndexPage
