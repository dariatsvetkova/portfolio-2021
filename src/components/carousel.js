import React, { useRef } from "react"
import { ArrowLeft, ArrowRight } from "../components/icons"
import CarouselCard from "./carouselCard"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as styles from "../styles/carousel.module.scss"

const Carousel = (props) => {
  const carouselRef = useRef(null)
  const recos = props.recos

  const carouselSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    adaptiveHeight: false,
  }

  return (
    <>
      <div className={styles.background} />
      <div className={styles.leftGradient} />

      <button
        className={styles.carouselButtonLeft}
        aria-label="Go to previous slide"
        onClick={carouselRef?.current?.slickPrev}
      >
        <ArrowLeft />
      </button>
      <button
        className={styles.carouselButtonRight}
        aria-label="Go to next slide"
        onClick={carouselRef?.current?.slickNext}
      >
        <ArrowRight />
      </button>

      <Slider
        ref={carouselRef}
        {...carouselSettings}
        className={styles.carousel}
      >
        {recos.map((reco) => (
          <CarouselCard key={reco.node.id} reco={reco} />
        ))}
      </Slider>

      <div className={styles.rightGradient} />
    </>
  )
}

export default Carousel