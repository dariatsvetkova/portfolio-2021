import * as React from "react"
import * as styles from "../styles/carouselCard.module.scss"

const CarouselCard = (props) => {
  const { from: { name, relation, company }, text } = props.reco.node
  const { index, total } = props

  const prevId = index === 0 ?
    `#reco-carousel-${total - 1}` :
    `#reco-carousel-${index - 1}`
  const prevText = index === 0 ?
    `Go to last slide` :
    `Go to previous slide`
  
  const nextId = index === total - 1 ?
    `#reco-carousel-${0}` :
    `#reco-carousel-${index + 1}`
  const nextText = index === total - 1 ?
    `Go to first slide` :
    `Go to next slide`


  return (
    <li 
      id={`reco-carousel-${index}`}
      tabindex="0"
      className={styles.card}
    >
      <div className="carouselArrows">
        <a href={prevId} className="carouselPrev">
          {prevText}
        </a>
        <a href={nextId} className="carouselNext">
          {nextText}  
        </a>
      </div>

      <p>{props.ind}</p>
      <p className={styles.text}>{text}</p>
      <small className={styles.from}>— {name}, {relation} at {company}</small>
    </li>
  )  
}

export default CarouselCard
