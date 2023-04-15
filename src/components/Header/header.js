import {useState} from "react"
import {Dialog, Disclosure} from "@headlessui/react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import {useSelector} from "react-redux"
import ProfileDropdown from "../ProfileDropdown"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid"
import Link from "next/link"
import SearchBar from "../SearchBar"
import {Menu} from "@headlessui/react"
import Image from "next/image"
import HomeIcon from "@mui/icons-material/Home"
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded"
import Mobileheader from "./Mobileheader"
const callsToAction = [
  {name: "Watch demo", href: "#", icon: PlayCircleIcon},
  {name: "Contact sales", href: "#", icon: PhoneIcon},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const profileData = useSelector((state) => state?.profile?.profile)

  return (
    <>
      <header className=" bg-[#0F172A] shadow-lg">
        <div className=" container mx-auto">
          <div
            className="mx-auto flex w-full items-center justify-between p-4 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-center lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-lg font-semibold leading-6 ml-1 text-white">
                  <HomeIcon />
                </span>
              </Link>
            </div>
            <Menu as="div" className="relative text-left">
              <Link href="/cart">
                <div className="relative">
                  <ShoppingCartIcon className="text-2xl mr-3 cursor-pointer text-white  hover:text-purple-600 transition transform duration-200" />

                  {true > 0 && (
                    <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-2 -right-2 rounded-full top- text-white">
                      1
                    </div>
                  )}
                </div>
              </Link>
            </Menu>
            <div className="items-center hidden  lg:flex-1 lg:flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <span className="text-lg font-semibold leading-6 ml-1 text-white">
                Ecommerce app
              </span>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end md:flex justify-center items-center">
              <SearchBar />
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end justify-center items-center">
              <div className="mr-2">
                {profileData?.user?.name ? (
                  <ProfileDropdown profileData={profileData} />
                ) : (
                  <Link
                    href="/auth/sign-in"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Login
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <Link href="/cart">
                    <div className="relative">
                      <ShoppingCartIcon className="text-2xl mr-3 cursor-pointer text-white  hover:text-purple-600 transition transform duration-200" />

                      {true > 0 && (
                        <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-2 -right-2 rounded-full top- text-white">
                          1
                        </div>
                      )}
                    </div>
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
              <Mobileheader
                setMobileMenuOpen={setMobileMenuOpen}
                profile={profileData}
              />
            </Dialog.Panel>
          </Dialog>
        </div>
      </header>
    </>
  )
}
export default Header
