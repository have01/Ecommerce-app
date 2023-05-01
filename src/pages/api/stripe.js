const stripe = require('stripe')(process.env.SECRET_KEY)

export default async function handler(
  req,
  res
) {

  // const { cart } = JSON.parse(req.body);

  // const lineItems = [
  //   {
  //     price_data: {
  //       currency: 'usd',
  //       product_data: {
  //         name: 'T-shirt',
  //       },
  //       unit_amount: 2000,
  //     },
  //     quantity: 1,
  //   },
  // ];

  // for (const key in cart) {
  //   lineItems.push({
  //     price_data: {
  //       currency: "usd",
  //       product_data: {
  //         name: cart[key].title,
  //         // images: [cart[key].imageUrl]
  //       },
  //       unit_amount: cart[key].price * 100
  //     },
  //     quantity: cart[key].qty
  //   });
  // }

  const line_items = req.body.cartItems.map(item => {
    return {
      price_data: {
        currency: 'INR',
        product_data: {
          name: item?.title,
          images: [item?.thumbnail],
          description: item?.description,
          metadata: {
            id: item?.id
          }
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }
  })

  const session = await stripe.checkout.sessions.create({
    line_items: [...line_items],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  console.log(session)
  res.status(200).json({ session })
}