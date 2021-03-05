import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Social = () => (
  <ul className="socialIcons">
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