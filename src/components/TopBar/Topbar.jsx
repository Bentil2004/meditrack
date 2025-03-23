import React, { useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import profilePic from "../../assets/pfp.jpeg";

const Topbar = () => {
  const [adminName, setAdminName] = useState("");
  const [adminRole, setAdminRole] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    const storedRole = localStorage.getItem("adminRole");

    setAdminName(storedName || "Admin");
    setAdminRole(storedRole || "Admin");
  }, []);

  return (
    <div className="bg-white shadow-md p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-3 sm:space-y-0">

      <div className="w-full sm:w-auto flex justify-center sm:flex-1">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search for products, inventories, etc"
            className="w-full p-2 pl-10 rounded-lg bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-[#7E48F0]"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6">
        <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
        
        <div className="flex items-center space-x-3">
          <img src={profilePic} alt="User" className="w-10 h-10 rounded-full" />
          <div className="hidden sm:block">
            <h4 className="text-gray-700">{adminName}</h4>
            <p className="text-sm text-gray-500">{adminRole}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Topbar;
