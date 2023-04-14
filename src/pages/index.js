import axios from "axios"
import { useEffect } from "react"
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { lazy } from "react";
import Loading from "../components/loading/loading"
import SearchBar from "../components/SearchBar";
const ProductsCarousel = lazy(
  () => import("../components/Products/ProductsCarousel"),
  { suspense: true }
);
const Highlight = lazy(
  () => import("../components/Highlights"),
  { suspense: true }
);
const Carousel = lazy(
  () => import("../components/Carousel"),
  { suspense: true }
);
export async function getServerSideProps(context) {
  let data
  try {
    const response = await axios.get(
      `https://auth-task-app.up.railway.app/api/products/search/laptop`
    )
    data = response?.data
  } catch (error) { }

  return {
    props: {
      data,
    },
  }
}
export default function Index({ data }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="lg:hidden sm:block md:hidden  w-full ">
          <SearchBar />
        </div>
        <div className="container mx-auto mt-1">
          <Carousel />
        </div>

        <div className="container mx-auto mt-1">
          <ProductsCarousel data={data} />
          <ProductsCarousel data={data} />
        </div>
        <Highlight />
      </Suspense>
    </>
  )
}


