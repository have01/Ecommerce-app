import {Rating} from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({data}) => {
  return (
    <>
      <div className="flex flex-col shadow-md items-center rounded-lg transform transition duration-500 hover:scale-95 p-2 cursor-pointer">
        <Link href={`/productDetail/${data._id}`}>
          <div className="w-full h-full">
            <img
              className="w-[200px] h-[200px] object-contain"
              src={data?.thumbnail}
              alt="product image"
            />
          </div>
        </Link>

        <h5 className="text-base font-semibold line-clamp-2  h-5  text-gray-700 dark:text-white mt-2 mb-2">
          {data?.title}
        </h5>

        <div className="flex items-center"></div>
       
      </div>
    </>
  )
}

export default ProductCard
