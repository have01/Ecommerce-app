import axios from "axios"
import { useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { lazy } from "react"
import Loading from "../../components/loading/loading"
import SearchBar from "../../components/SearchBar"
import Mobileview from "../../components/Homepage/mobile"
import Image from "next/image"
import Banner from "../../components/banner"
const ProductsCarousel = lazy(
  () => import("../../components/Products/ProductsCarousel"),
  { suspense: true }
)
const Highlight = lazy(() => import("../../components/Highlights"), {
  suspense: true,
})
const Carousel = lazy(() => import("../../components/Carousel"), { suspense: true })
export async function getServerSideProps(context) {
  let carouselData = []
  const urls = [
    `https://auth-task-app.up.railway.app/api/products/search/laptop`,
    `https://auth-task-app.up.railway.app/api/products/search/fashion`,
    `https://auth-task-app.up.railway.app/api/products/search/smartphones`,
  ]
  try {
    const response = await Promise.all(urls.map((url) => axios.get(url)))
    const data = response.map((res) => res.data)
    carouselData = data
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      carouselData,
    },
  }
}
export default function Index({ carouselData }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="lg:hidden sm:block md:hidden  w-full ">
          <SearchBar />
        </div>
        <div className="container mx-auto mt-1">
          <Carousel />
        </div>

        <Banner />

        <div className=" block lg:hidden md:hidden">
          <Mobileview />
        </div>

        {carouselData?.length > 0 ? (
          <div className="container mx-auto mt-1">
            {carouselData?.map((val, ind) => (
              <ProductsCarousel data={val} key={ind} />
            ))}
          </div>
        ) : (
          <div className="container mx-auto flex justify-center">
            <Image
              src="/nproduct.png"
              alt="no-product"
              width={600}
              height={200}
            />
          </div>
        )}

        <Highlight />
      </Suspense>
    </>
  )
}
