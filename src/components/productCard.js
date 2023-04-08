import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const ProductCard = () => {
    return (
        <>
            <div className="mt-5 ml-5 flex justify-center">
                <div class="w-[250px] bg-white border border-gray-200 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" className='w-full flex justify-center'>
                        <img class="p-8 rounded-t-lg h-[200px]" src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png" alt="product image" />
                    </a>
                    <div class="px-3 pb-5">
                        <a href="#">
                            <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                        </a>

                        <div class="flex items-center">
                            <span class="text-sm font-bold text-blue-600 dark:text-white">$599 </span>
                            <span class="text-gray-900 text-xs ml-1 dark:text-white"> (26% off) </span>
                        </div>

                        <div class="flex justify-between mt-3.5 mb-5">

                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">190 reviews</span>

                        </div>

                        <div className="flex justify-end">
                            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Wishlist </a>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default ProductCard;