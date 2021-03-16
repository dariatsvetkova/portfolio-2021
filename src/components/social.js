import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import * as styles from '../styles/social.module.scss'

const Social = (props) => {

  return (
    <ul className={`${styles.socialIcons} ${styles[props.classes] || ""}`}>
      <li>
        <a 
          aria-label="Twitter"
          href="https://twitter.com/daria_tsss"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </li>
      <li>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/daria-tsvetkova/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a 
          aria-label="GitHub"
          href="https://github.com/dariatsvetkova/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </li>
    </ul>
  )
}

export default Social;