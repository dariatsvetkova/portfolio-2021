/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <h3>Let’s connect</h3>
          <p>You made it all the way to the footer! I’m flattered. But you don’t have to stop here — let’s connect on social media!</p>
          <div className="socialIcons">
            <a href="https://twitter.com/daria_tsss" target="_blank"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/daria-tsvetkova/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/dariatsvetkova/" target="_blank"><AiOutlineGithub /></a>
          </div>
          <nav>
            <ul>
              <li>
                <h3><Link to="/">Home</Link></h3>
              </li>
              <li>
                <h3><a href="/#projects">Projects</a></h3>
              </li>
              <li>
                <p><Link to="/paintr/">Paintr</Link></p>
              </li>
              <li>
                <p><Link to="/game-of-15/">Game of Fifteen</Link></p>
              </li>
              <li>
                <p><Link to="/clap-card/">Clap Card</Link></p>
              </li>
              <li>
                <p><Link to="/tap-tempo/">Tap Tempo</Link></p>
              </li>
            </ul>
          </nav>
          <small>© Daria Tsvetkova {new Date().getFullYear()}</small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
