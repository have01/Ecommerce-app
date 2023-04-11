import axios from "axios"
import { useEffect } from "react"
import Carousel from "../components/Carousel"
import Faq1 from "../components/Faq"
import Highlight from "../components/Highlights"
import ProductsCarousel from "../components/Products/ProductsCarousel"

export default function Index({ data }) {
  return (
    <>
      <div className="container mx-auto  flex mt-2   justify-center items-center ">
        <Carousel />
      </div>
      <ProductsCarousel data={data} />
      <ProductsCarousel data={data} />
      <Highlight />
    </>
  )
}

export async function getServerSideProps(context) {
  let data
  try {
    const response = await axios.get(
      `https://auth-task-app.up.railway.app/api/products/search/laptop`
    )
    data = response?.data
  } catch (error) {}

  return {
    props: {
      data,
    },
  }
}
