import { Rating } from "@mui/material"

const ProductCard = () => {
  return (
    <>
      <div className="flex flex-col bg-white   p-2 ">
        <div className="w-full ">
          <img
            class="  w-10"
            src="https://rukminim1.flixcart.com/image/312/312/xif0q/electric-cycle/x/y/x/sensei-yellow-18-niion-single-speed-original-imagzaknffyf6wjg.jpeg?q=70"
            alt="product image"
          />
        </div>

        <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white mt-2 mb-2">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>

        <div class="flex items-center">
          <span class="text-sm font-bold text-blue-600 dark:text-white">
            $599
          </span>
          <span class="text-gray-900 text-xs ml-1 dark:text-white">
            (26% off)
          </span>
        </div>
        <div class="flex  mt-3.5 mb-5">
          {" "}
          <Rating name="size-small" defaultValue={2} size="small" />
        </div>
      </div>
    </>
  )
}

export default ProductCard
