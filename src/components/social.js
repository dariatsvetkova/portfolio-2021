import React from 'react'
import '../styles/social.scss'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Social = (props) => (
  <ul className={`social-icons ${props.classes || ""}`}>
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

export default Social;