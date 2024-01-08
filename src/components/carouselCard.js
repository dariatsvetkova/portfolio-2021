import * as React from "react"

import * as styles from "../styles/carouselCard.module.scss"

const CarouselCard = (props) => {
  const { from: { name, relation, company }, text } = props.reco?.node

  return (
    <li className={styles.card}>
      <p>{text}</p>
      <p className={styles.from}>
        <small>— {name}, {relation} at {company}</small>
      </p>
    </li>
  )  
}

export default CarouselCard
