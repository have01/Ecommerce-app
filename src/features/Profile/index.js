import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"
import {useState} from "react"

const Profile = ({userProfile}) => {
  const [firstName, setFirstName] = useState("")
  const data = [
    {
      label: "Account Profile",
      value: "profile",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Password",
      value: "password",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ]
  return (
    <div className=" flex items-center justify-center mt-1 h-[500px]">
      <Tabs
        value="profile"
        className="w-2/4 bg-white shadow-2xl flex flex-row justify-around p-5"
      >
        <TabsHeader
          className="bg-transparent flex flex-col w-[200px]"
          indicatorProps={{
            className: "bg-blue-500/10 shadow-none text-blue-500",
          }}
        >
          {data.map(({label, value}) => (
            <Tab
              key={value}
              value={value}
              className="flex border-b w-[180px] p-3  items-center"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key={`profile`} value={`profile`}>
            <div className="w-full">
              <div className="w-full flex flex-row justify-around items-center">
                <div className="w-2/4 flex flex-col p-2 ">
                  <label
                    htmlFor="Name"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={userProfile?.name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your Enter"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="Name"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Gender "
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="w-2/4 flex flex-col p-2 ">
                  <label
                    htmlFor="Email"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    value={userProfile?.email}
                    placeholder="Enter your Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="Name"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Phone number "
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="w-1/5 text-center py-2 ml-2 bg-indigo-600 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                Update
              </button>
            </div>
          </TabPanel>
          <TabPanel key={`password`} value={`password`}>
            <div className="w-full">
              <div className="w-full flex flex-col ">
                <div className="w-2/4 flex flex-col p-2 ">
                  <label
                    htmlFor="old password"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Old password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your old password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="w-full flex flex-col p-2 ">
                  <label
                    htmlFor="new password"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your new password"
                    className="bg-gray-50 border w-2/4 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="Name"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Confirm password "
                    className="bg-gray-50 border w-2/4 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="w-1/5 text-center py-2 ml-2 bg-indigo-600 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                Update
              </button>
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default Profile
