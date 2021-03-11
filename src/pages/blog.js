import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BsArrowLeft } from "react-icons/bs"

const Blog = () => (
  <Layout>
    <SEO title="Blog coming soon..." />
    <article
      style={{
        padding: "3em",
      }}
    >
      <Link className="text-link" to="/">
        <span className="icon" style={{ marginRight: "1.5em",}}>
          <BsArrowLeft />
        </span>
        Back
      </Link>
      <h1>Blog is coming soon!</h1>
      <p>In the meantime, you can see what I'm up to on <a className="text-link" href="https://twitter.com/daria_tsss" target="_blank" rel="noreferrer">Twitter</a>.</p>
    </article>
  </Layout>
);

export default Blog;