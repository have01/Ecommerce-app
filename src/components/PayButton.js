import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
// import { cartSliceAction } from "../redux/cartSlice"

const PayButton = () => {

    const items = useSelector((state) => state?.cart)

    const profileData = useSelector((state) => state?.profile?.profile)
    const cartItems = items ? items : []

    // const dispatch = useDispatch()


    const handleCheckout = () => {
        axios.post(`${API_BASE_URL_AUTH}/api/stripe/create-checkout-session`, { cartItems, userId: profileData?.user?._id })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url

                    // clear cart
                    // dispatch(cartSliceAction.removeAllFromCart())
                }
            })
            .catch((err) => console.log('Error:', err.message))
    }

    return (
        <button className="mt-6 w-full hidden lg:block md:block bg-indigo-700 py-3 font-medium text-blue-50 hover:bg-blue-600" onClick={() => handleCheckout()}>Check Out</button>
    )
}

export default PayButton