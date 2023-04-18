import React, { useState } from "react"
import ReactImageMagnify from "react-image-magnify"
import { Rating } from "@mui/material"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch, useSelector } from "react-redux"
const fmt = require("indian-number-format")
import { cartSliceAction } from "../../redux/cartSlice"
import { wishlistSliceAction } from "../../redux/wishlistSlice"
import { useRouter } from "next/router"
const ProductDetails = ({ data }) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const dispatch = useDispatch()
  const { id } = router.query
  const wishlistItem = useSelector((state) => state?.wishlist?.wishlistItems)
  const handleAddToCart = (data) => {
    dispatch(cartSliceAction.addItem(data))
  }
  const handleAddToWishlist = (data) => {
    dispatch(wishlistSliceAction.addToWishlist(data))
  }
  const handleremoveFromWishlist = (id) => {
    dispatch(wishlistSliceAction.removeFromWishlist(id))
  }

  return (
    <>
      <div className="md:flex items-start container mx-auto justify-center py-4 2xl:px-20 md:px-6 px-4 my-2 shadow-2xl bg-white">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-[300px]"
            alt="img of a girl posing"
            src={data?.thumbnail}
          />
        </div>
        <div className="md:hidden ">
          <img
            className="w-full"
            alt="img of a girl posing"
            src={data?.thumbnail}
          />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
            />
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              Balenciaga Fall Collection
            </p>
            <h1
              className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              {data?.title}
            </h1>
            <div className="w-full mt-2">
              <Rating name="size-small" defaultValue={2} size="small" />
            </div>
            <p className="text-xl mt-4 font-bold leading-none text-black">
              {fmt.format(data?.price)} INR
            </p>
            <div className="w-full mt-2">
              <p></p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Colours</p>

            <div className="flex items-center justify-center">
              <div
                className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
              ></div>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Size</p>

            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="lg:pr-full text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {data?.description}
            </p>
            {/* <p className="text-base leading-4 mt-7 text-gray-600">
            Product Code: 8BN321AF2IF0NYA
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Length: 13.2 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Height: 10 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Depth: 5.1 inches
          </p>
          <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
            Composition: 100% calf leather, inside: 100% lamb leather
          </p> */}
          </div>

          <div className="w-full flex flex-row justify-between">
            <button
              onClick={() => handleAddToCart(data)}
              className="						
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-orange-700
						w-3/4
						py-4
            mt-3
					"
            >
              Add to cart
            </button>
            {wishlistItem.some((item) => item._id === id) ?
              <button
                onClick={() => handleremoveFromWishlist(data._id)}
                className="
						text-base
						flex
						items-center
						justify-center
						leading-none					
						w-1/5
            text-blue-400
						py-4					
            mt-3
						border-2 border-blue-400
					"
              >
                <FavoriteOutlinedIcon />
              </button> : <button
                onClick={() => handleAddToWishlist(data)}
                className="
						text-base
						flex
						items-center
						justify-center
						leading-none					
						w-1/5
            text-blue-400
						py-4					
            mt-3
						border-2 border-blue-400
					"
              >
                <FavoriteBorderOutlinedIcon />
              </button>}
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="md:flex items-start flex-col container mx-auto justify-center py-12 2xl:px-20 md:px-6 px-4 my-2 shadow-2xl bg-white">
        <div className="border-t border-b py-4 mt-7 border-gray-200 w-full">
          <div
            onClick={() => setShow(!show)}
            className="flex justify-between items-center cursor-pointer"
          >
            <p className="text-base leading-4 text-gray-800">
              Shipping and returns
            </p>
            <button
              className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
              aria-label="show or hide"
            >
              <svg
                className={"transform " + (show ? "rotate-180" : "rotate-0")}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
              (show ? "block" : "hidden")
            }
            id="sect"
          >
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are nonrefundable
          </div>
        </div>
        <div className="border-b py-4 border-gray-200 w-full">
          <div
            onClick={() => setShow2(!show2)}
            className="flex justify-between items-center cursor-pointer"
          >
            <p className="text-base leading-4 text-gray-800">Contact us</p>
            <button
              className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
              aria-label="show or hide"
            >
              <svg
                className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
              (show2 ? "block" : "hidden")
            }
            id="sect"
          >
            If you have any questions on how to return your item to us, contact
            us.
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
