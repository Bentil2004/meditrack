import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/TopBar/Topbar";
import GraphChart from "../components/GraphChart";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Fiifi’s Pharmacy Dashboard</h2>
          <p className="text-gray-600">A quick data overview of the inventory.</p>

          <GraphChart />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-600">Inventory</h3>
              <p className="text-2xl font-bold">50,000</p>
              <p className="text-xs text-gray-500">Total no of Medicines</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-600">Quick Report</h3>
              <p className="text-2xl font-bold">83,060</p>
              <p className="text-xs text-gray-500">Qty of Medicines Sold</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-600">Customers</h3>
              <p className="text-2xl font-bold">860</p>
              <p className="text-xs text-gray-500">Total no. of Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
