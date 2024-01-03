import * as React from "react"
import CarouselCard from "./carouselCard"

import * as styles from "../styles/carousel.module.scss"

const Carousel = (props) => {
  const total = props.recos.length
  
  return (
    <div className={styles.carouselContainer}>
      <ul className={styles.carousel}>
        {props.recos.map((reco, ind) => (
          <CarouselCard
            key={reco.id}
            reco={reco}
            index={ind}
            total={total}
          />
        ))}
      </ul>
    </div>
  )
}

export default Carousel