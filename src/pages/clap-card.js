import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClapCard = () => (
  <Layout>
    <SEO title="Clap Card project info" />

    <header>
      <nav>
        <Link to="/">Back</Link>      
      </nav>
      <p className="num-header">03</p>
      <h1>Clap Card</h1>
    </header>

    <main>
      <section>
        <p>ClapCard is an interactive online birthday card that activates when a user claps their hands.</p>
        <div className="column-container">
          <div className="column">
            <h5>My role</h5>
            <p>Idea, design and development</p>
          </div>
          <div className="column">
            <h5>Stack</h5>
            <div className="stack-tags">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Web Audio API</span>
            </div>
          </div>
          <div className="column">
            <h5>Links</h5>
            <a href="https://github.com/dariatsvetkova/clapcard" target="_blank" rel="noreferrer">View code</a>
            <a href="https://youtu.be/09y7xGG3jWk" target="_blank" rel="noreferrer">View a video demo</a>
          </div>
        </div>

        <div className="video">
          <iframe
            src="https://youtu.be/09y7xGG3jWk"
            title="Clap Card video demo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
        </div>
      </section>

      <article>
        <h3>Why I built it</h3>
        <p>With the COVID pandemic disrupting the international postal service, I could not send a physical birthday card to someone and decided to build a website to use as a birthday card instead. I had a week to come up with something simple but delightful. I decided that clapping hands to interact with a website would provide the needed wow-effect for the recipient and a fun technical challenge for me.</p>
        <h3>Stack choice</h3>
        <p>I used JavaScript and Web Audio API to process the microphone input and identify clap sounds in real-time.</p>
        <h3>Challenges</h3>
        <p>I did a lot of research across MDN, GitHub and StackOverflow to find a way to access a user's microphone and analyze the sounds. My first instinct was to reach for a library, but none of the solutions I found worked on the client-side. I then discovered the browsers’ built-in Web Audio API and used it to write a script that approximated sound waves’ shape to identify claps.</p>
        <h3>Lessons learned</h3>
        <p>This project has tested my limits in creative problem solving and learning new technology in a short time. My solution is not 100% precise and doesn’t work on mobile due to the way phone microphones compress audio, but the project goal was achieved. Most importantly, the card recipient loved it!</p>
      </article>
      <Link to="/tap-tempo">Next project</Link>
      <Link to="/game-of-15">Previous project</Link>
    </main>
  </Layout>
);

export default ClapCard;