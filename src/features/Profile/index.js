

const Profile = () => {

  return (
    <div className="conatiner mx-auto flex items-center justify-center mt-1 h-[500px]">
      <div className="w-2/4  bg-white shadow-2xl flex flex-row justify-around p-5">
        <div className="w-1/4 ">
          <div className=""></div>
          <div>Account</div>
          <div>Password</div>
        </div>
        <div className="w-3/4">
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
                placeholder="Enter your Address "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label
                htmlFor="Name"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Address "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

            </div>
            <div className="w-2/4 flex flex-col p-2 ">
              <label
                htmlFor="Name"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Address "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label
                htmlFor="Name"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Address "
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

            </div>
          </div>

          <button className="w-1/5 text-center py-3 ml-2 bg-indigo-600 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">Update</button>
        </div>
      </div>
    </div>
  )
}

export default Profile