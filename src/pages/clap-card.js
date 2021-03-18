import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/page.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const ClapCard = () => (
  <Layout>
    <SEO title="Clap Card project info" />

    <header className={styles.headerPage}>
      <nav>
        <Link className="textLink" to="/"><span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>Back</Link>      
      </nav>
      <p className={styles.numHeader}>03</p>
      <h1>Clap Card</h1>
    </header>

    <main>
      <section className={`${styles.sectionPage} ${styles.projectDescr}`}>
        <p>ClapCard is an interactive online birthday card that activates when a user claps their hands.</p>
        <div className={styles.column}>
          <h5>My role</h5>
          <p>Idea, design and development</p>
        </div>
        <div className={styles.column}>
          <h5>Stack</h5>
          <div>
            <span className="stackTag">JavaScript</span>
            <span className="stackTag">HTML</span>
            <span className="stackTag">CSS</span>
            <span className="stackTag">Web Audio API</span>
          </div>
        </div>
        <div className={styles.column}>
          <h5>Links</h5>
          <p><a className="textLink" href="https://github.com/dariatsvetkova/clapcard" target="_blank" rel="noreferrer">View code</a></p>
          <p><a className="textLink" href="https://youtu.be/09y7xGG3jWk" target="_blank" rel="noreferrer">View a video demo</a></p>
        </div>

        <iframe className={`${styles.video} ${styles.heroImage}`}
          src="https://www.youtube-nocookie.com/embed/09y7xGG3jWk?rel=0"
          title="Clap Card project demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen
        />
      </section>

      <section className={`${styles.sectionPage} ${styles.projectDetails}`}>
        <article>
          <h3>Why I built it</h3>
          <p>With the COVID pandemic disrupting the international postal service, I could not send a physical birthday card to someone and decided to build a website to use as a birthday card instead. I had a week to come up with something simple but delightful. I decided that clapping hands to interact with a website would provide the needed wow-effect for the recipient and a fun technical challenge for me.</p>
        </article>
        <article>
          <h3>Stack choice</h3>
          <p>I used JavaScript and Web Audio API to process the microphone input and identify clap sounds in real-time.</p>
        </article>
        <article>
          <h3>Challenges</h3>
          <p>I did a lot of research across MDN, GitHub and StackOverflow to find a way to access a user's microphone and analyze the sounds. My first instinct was to reach for a library, but none of the solutions I found worked on the client-side. I then discovered the browsers’ built-in Web Audio API and used it to write a script that approximated sound waves’ shape to identify claps.</p>
        </article>
        <article>
          <h3>Lessons learned</h3>
          <p>This project has tested my limits in creative problem solving and learning new technology in a short time. My solution is not 100% precise and doesn’t work on mobile due to the way phone microphones compress audio, but the project goal was achieved. Most importantly, the card recipient loved it!</p>
        </article>
      </section>

      <nav className={styles.prevNext}>
        <Link className={`textLink ${styles.prev}`} to="/game-of-15">
          <span className={`icon ${styles.arrow}`}><BsArrowLeft /></span>
          Previous project
        </Link>
        <Link className={`textLink ${styles.next}`} to="/tap-tempo">
          Next project
          <span className={`icon ${styles.arrow}`}><BsArrowRight /></span>
        </Link>
      </nav>
    </main>
  </Layout>
);

export default ClapCard;