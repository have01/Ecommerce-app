import DeleteIcon from "@mui/icons-material/Delete"
import Link from "next/link"
import {useDispatch, useSelector} from "react-redux"
import {cartSliceAction} from "../../redux/cartSlice"
const fmt = require("indian-number-format")
const Index = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart)
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  const handleRemoveFromCart = (id) => {
    dispatch(cartSliceAction.removeFromCart({id}))
  }
  const handleDecreaseQuantity = (id) => {
    dispatch(cartSliceAction.decreaseQuantity({id}))
  }
  const handleIncreaseQuantity = (id) => {
    dispatch(cartSliceAction.increaseQuantity({id}))
  }

  return (
    <>
      <div class="h-full  mt-2">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>

        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {items.map((value, index) => (
              <div
                key={index}
                class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={value?.thumbnail}
                  alt="product-image"
                  class="w-full h-40 object-contain rounded-lg sm:w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h4 class="text-sm font-bold text-gray-900 w-[300px] h-10 overflow-hidden">
                      {value?.title}
                    </h4>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div
                      class="flex items-center justify-end border-gray-100"
                      onClick={() => handleRemoveFromCart(value?._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div class="flex items-center border-gray-100">
                      <span
                        onClick={() => handleDecreaseQuantity(value?._id)}
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        -
                      </span>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={value?.quantity}
                        min="1"
                      />
                      <span
                        onClick={() => handleIncreaseQuantity(value?._id)}
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        +
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm"> {fmt.format(value?.price)} INR</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* sub total */}

          <div class="mt-6 mb-16 lg:mb-2 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">{totalPrice}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">140</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between mb-4">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  {" "}
                  {fmt.format(totalPrice + 140)} INR
                </p>
              </div>
            </div>
            <button class="fixed z-50 bottom-0 left-0 right-0 py-3 bg-blue-500 text-white text-center sm:hidden ">
              Checkout
            </button>

            <button class="mt-6 w-full hidden lg:block md:block bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
