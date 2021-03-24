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
    query SiteNavQuery {
      site {
        siteMetadata {
          navigation {
            name
            link
            subnav {
              name
              link
            }
          }
        }
      }
    }
  `)

  const menu = data.site.siteMetadata.navigation.map(item => {
    return (
      <li key={item.name}>
        <Link className={styles.footerH3} to={item.link}>{item.name}</Link>
      </li>
    )
  })

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
              {menu}
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
