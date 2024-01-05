import React, { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "../components/icons";
import CarouselCard from "./carouselCard"

import * as styles from "../styles/carousel.module.scss"


const getButtonText = (currentInd, lastInd) => {
  const prevText = currentInd === 0 ?
  `Go to last slide` :
  `Go to previous slide`
  
  const nextText = currentInd === lastInd ?
    `Go to first slide` :
    `Go to next slide`

  return { prevText, nextText}
}


const Carousel = (props) => {
  const recos = props.recos
  const lastInd = recos.length - 1

  const [currentSlide, setCurrentSlide] = useState(Math.floor(lastInd / 2))

  const handleNext = () => {
    if (currentSlide === lastInd) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(lastInd)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  // create an array that will hold references to each recommendation child
  const childrenRefs = recos.map(_ => React.createRef())

  useEffect(() => {
    const currentRecoRef = childrenRefs[currentSlide]
    if (currentRecoRef?.current) {
      currentRecoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      })
    }
  }, [currentSlide, childrenRefs])

  const { prevText, nextText } = getButtonText(currentSlide, lastInd)

  return (
    <>
      <div className={styles.background} />
      <div className={styles.leftGradient} />

      <div className={styles.buttonContainer}>
        <button
          aria-label={prevText}
          onClick={handlePrev}
        >
          <ArrowLeft />
        </button>
        <button
          aria-label={nextText}
          onClick={handleNext}
        >
          <ArrowRight />
        </button>
      </div>

      <ul className={styles.carousel}>
        <CarouselCard empty />

        {props.recos.map((reco, ind) => (
          <CarouselCard
            key={reco.node.id}
            reco={reco}
            ref={childrenRefs[ind]}
          />
        ))}

        <CarouselCard empty />
      </ul>

      <div className={styles.rightGradient} />
    </>
  )
}

export default Carousel