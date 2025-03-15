import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

function MedGroup() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />


    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-semibold">Group Of Medicines</h1>
      </div>
    </div>
   </div>
  )
}

export default MedGroup