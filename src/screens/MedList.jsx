import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaPlus,FaSearch } from "react-icons/fa";

const MedList = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col p-6">
        <div className="flex justify-between items-center mb-6">



          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-black">List of Medicines (24)</span>
            </h1>
            <p className="text-gray-500 text-sm">
              List of Medicines in Inventory.
            </p>
          </div>




          <button className="bg-[#F66464] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer">
            <FaPlus className="mr-2" />
            Add New Item
          </button>
        </div>











        <div className="flex justify-between items-center mb-4 pb-4">
        <div className="relative w-1/3">
         <FaSearch className="absolute left-3 top-3 text-[#979797]" />
          <input
            type="text"
            placeholder="Search Medicine Inventory"
            className="w-130  pl-10 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7E48F0]"
          />
          </div>




          <select className="ml-4 px-10 py-2 border border-gray-400 rounded-md text-gray-500 cursor-pointer ">
            <option value="">- Select Group -</option>
            <option value="Generic">Generic Medicine</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Painkillers">Painkillers</option>
          </select>
        </div>













        {/* <div className="bg-white rounded-lg shadow-md p-4 overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-700">
                <th className="py-3 px-4 font-semibold">Medicine Name</th>
                <th className="py-3 px-4 font-semibold">Medicine ID</th>
                <th className="py-3 px-4 font-semibold">Group Name</th>
                <th className="py-3 px-4 font-semibold">Stock in Qty</th>
                <th className="py-3 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Amoxicillin Tablet",
                  id: "D06ID232435454",
                  group: "Generic Medicine",
                  stock: 350,
                },
                {
                  name: "Asprin Tablet",
                  id: "D06ID232435451",
                  group: "Generic Medicine",
                  stock: 20,
                },
                {
                  name: "Ascoril LS Syrup",
                  id: "D06ID232435452",
                  group: "Diabetes",
                  stock: 85,
                },
                {
                  name: "Azee 500 Tablet",
                  id: "D06ID232435450",
                  group: "Generic Medicine",
                  stock: 75,
                },
                {
                  name: "Allegra 120mg Tablet",
                  id: "D06ID232435455",
                  group: "Diabetes",
                  stock: 44,
                },
                {
                  name: "Alex Syrup",
                  id: "D06ID232435456",
                  group: "Generic Medicine",
                  stock: 65,
                },
                {
                  name: "Amoxyclav 625 Tablet",
                  id: "D06ID232435457",
                  group: "Generic Medicine",
                  stock: 150,
                },
                {
                  name: "Lufart Tablet",
                  id: "D06ID232435458",
                  group: "Generic Medicine",
                  stock: 270,
                },
              ].map((med, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{med.name}</td>
                  <td className="py-3 px-4">{med.id}</td>
                  <td className="py-3 px-4">{med.group}</td>
                  <td className="py-3 px-4">{med.stock}</td>
                  <td className="py-3 px-4 text-[#7E48F0] cursor-pointer">
                    View Full Detail →
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default MedList;
