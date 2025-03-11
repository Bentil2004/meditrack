import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/TopBar/Topbar";
import logo1 from "../assets/Group_Med.webp";
import logo from "../assets/List_Med.jpg";

function Inventory() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer border-4 border-transparent hover:border-purple-500 transition-all w-150 h-100 flex flex-col justify-between"
              onClick={() => navigate("/MedList")}
            >
              <img
                src={logo}
                alt="List of Medicines"
                className="rounded-lg w-full h-72 object-cover"
              />
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">List Of Medicines</p>
                <span className="text-2xl">→</span>
              </div>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer border-4 border-transparent hover:border-purple-500 transition-all w-150 h-100 flex flex-col justify-between"
              onClick={() => navigate("/MedGroup")}
            >
              <img
                src={logo1}
                alt="Medicine Group"
                className="rounded-lg w-full h-72 object-cover"
              />
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Medicine Group</p>
                <span className="text-2xl">→</span>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Inventory;
