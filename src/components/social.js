import React from 'react'
import '../styles/social.scss'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Social = (props) => (
  <ul className={`social-icons ${props.classes || ""}`}>
    <li>
      <a href="https://twitter.com/daria_tsss" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/daria-tsvetkova/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
    </li>
    <li>
      <a href="https://github.com/dariatsvetkova/" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
    </li>
  </ul>
)

export default Social;