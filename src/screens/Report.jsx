import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/TopBar/Topbar";

function Report() {
    return (
      <div className="flex h-screen bg-gray-100">
           <Sidebar />
  
           <div className="flex-1 flex flex-col">
           <Topbar />
           <div className="p-6 space-y-6">
             <h2 className="text-2xl font-bold">Report</h2>
           </div>     
      </div>
      </div>
  )
}

export default Report