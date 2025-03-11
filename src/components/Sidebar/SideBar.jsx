import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaChartBar,
  FaCog,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../assets/newLogo.png";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <FaHome size={20} /> },
    { name: "Inventory", path: "/Inventory", icon: <FaBox size={20} /> },
    { name: "Report", path: "/Report", icon: <FaChartBar size={20} /> },
    { name: "Settings", path: "/Settings", icon: <FaCog size={20} /> },
    { name: "Staffs", path: "/Staffs", icon: <FaUsers size={20} /> },
  ];

  return (
    <div className="w-74 h-screen bg-white shadow-md flex flex-col p-5">
      <div className="flex items-center justify-center mb-8 mr-8" >
        <img src={logo} alt="MediTrack Logo" className="h-10" />
      </div>

      <ul className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-4 p-3 rounded-lg text-lg transition-all text-center ${
                location.pathname === item.path
                  ? "bg-[#7E48F0] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="w-6 flex justify-center">{item.icon}</span>
              <span className="flex-1 text-left">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link
          to="/Login"
          className="flex items-center space-x-4 p-3 text-red-500 hover:bg-red-100 rounded-lg mb-15"
        >
          <span className="w-6 flex justify-center">
            <FaSignOutAlt size={20} />
          </span>
          <span className="flex-1 text-left">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
