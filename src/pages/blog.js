import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArrowLeft } from "../components/icons";

const Blog = () => (
  <Layout>
    <Seo title="Blog coming soon..." />
    <article
      style={{
        padding: "3em",
      }}
    >
      <Link className="textLink" to="/">
        <span className="icon" style={{ marginRight: "1.5em",}}>
          <ArrowLeft />
        </span>
        Back
      </Link>
      <h1>Blog is coming soon!</h1>
      <p>In the meantime, you can see what I'm up to on <a className="textLink" href="https://www.linkedin.com/in/daria-tsvetkova/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
    </article>
  </Layout>
);

export default Blog;