import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_BASE_URL_AUTH } from '../constants/APIConstants'
import { cartSliceAction } from "../redux/cartSlice"
import { loadStripe } from '@stripe/stripe-js';

const PayButton = () => {

    const items = useSelector((state) => state?.cart)
    const [id, setId] = useState("")
    const profileData = useSelector((state) => state?.profile?.profile)
    const cartItems = items ? items : []

    const stripePromise = loadStripe('pk_test_51N1sTXSGLzKrHE9v83gHnBgs5oc1W4971x5cUeLhtBV9vgsP4fNtKxftlksJAOnlueIm28R2kab0mBAM7UfTG59M00rckxiEET')
    const dispatch = useDispatch()
    // const handleCheckout = () => {
    //     console.log("clicked")
    //     axios.post(`/api/stripe`, { cartItems, userId: profileData?.user?._id })
    //         .then((res) => {
    //             console.log('res', res)
    //             if (res.data?.session?.url) {
    //                 // // clear cart
    //                 // dispatch(cartSliceAction.clearCart())

    //                 window.location.href = res.data?.session?.url

    //             }
    //         })
    //         .catch((err) => console.log('Error:', err.message))
    // }
    const handleCheckout = async () => {

        const lineItems = cartItems.map((item) => {
            return {
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: item.title
                    },
                    unit_amount: item.price  // because stripe interprets price in cents
                },
                quantity: item.quantity
            }
        })


        const { data } = await axios.post('https://shopkart-app.vercel.app/api/stripe', { lineItems })
        const stripe = await stripePromise
        console.log("id", id)
        await stripe.redirectToCheckout({ sessionId: data?.id })
    }

    return (
        <button className="mt-6 w-full hidden lg:block md:block bg-indigo-700 py-3 font-medium text-blue-50" onClick={() => handleCheckout()}>Check Out</button>
    )
}

export default PayButton
