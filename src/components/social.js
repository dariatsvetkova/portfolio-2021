import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import * as styles from '../styles/social.module.scss'

const Social = (props) => {

  return (
    <ul className={`${styles.socialIcons} ${styles[props.classes] || ""}`}>
      <li>
        <a 
          aria-label="Link to Twitter profile"
          href="https://twitter.com/daria_tsss"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle aria-label="Twitter icon" />
        </a>
      </li>
      <li>
        <a
          aria-label="Link to LinkedIn profile"
          href="https://www.linkedin.com/in/daria-tsvetkova/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin aria-label="LinkedIn icon" />
        </a>
      </li>
      <li>
        <a 
          aria-label="Link to GitHub profile"
          href="https://github.com/dariatsvetkova/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub aria-label="Github icon" />
        </a>
      </li>
    </ul>
  )
}

export default Social;