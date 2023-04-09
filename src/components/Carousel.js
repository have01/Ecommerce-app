import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const CarouselComponent = () => {
  return (
    <Carousel
      dynamicHeight={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      interval={2000}
      showStatus={false}
    >
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/09a4d20b8c2f5d10.jpg?q=50"
          alt="First Image"
        />
      </div>
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/ee120ff9f0f728b3.jpg?q=50"
          alt="Second Image"
        />
      </div>
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2ffe80d45cc64b2c.jpg?q=50"
          alt="Third Image"
        />
      </div>
    </Carousel>
  )
}

export default CarouselComponent
