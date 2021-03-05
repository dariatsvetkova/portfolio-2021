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

import "./layout.css"
import Social from './social'

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
      {children}
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <h3>Let’s connect</h3>
        <p>You made it all the way to the footer! I’m flattered. But you don’t have to stop here — let’s connect on social media!</p>
        <Social />
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
