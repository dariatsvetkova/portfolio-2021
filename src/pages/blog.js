import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog coming soon..." />
    <Link to="/">Back</Link>
    <h1>Blog is coming soon!</h1>
    <p>In the meantime, you can see what I'm up to on <a href="https://twitter.com/daria_tsss" target="_blank">Twitter</a>.</p>
  </Layout>
);

export default Blog;