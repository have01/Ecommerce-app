import axios from 'axios'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_BASE_URL_AUTH } from '../constants/APIConstants'
import { cartSliceAction } from "../redux/cartSlice"


const PayButton = () => {
    const dispatch = useDispatch()

    const profileData = useSelector((state) => state?.profile?.profile)
    const items = useSelector((state) => state?.cart)
    const cartItems = useMemo(() => items || [], [items])

    const handleCheckout = async () => {
        console.log("clicked")
        try {
            const res = await axios.post(`/api/stripe`, { cartItems, userId: profileData?.user?._id })
            console.log('res', res)
            if (res.data?.session?.url) {
                // clear cart

                window.location.href = res.data.session.url
            }
        } catch (err) {
            console.log('Error:', err.message)
            alert('There was a problem processing your payment. Please try again.')
        }
    }

    return (
        <button className="pay-button" onClick={handleCheckout}>Check Out</button>
    )
}

export default PayButton

// import axios from 'axios'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { API_BASE_URL_AUTH } from '../constants/APIConstants'
// import { cartSliceAction } from "../redux/cartSlice"

// const PayButton = () => {

//     const items = useSelector((state) => state?.cart)

//     const profileData = useSelector((state) => state?.profile?.profile)
//     const cartItems = items ? items : []

//     const dispatch = useDispatch()
//     const handleCheckout = () => {
//         console.log("clicked")
//         axios.post(`/api/stripe`, { cartItems, userId: profileData?.user?._id })
//             .then((res) => {
//                 console.log('res', res)
//                 if (res.data?.session?.url) {
//                     // // clear cart
//                     // dispatch(cartSliceAction.clearCart())

//                     window.location.href = res.data?.session?.url

//                 }
//             })
//             .catch((err) => console.log('Error:', err.message))
//     }

//     return (
//         <button className="mt-6 w-full hidden lg:block md:block bg-indigo-700 py-3 font-medium text-blue-50" onClick={() => handleCheckout()}>Check Out</button>
//     )
// }

// export default PayButton