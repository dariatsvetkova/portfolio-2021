import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/projectCard.module.scss";

const ProjectCard = (props) => {  
  const { slug, number, title, descr, tags} = props.project

  const content = (
    <>
      <small className={styles.numCard}>{number < 10 ? "0" + number : number}</small>
      <h4>{title}</h4>

      {props.imgFiles.length ? (
        <GatsbyImage
          className={styles.projectImg}
          image={getImage(props.imgFiles[0].node)}
          alt={`${title} project screenshot`}
        />
      ) : null}

      <p className={styles.descr}>
        {descr}
        {slug &&(
          <>
          {' '}
          <span className={`textLink ${styles.moreLink}`}>Learn more</span>
          </>
        )}
      </p>
      <div className={styles.stackTags}>
        {tags.map((tag, index) => {
          return <span key={index} className="stackTag">{tag}</span>
        })}
      </div>
    </>
  )

  return (
    <li className={styles.projectCard}>
      {slug 
        ? <Link to={slug} className={styles.projectContainer}>
          {content}
        </Link>
        : <div className={styles.projectContainer}>
          {content}
        </div>
      }
    </li>
  )  
}

export default ProjectCard
