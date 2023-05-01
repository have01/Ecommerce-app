import { Rating } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
const ProductCard = ({ data, ind }) => {
  return (
    <>
      <Slide index={ind} key={ind}>
        <div className="flex flex-col shadow-md items-center rounded-lg transform bg-white transition duration-500 hover:scale-95 p-2 cursor-pointer">
          <Link href={`/category/${data.category}`}>
            <div className="w-full h-full">
              <img
                className="w-[200px] h-[200px] object-contain"
                src={data?.thumbnail}
                alt="product image"
              />
            </div>
            <h5 className="text-base font-semibold line-clamp-2  h-5  text-gray-700 dark:text-white mt-2 mb-2">
              {data?.title}
            </h5>
          </Link>
        </div>
      </Slide>
    </>
  )
}

export default ProductCard
