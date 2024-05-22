"use client"

// EmblaCarousel receives the props from the index --> app/page.js - An Empty Object "OPTIONS" and an Array with the SLIDES
// Then in the main function of the component defines the variable "slides" and "options" to use later as parameter.
// Define another array of variables "emblaRef, emblaApi" with the value --> a callback of a new function "useEmblaCarousel(options)"
// 
// 

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import LogosByIndex from '../components/LogosByIndex'
import Image from 'next/image'

const CarouselLogos = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla_logos">
      <div className="embla_logos_viewport" ref={emblaRef}>
        <div className="embla_logos_container">
          {slides.map((index) => (
            <div className="embla_logos_slide" key={index}>
              {/* <div className="embla_logos_slide__number">{index + 1}</div> */}
              <Image
                  className=""
                  src={LogosByIndex(index)}
                  alt="Your alt text"
                />
              {/* <div className="embla__slide__img">{LogosByIndex(index)}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselLogos
