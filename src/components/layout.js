import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"


import "../styles/resets.scss"
import "../styles/global.scss"
import * as styles from "../styles/layout.module.scss"

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
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <p className={styles.footerH3}>Let’s connect</p>
            <p>You made it all the way to the footer! I’m flattered. But you don’t have to stop here — let’s connect on social media!</p>
            <Social classes={false}/>
          </div>
          <div className={styles.footerLine} />
          <nav className={styles.footerRight}>
            <ul>
              <li>
                <Link className={styles.footerH3} to="/">Home</Link>
              </li>
              <li>
                <a className={styles.footerH3} href="/#projects">Projects</a>
              </li>
              <li>
                <Link to="/paintr/">Paintr</Link>
              </li>
              <li>
                <Link to="/game-of-15/">Game of Fifteen</Link>
              </li>
              <li>
                <Link to="/clap-card/">Clap Card</Link>
              </li>
              <li>
                <Link to="/tap-tempo/">Tap Tempo</Link>
              </li>
            </ul>
          </nav>
        </div>
        <small>© Daria Tsvetkova {new Date().getFullYear()}</small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
