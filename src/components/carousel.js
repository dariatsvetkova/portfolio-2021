import React, { useState, useEffect, useRef } from "react"
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
  const carouselRef = useRef(null);

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
    if (!carouselRef.current) {
      console.log('carouselref is empty')
      return
    }

    // check if the carousel is currently in the viewport
    // (this prevents scrolling down to the carousel when the page is first rendered)
    const carouselPosition = carouselRef.current.getBoundingClientRect()

    const isVisible = (
      carouselPosition &&
      carouselPosition.top >= 0 &&
      carouselPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )

    if (isVisible) {
      // move the desired child into the center of the carousel
      const currentRecoRef = childrenRefs[currentSlide]

      if (currentRecoRef?.current) {
        console.log('scrolling to child ', currentSlide)
        setTimeout(() => {
          return currentRecoRef.current.scrollIntoView({
            // behavior: "smooth",
            block: "center",
            inline: "center"
          })
        }, 10)
      } else {
        console.log('child ref is empty')
      }
    } else {
      const middle = Math.floor(carouselPosition.width * (Math.floor(lastInd / 2) - 1.25))
      console.log('scroll to middle', middle)
      carouselRef.current.scroll({ left: middle })
    }
  }, [carouselRef, currentSlide, childrenRefs, lastInd])

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

      <ul className={styles.carousel} ref={carouselRef}>
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