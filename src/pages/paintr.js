import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Paintr = () => (
  <Layout>
    <SEO title="Paintr project info" />
    <Link to="/">Back</Link>
    <p className="num-header">01</p>
    <h1>Paintr</h1>
    <p>A web app that generates colour schemes for websites, applies them to a demo website and provides CSS code for the perfect colour scheme.</p>
    <div className="column-container">
      <div className="column">
        <h5>My role</h5>
        <p>Idea, design and development</p>
      </div>
      <div className="column">
        <h5>Stack</h5>
        <div className="stack-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>
      <div className="column">
        <h5>Links</h5>
        <a href="https://github.com/dariatsvetkova/paintr" target="_blank" rel="noreferrer">View code</a>
        <a href="https://www.paintr.io" target="_blank" rel="noreferrer">View live</a>
      </div>
    </div>
    <StaticImage
      className="hero-image"
      src="../images/paintr-screen-1.png"
      placeholder="blurred"
      width={900}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Paintr web app screenshot"
    />

    <article>
      <h3>Why I built it</h3>
      <p>There are a lot of tools out there that generate colour palettes. But unless you have an eye for graphic design, it is not always obvious how to properly apply a colour palette to a website. This is why I created this tool. It combines a palette generator with a mockup of a generic web page to demonstrate which colours go where. It can be used by everyone, regardless of their experience with design or coding.</p>
      <h3>Stack choice</h3>
      <p>React was an obvious choice for this project because it allows passing the generated colours as state to multiple components on the page. It also easily allows you to style all elements of the demo page within the component. A third-party library color-name-list was used to convert user input from colour names into hex values.</p>
      <p>The project was created with create-react-app and is hosted on Github Pages, allowing for live updates and testing via Github Actions.</p>

      <div className="screenshot-container" style={{ "width": "100%" }}>
        <StaticImage
          className="screenshot"
          src="../images/paintr-screen-2.png"
          placeholder="blurred"
          width={400}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
        />
        <StaticImage
          className="screenshot"
          src="../images/paintr-screen-3.png"
          placeholder="blurred"
          width={400}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
        />
        <StaticImage
          className="screenshot"
          src="../images/paintr-screen-4.png"
          placeholder="blurred"
          width={400}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
        />
        <StaticImage
          className="screenshot"
          src="../images/paintr-screen-5.png"
          placeholder="blurred"
          width={400}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paintr web app screenshot"
        />
      </div>

      <h3>Challenges</h3>
      <p>For this project, I decided to write a palette generator from scratch to fulfill the requirements specific for website colour schemes: unlike other colour palettes, they contain only two to three “colourful” colours, and the rest are neutral colours that balance them. Another complexity was enforcing the WCAG contrast requirements to ensure that the resulting colour schemes meet accessibility standards.</p>
      <h3>Lessons learned</h3>
      <p>This project was a great practice in React core concepts and Hooks. I also took a deep dive into colour theory, different colour formats used on the web, and web design principles. Finally, I got to practise using version control, and learned about implementing a Github Actions workflow.</p>
    </article>
    <Link to="/game-of-15">Next project</Link>
  </Layout>
)

export default Paintr;
