import React from "react"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler"

const mobileFilter = ({setfilterActive}) => {
  return (
    <>
      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

        <div class="fixed inset-0 z-40 flex">
          <div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <OutsideClickHandler
              onOutsideClick={() => {
                setfilterActive(false)
              }}
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  onClick={() => setfilterActive(false)}
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form class="mt-4 border-t border-gray-200">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                  <li>
                    <a href="#" class="block px-2 py-3">
                      Totes
                    </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3">
                      Backpacks
                    </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3">
                      Travel Bags
                    </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3">
                      Hip Bags
                    </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3">
                      Laptop Sleeves
                    </a>
                  </li>
                </ul>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="F-section-mobile-0"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">Color</span>
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

                  <div class="pt-6" id="filter-section-mobile-0">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          White
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Beige
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Blue
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Brown
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Green
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">Category</span>
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

                  <div class="pt-6" id="filter-section-mobile-1">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          New Arrivals
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Sale
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Travel
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Organization
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-2"
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

                  <div class="pt-6" id="filter-section-mobile-2">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          2L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          6L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-2"
                          name="size[]"
                          value="12l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          12L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-3"
                          name="size[]"
                          value="18l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          18L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-4"
                          name="size[]"
                          value="20l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          20L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-5"
                          name="size[]"
                          value="40l"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </>
  )
}

export default mobileFilter
