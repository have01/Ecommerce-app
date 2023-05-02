// const stripe = require('stripe')('sk_test_51N1sTXSGLzKrHE9vxrtXbM6r4MLCcDkGJUgzHbwdfG9Kq9XDSmaoquhfnmxzAEkUqMXzLhMGnojUBqcePGagIZBq00VxAq6BPV')

// export default async function handler(req, res) {


//   console.log("req hit")
//   const line_items = req.body?.cartItems?.map(item => {
//     console.log(item)
//     return {
//       price_data: {
//         currency: 'INR',
//         product_data: {
//           name: item?.title,
//           images: [item?.thumbnail],
//           description: item?.description,
//           metadata: {
//             id: item?.id
//           }
//         },
//         unit_amount: item?.price,
//       },
//       quantity: 1,
//     }
//   })
//   console.log(line_items)

//   const session = await stripe.checkout.sessions.create({

//     line_items: [...line_items],
//     mode: 'payment',
//     success_url: `${process.env.CLIENT_URL}/checkout-success`,
//     cancel_url: `${process.env.CLIENT_URL}/cart`,
//   });
//   console.log(session)
//   res.status(200).json({ session })
// }
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51N1sTXSGLzKrHE9vxrtXbM6r4MLCcDkGJUgzHbwdfG9Kq9XDSmaoquhfnmxzAEkUqMXzLhMGnojUBqcePGagIZBq00VxAq6BPV')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`
      })

      return res.status(201).json(session)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}