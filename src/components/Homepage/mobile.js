import {Button} from "@mui/material"
import axios from "axios"
import Link from "next/link"
import React, {useState, useEffect} from "react"

const Mobile = () => {
  const urls = [
    `https://auth-task-app.up.railway.app/api/products/search/fashion`,
    `https://auth-task-app.up.railway.app/api/products/search/smartphones`,
    `https://auth-task-app.up.railway.app/api/products/search/laptop`,
  ]
  const [categoryData, setCategoryData] = useState([]) // initialize with empty array
  const handleURL = async () => {
    try {
      const response = await Promise.all(urls.map((url) => axios.get(url)))
      const data = response.map((res) => res.data)
      setCategoryData(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    handleURL()
  }, [])

  return (
    <>
      {categoryData.length > 0 ? (
        categoryData.map((val, index) => {
          return (
            <div
              className="w-full flex flex-col p-2  bg-white mt-1"
              key={index}
            >
              <div className="w-full flex justify-between items-center  p-2">
                <h1>Shop by {val[0].category}</h1>{" "}
                {/* use the first element's category */}
                <Link
                  href={`/products/${val[0].category}`}
                  className="bg-indigo-600 px-6 py-2 text-white"
                >
                  View all
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 justify-around ">
                {val
                  .slice(5, 9)
                  .map((item /* use a unique value for the key prop */) => (
                    <div className="w-40 h-40 shadow-lg" key={item._id}>
                      <Link href={`/productDetail/${item?._id}`}>
                        <img
                          src={item?.thumbnail}
                          alt=""
                          srcset=""
                          className="object-contain w-40 h-40"
                        />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )
        })
      ) : (
        <p>Loading...</p> // placeholder or loading state
      )}
    </>
  )
}

export default Mobile
