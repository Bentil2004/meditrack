import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
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
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 868);
    };
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <FaHome size={20} /> },
    { name: "Inventory", path: "/Inventory", icon: <FaBox size={20} /> },
    { name: "Report", path: "/Report", icon: <FaChartBar size={20} /> },
    { name: "Settings", path: "/Settings", icon: <FaCog size={20} /> },
    { name: "Staffs", path: "/Staffs", icon: <FaUsers size={20} /> },
  ];

  return (
    <div
      className={`h-screen bg-white shadow-md flex flex-col p-4 transition-all duration-200 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between">
        {!isCollapsed && <img src={logo} alt="MediTrack Logo" className="h-7" />}
        <button
          className="p-3 rounded-lg hover:bg-gray-200 transition ml-1.5 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars size={18} />
        </button>
      </div>

      <ul className="flex-1 mt-1 space-y-2">
        {menuItems.map((item) => (
          <li key={item.path} className="relative group">
            <Link
              to={item.path}
              className={`flex items-center p-3 rounded-lg text-lg transition-all ${
                (location.pathname.startsWith(item.path) ||
                  (item.path === "/Inventory" &&
                    (location.pathname.startsWith("/MedList") ||
                     location.pathname.startsWith("/MedGroup") ||
                     location.pathname.startsWith("/MedDetail"))))
                  ? "bg-[#7E48F0] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="w-8 flex justify-center">{item.icon}</span>
              {!isCollapsed && <span className="flex-1 text-left">{item.name}</span>}
            </Link>

            {isCollapsed && (
              <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-auto relative group">
        <Link
          to="/Login"
          className="flex items-center space-x-4 p-3 text-red-500 hover:bg-red-100 rounded-lg mb-10"
        >
          <span className="w-8 flex justify-center">
            <FaSignOutAlt size={20} />
          </span>
          {!isCollapsed && <span className="flex-1 text-left">Logout</span>}
        </Link>

        {isCollapsed && (
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
