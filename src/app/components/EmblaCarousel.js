"use client"

// EmblaCarousel receives the props from the index --> app/page.js - An Empty Object "OPTIONS" and an Array with the SLIDES
// Then in the main function of the component defines the parameters "slides" and "options" to use later in the other component.
// Later Defines another array of variables "emblaRef, emblaApi" with the value --> a callback of a new function "useEmblaCarousel(options)"


import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../components/EmblaCarouselArrowButtons'
import ImageByIndex from '../components/ImageByIndex'
import SlidesByIndex from '../components/SlideByIndex'
import Image from 'next/image'
// Remember to import Image from NEXT !!!!!!!

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)  

  return (
    <div className='grid-center'>
    <div className="embla col-12">
      
      <div id="client-stories" className='col-1-6'>
        <h2>Client stories: the impact of our solutions</h2>
      </div> 

      <div className="embla__viewport col-12" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> */} 
              
              <div className='col-8-13'>
                <Image
                  className="embla__slide__img"
                  src={ImageByIndex(index)}
                  alt="Your alt text"
                />
              </div>
              
              <div className='col-1-6 mt-large'>
                <div className='text-2'>{SlidesByIndex(index).comment}</div>
                <div className='red bold mtb'>{SlidesByIndex(index).by}</div>
              </div>

            </div>
          ))}

        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
    </div>
  )
}

export default EmblaCarousel



// "use client"
// // Swiper components, modules and styles
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import SlideClientOne from "./HomeClientSlideOne";

// export default function HomeClientStories() {
//   return (
//     <Swiper
//             navigation
//             pagination={{ type: "bullets", clickable: true }}
//             autoplay={true}
//             loop={true}
//             modules={[Autoplay, Navigation, Pagination]}
//           >
//       <SwiperSlide><SlideClientOne></SlideClientOne></SwiperSlide>
//       <SwiperSlide><SlideClientOne></SlideClientOne></SwiperSlide>
//       <SwiperSlide><SlideClientOne></SlideClientOne></SwiperSlide>
//       <SwiperSlide><SlideClientOne></SlideClientOne></SwiperSlide>
//       ...
//     </Swiper>
//   );
// };