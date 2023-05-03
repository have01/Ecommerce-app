import React, { Suspense, lazy, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Loader from "../../components/loading/loading"

const Cateogry = lazy(() => import('../../features/category/index'))
function valuetext(value) {
  return `${value}°C`;
}
export async function getServerSideProps(context) {
  const { category } = context.query
  let data
  try {
    const response = await axios.get(`https://auth-task-app.up.railway.app/api/products/search/${category}`);
    data = response?.data
  } catch (error) {
    console.error(error)
  }
  return {
    props: {
      data,
    },
  }
}


const Filter = ({ data }) => {
  const [filterActive, setfilterActive] = useState(false)
  const [toggleBrand, setToggleBrand] = useState(true)
  const [toggleRating, setToggleRating] = useState(true)
  const [value, setValue] = React.useState([1000, 8000]);
  const [products, setProducts] = useState(data)
  const [loading, setLoading] = useState(false)
  const [grid, setGrid] = useState(false)
  const handleChange = (event, newValue) => {
    const filterPrice = products.filter((val) => {
      return val.price < newValue
    })
    setProducts(filterPrice)
    setLoading(!loading)
    console.log(filterPrice, newValue)
  };
  const handleLowToHigh = () => {
    const sortedItems = products.sort((a, b) => a.price - b.price);
    setProducts(sortedItems)
    setLoading(!loading)
  }
  const handleHighToLow = () => {
    const sortedItems = products.sort((a, b) => b.price - a.price);
    setProducts(sortedItems)
    setLoading(!loading)

  }
  const handleRating = () => {
    const sortedItems = products.sort((a, b) => a.rating - b.rating);
    setProducts(sortedItems)
    setLoading(!loading)
  }
  useEffect(() => {

  }, [loading])

  return (
    <Suspense fallback={<Loader />}>
      <Cateogry
        valuetext={valuetext}
        handleRating={handleRating}
        filterActive={filterActive}
        toggleBrand={toggleBrand}
        toggleRating={toggleRating}
        handleLowToHigh={handleLowToHigh}
        setfilterActive={setfilterActive}
        setToggleBrand={setToggleBrand}
        setToggleRating={setToggleRating}
        handleHighToLow={handleHighToLow}
        handleChange={handleChange}
        products={products} />
    </Suspense>


  )
}

export default Filter
