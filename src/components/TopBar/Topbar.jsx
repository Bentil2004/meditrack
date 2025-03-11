import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import profilePic from "../../assets/pfp.jpeg";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">

      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products, inventories, etc"
            className="w-full p-2 pl-10  rounded-lg bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-6">


        <div className="flex items-center space-x-3">
          <img
            src={profilePic}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-gray-700">Bentil Fiifi Ampoma</h4>
            <p className="text-sm text-gray-500">Super Admin</p>
          </div>

         <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-gray-800 ml-10 mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
