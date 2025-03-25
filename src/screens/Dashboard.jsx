import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/TopBar/Topbar";
import GraphChart from "../components/GraphChart";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const [institutionName, setInstitutionName] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedInstitution = localStorage.getItem("institutionName");
    setInstitutionName(storedInstitution || "Medical Institution");
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar collapsed={isSidebarCollapsed} />

      <div className="flex-1 flex flex-col h-screen">
        <Topbar />

        <div className="p-4 sm:p-6 space-y-6 flex-1 overflow-auto">
          <h2 className="text-xl sm:text-2xl font-bold">{institutionName} Dashboard</h2>
          <p className="text-gray-600">A quick data overview of the inventory.</p>

          <div className="w-full">
            <GraphChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-sm font-semibold">Inventory</h3>
                <a href="#" className="text-xs text-gray-600 flex items-center">
                  Go to configuration <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-2xl sm:text-3xl">9</p>
                  <p className="text-sm text-gray-500">Total no of Medicines</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl">10</p>
                  <p className="text-sm text-gray-500">Medicine Groups</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-sm font-semibold">Quick Report</h3>
                <select className="text-sm text-gray-600 bg-transparent outline-none">
                  <option>January 2022</option>
                  <option>February 2022</option>
                  <option>March 2022</option>
                  <option>April 2022</option>
                  <option>May 2022</option>
                  <option>June 2022</option>
                  <option>July 2022</option>
                </select>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-2xl sm:text-3xl">0</p>
                  <p className="text-sm text-gray-500">Qty of Medicines Sold</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl">0</p>
                  <p className="text-sm text-gray-500">Invoices Generated</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-sm font-semibold">Fiifi’s Pharmacy</h3>
                <a href="#" className="text-xs text-gray-600 flex items-center">
                  Go to Management <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-2xl sm:text-3xl">1</p>
                  <p className="text-sm text-gray-500">Total no. of Suppliers</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl">05</p>
                  <p className="text-sm text-gray-500">Total Users</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-sm font-semibold">Customers</h3>
                <a href="#" className="text-xs text-gray-600 flex items-center">
                  Go to Customers Page <ArrowRight size={12} className="ml-1" />
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-2xl sm:text-3xl">8</p>
                  <p className="text-sm text-gray-500">Total no. of Customers</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl">Lufart</p>
                  <p className="text-sm text-gray-500">Frequently bought Item</p>
                </div>
              </div>
            </div>

          </div>  
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
