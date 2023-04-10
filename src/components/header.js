import { useState } from "react"
import { Dialog, Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"
import ProfileDropdown from "./ProfileDropdown"
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Menu } from "@headlessui/react"
import Image from "next/image"

import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded"
import Mobileheader from "./Mobileheader"
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const profileData = useSelector((state) => state?.profile?.profile)

  return (
    <>
      <header className="bg-white shadow-lg">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <Image></Image>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end justify-center items-center">
            <div className="mr-2">
              {profileData?.user?.name ? (
                <ProfileDropdown profileData={profileData} />
              ) : (
                <Link
                  href="/auth/sign-in"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Login
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <Link href="/cart">
                  <button className="inline-flex w-full justify-center items-center gap-x-1.5  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 ">
                    <ShoppingBasketRoundedIcon /> Cart
                  </button>
                </Link>
              </Menu>
            </div>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <h1>Ecommerce App</h1>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Mobileheader setMobileMenuOpen={setMobileMenuOpen} />
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
export default Header
