import React, {useState} from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import Rating from "@mui/material/Rating"
import {styled} from "@mui/material/styles"
import ProductCard from "./ProductCard"
/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function ProductsCarousel({data}) {
  return (
    <>
      <div className="text-center mt-2 p-2 container mx-auto hidden lg:block">
        <h1 className="text-2xl ">Shop By {data[0]?.category}</h1>
      </div>
      <div className="container mx-auto mt-1 mb-2 ">
        <div className="flex items-center justify-center w-full  sm:py-4  ">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={data.length}
            visibleSlides={5}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 -left-10 h-full border-1  px-2  cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-auto p-4  flex lg:gap-10 md:gap-6 gap-14  items-center justify-start transition ease-out duration-700"
                  >
                    {data.map((val, ind) => {
                      return (
                        <Slide index={ind} key={ind}>
                          <ProductCard data={val} />
                        </Slide>
                      )
                    })}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 h-full border-1  px-2 cursor-pointer -right-5 "
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  )
}
