import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import logo from "../assets/pfp.jpeg"

function AccountSettings() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-400">
        <h2 className="text-2xl font-medium text-[#8D9095] mb-4">Account Settings</h2>
        
        <div className="grid grid-cols-2 gap-120 items-center">
          <div className="grid gap-6 w-200">
            <div>
              <label className="block text-gray-700 mb-1">Medical Institution Name:</label>
              <input type="text" className="w-full border p-2 rounded-md border-gray-400" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email:</label>
              <input type="email" className="w-full border p-2 rounded-md border-gray-400" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Admin Name:</label>
              <input type="text" className="w-full border p-2 rounded-md border-gray-400" />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Admin Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border p-2 rounded-md pr-10 border-gray-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>



            <div className="bg-gray-100 p-4 rounded-md w-80 h-50">
              <h3 className="text-gray-700 font-semibold">Password Requirements</h3>
              <ol className="text-gray-600 text-sm list-disc pl-5 ">
                <li>At least 6 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one number</li>
              </ol>
            </div>
        </div>




        <div className="flex items-center gap-4 mt-4">
          <label className="text-gray-700">Avatar:</label>
          <img src={logo} alt="Avatar" className="w-12 h-12 rounded-full" />
          <button className="bg-[#829FDF] text-white px-4 py-1 rounded-md cursor-pointer">Edit</button>
          <button className="bg-[#F66464] text-white px-4 py-1 rounded-md cursor-pointer">Delete</button>
        </div>


      </div>


        <div className="flex justify-end mt-6 space-x-3">
          {/* <button className="border border-gray-400 bg-white px-4 py-2 rounded-md cursor-pointer">Cancel</button> */}
          <button className="bg-[#7E48F0] text-white px-4 py-2 rounded-md cursor-pointer">Save Changes</button>
        </div>






      <div className="bg-white border border-gray-400 shadow-md rounded-lg p-6 mt-4">
        <h3 className="text-gray-400 font-medium text-xl">Delete Account</h3>
        <p className="text-gray-600 text-sm mt-1">
          Deleting your account is permanent and cannot be retrieved.
        </p>
        <button className="bg-[#F66464] text-white px-4 py-2 rounded-md mt-4 cursor-pointer">Delete Account</button>
      </div>



    </div>
  );
}

export default AccountSettings;
