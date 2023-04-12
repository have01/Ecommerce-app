import { Rating } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ data }) => {

  return (
    <>

      <div className="flex flex-col bg-white  transform transition duration-500 hover:scale-110 p-2 cursor-pointer ">
        <Link href={`/productDetail/${data._id}`}
        >
          <div className="w-full ">

            <img
              className="w-[200px] h-[200px] object-cover"
              src={data?.thumbnail}
              alt="product image"
            />

          </div>
        </Link>

        <h5 className="text-base font-semibold tracking-tight h-5 overflow-hidden text-gray-900 dark:text-white mt-2 mb-2">
          {data?.title}
        </h5>

        <div className="flex items-center">
          <span className="text-sm font-bold text-blue-600 dark:text-white">
            {data?.price}
          </span>
          <span className="text-gray-900 text-xs ml-1 dark:text-white">
            {data?.discount}
          </span>
        </div>
        <div className="flex  mt-3.5 mb-5">
          {" "}
          <Rating name="size-small" defaultValue={data?.rating} size="small" />
        </div>
      </div>
    </>
  )
}

export default ProductCard
