import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <article
      style={{
        padding: "0 3em 3em 3em",
      }}
    >
      <h1>404: Not Found</h1>
      <p>Looks like you took a wrong turn.</p>
        <Link to="/">
          <button>Take me Home</button>
        </Link>
    </article>
  </Layout>
)

export default NotFoundPage
