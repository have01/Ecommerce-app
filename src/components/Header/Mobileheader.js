import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const Mobileheader = ({ setMobileMenuOpen }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <Disclosure as="div" className="-mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                  Product
                  <ChevronDownIcon
                    className={classNames(
                      open ? "rotate-180" : "",
                      "h-5 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Features
          </a>
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Company
          </a>
        </div>
        <div className="py-6">
          <Link
            href="/auth/sign-in"
            class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Mobileheader
