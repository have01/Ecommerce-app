import { useSelector } from "react-redux"
import Cart from "../../features/Cart/index"
import { Container } from "postcss";
import Link from "next/link";

const index = () => {
   const items = useSelector((state) => state?.cart)
  console.log(items.length);
   return  items.length>0?<Cart/>:<>
<div className="flex justify-center items-center">
<div className="Container flex justify-center items-center flex-col w-[390px] h-[450px]">
<img src="logo.png" alt="empty cart" />
    <h1 className="text-2xl font-semibold tracking-wide font-sans mt-3 text-gray-950"> Your Cart is Empty </h1>
<p className="text-base font-sans mt-2 mb-2 text-gray-800 text-center"> Looks like you have not added anything to your cart. Go ahead & explore top categories.</p>
<Link href='/' className="flex	items-center justify-center leading-none py-4	text-white bg-indigo-700 px-5 mt-3 rounded-lg shadow-lg text-base">
Continue shopping
</Link>


    </div>
</div>

    
   </>
    
   
}

export default index