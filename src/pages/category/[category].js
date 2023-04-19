import React from "react"
import { useState } from "react"
import MobileFilter from "../../components/filters/mobileFilter"
import Sort from "../../components/filters/sort"
import { Slider } from "@mui/material"
import axios from "axios"
import Link from "next/link"


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div class="">
      <div>
        {filterActive ? <MobileFilter setfilterActive={setfilterActive} /> : ""}

        < main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
          <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6 sm:pt-24">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div class="flex items-center">
              <Sort />

              <button
                type="button"
                class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span class="sr-only">View grid</span>
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setfilterActive(!filterActive)}
              >
                <span class="sr-only">Filters</span>
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" class="pb-24 pt-6">
            <h2 id="products-heading" class="sr-only">
              Products
            </h2>

            <div class="conatiner mx-auto flex justify-between ">
              <form class="hidden lg:block w-1/4">
                <h3 class="sr-only">Categories</h3>
                <ul
                  role="list"
                  class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <li>
                    <a href="#">Totes</a>
                  </li>

                  <li>
                    <a href="#">Backpacks</a>
                  </li>

                  <li>
                    <a href="#">Travel Bags</a>
                  </li>

                  <li>
                    <a href="#">Hip Bags</a>
                  </li>

                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>

                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"

                    >
                      <span class="font-medium text-gray-900">Price</span>

                    </button>
                  </h3>

                  <div class="pt-6" id="filter-section-0">
                    <div class="space-y-4">


                      <div class="flex items-center">
                        <Slider
                          aria-label="Always visible"
                          getAriaLabel={() => 'Temperature range'}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          min={1000}
                          step={1}
                          max={10000}
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                      onClick={() => setToggleBrand(!toggleBrand)}
                    >
                      <span class="font-medium text-gray-900">Brand</span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {toggleBrand ? (
                    <div class="pt-6" id="filter-section-0">
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="white"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-color-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Apple
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="beige"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-color-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Samsung
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            checked
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-color-2"
                            class="ml-3 text-sm text-gray-600"
                          >
                            One plus
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-color-3"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Motorola
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                      onClick={() => setToggleRating(!toggleRating)}
                    >
                      <span class="font-medium text-gray-900">Rating</span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {toggleRating ? (
                    <div class="pt-6" id="filter-section-1">
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-category-0"
                            name="category[]"
                            value="new-arrivals"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-category-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            New Arrivals
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-category-1"
                            name="category[]"
                            value="sale"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-category-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Sale
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-category-2"
                            name="category[]"
                            value="travel"
                            type="checkbox"
                            checked
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-category-2"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Travel
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-category-3"
                            name="category[]"
                            value="organization"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-category-3"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Organization
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-category-4"
                            name="category[]"
                            value="accessories"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="filter-category-4"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Accessories
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {/* <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">Size</span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div class="pt-6" id="filter-section-2">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          id="filter-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-0"
                          class="ml-3 text-sm text-gray-600"
                        >
                          2L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-1"
                          class="ml-3 text-sm text-gray-600"
                        >
                          6L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-size-2"
                          name="size[]"
                          value="12l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-2"
                          class="ml-3 text-sm text-gray-600"
                        >
                          12L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-size-3"
                          name="size[]"
                          value="18l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-3"
                          class="ml-3 text-sm text-gray-600"
                        >
                          18L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-size-4"
                          name="size[]"
                          value="20l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-4"
                          class="ml-3 text-sm text-gray-600"
                        >
                          20L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-size-5"
                          name="size[]"
                          value="40l"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-5"
                          class="ml-3 text-sm text-gray-600"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}
              </form>
              <div class=" w-full">
                <div class="flex flex-row flex-wrap w-full gap-y-10">

                  {data?.map((val, index) =>
                    <div
                      key={index}
                      className="group  shadow-md flex flex-col object-contain  p-4 w-[286px] h-[300px]  ml-5 box rounded-xl"
                    >
                      <div className="h-[180px]">
                        <Link href={`/productDetail/${val?._id}`}>
                          <img
                            src={val?.thumbnail}
                            className="h-full w-full object-contain "
                          />
                        </Link>
                      </div>
                      <div>
                        <h1 className="w-full mt-3 text-gray-700 line-clamp-2 text-sm ">
                          {val.title}
                        </h1>
                      </div>

                    </div>

                  )}

                </div>
              </div>
            </div>
          </section>
        </main >
      </div >
    </div >
  )
}

export default Filter
