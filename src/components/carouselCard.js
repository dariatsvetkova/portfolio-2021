import * as React from "react"

import * as styles from "../styles/carouselCard.module.scss"

const CarouselCard = React.forwardRef((props, ref) => {
  if (props.empty) {
    return (
      <li className={`${styles.card} ${styles.empty}`} aria-hidden="true" />
    )
  }

  const { from: { name, relation, company }, text } = props.reco?.node

  return (
    <li className={styles.card} ref={ref}>
      <div className={styles.textContainer}>
        <p>{text}</p>
        <p className={styles.from}>
          <small>— {name}, {relation} at {company}</small>
        </p>
      </div>
    </li>
  )  
})

export default CarouselCard
