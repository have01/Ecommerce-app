import { Fragment, useContext } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"
import { profileAction } from "../redux/profileSlice"
import { useRouter } from "next/router"
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded"
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
export default function Example() {
  const profileData = useSelector((state) => state?.profile?.profile)
  const router = useRouter()
  const dispatch = useDispatch()
  const handleSignOut = async () => {
    await fetch("https://auth-task-app.up.railway.app/api/users/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
        Authorization: `Bearer ${profileData.token}`,
      },
    })
      .then(async (response) => {
        Cookies.remove("tokken")
        Cookies.remove("userName")
        dispatch(profileAction.setProfile({}))
        router.push("/")
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Person2RoundedIcon /> {profileData?.user?.name}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <AccountCircleRoundedIcon /> Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <ShoppingCartRoundedIcon /> My order
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <FavoriteRoundedIcon /> Wishlist
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  <ExitToAppRoundedIcon /> Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
