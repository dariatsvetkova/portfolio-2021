import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/projectCard.module.scss";
import clapCard from "../data/images/clapcard/home.gif"

const ProjectCard = (props) => {

  const { slug, number, title, descr, tags} = props.project

  return (
    <li className={styles.projectCard}>
      <Link to={slug} className={styles.projectContainer}>
        <small className={styles.numCard}>{number < 10 ? "0" + number : number}</small>
        <h4>{title}</h4>

        {slug === "/clapcard"
          ? <div 
              className={styles.projectImg}
              style={{
                objectFit: "contain",
              }}
            >
              <img
                src={clapCard}
                alt={`${title} project screenshot`}
                style={{
                  maxWidth: '700px',
                  margin: '0',
                  borderRadius: "9px",
                }}
              />
            </div>
          : <GatsbyImage
              className={styles.projectImg}
              image={getImage(props.imgFile[0].node)}
              alt={`${title} project screenshot`}
            />
        }

        <p className={styles.descr}>{descr} <span className={`textLink ${styles.moreLink}`}>Learn more</span></p>
        <div className={styles.stackTags}>
          {tags.map((tag, index) => {
            return <span key={index} className="stackTag">{tag}</span>
          })}
        </div>
      </Link>
    </li>
  )  
}

export default ProjectCard
