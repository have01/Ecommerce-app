import { Menu, Transition } from "@headlessui/react"
import axios from "axios"
import { useState, useEffect, Fragment } from "react"
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded"
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import Link from "next/link"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchProductsData, setSearchProductsData] = useState([])

  useEffect(() => {
    if (!searchTerm) {
      setLoading(false)
    } else {
      setLoading(true)
      setTimeout(() => {
        axios
          .get(
            `https://auth-task-app.up.railway.app/api/products/search/${searchTerm}`
          )
          .then((response) => {
            setSearchProductsData(response?.data)
            setLoading(true)
          })
          .catch((error) => { })
      }, 1000)
    }

    return () =>
      clearTimeout(
        setTimeout(() => {
          axios
            .get(
              `https://auth-task-app.up.railway.app/api/products/search/${searchTerm}`
            )
            .then((response) => {
              setSearchProductsData(response?.data)
              setLoading(true)
            })
            .catch((error) => { })
        }, 1000)
      )
  }, [searchTerm])

  return (
    <>
      <div className="relative inline-block text-left">
        <div className="hidden lg:flex lg:flex-1 lg:justify-end justify-center items-center">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-[500px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-0 bg-gray-50  dark:text-white "
                placeholder="Search Products..."
                required
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        {loading ? (
          <>
            <div
              className="absolute w-[500px] right-0 z-10 mt-2 max-h-80 overflow-hidden origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {searchProductsData?.map((val, index) => {

                  return (
                    <div key={index}>
                      <Link
                        href={`/productDetail/${val._id}`}
                        className="text-gray-700 block px-4 py-4 text-sm hover:bg-gray-200 border-b"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        {val?.title}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  )
}
export default SearchBar
