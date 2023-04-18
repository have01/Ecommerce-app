import React, {useState} from "react"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"

const Sort = () => {
  const [sort, setSort] = useState(false)
  const handleSort = () => {
    setSort(!sort)
  }
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setSort(false)
        }}
      >
        <div class="relative inline-block text-left">
          <div>
            <button
              class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              id="menu-button"
              onClick={handleSort}
            >
              Sort
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
            </button>
          </div>

          {sort ? (
            <div
              class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="font-medium text-gray-900 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Most Popular
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Best Rating
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  Newest
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Price: Low to High
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-4"
                >
                  Price: High to Low
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </OutsideClickHandler>
    </>
  )
}

export default Sort
