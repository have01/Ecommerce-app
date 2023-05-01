export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  res.redirect('https://checkout.stripe.com/')
}
