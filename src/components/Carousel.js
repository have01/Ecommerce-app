import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const carousel = () => {
  return (
      <>
          
 <Carousel  dynamicHeight="200px" className=''  showThumbs={false}> 
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/09a4d20b8c2f5d10.jpg?q=50" />
          
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/ee120ff9f0f728b3.jpg?q=50"  />
                  
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2ffe80d45cc64b2c.jpg?q=50" />
            
                </div>
            </Carousel>

    </>
  )
}

export default carousel