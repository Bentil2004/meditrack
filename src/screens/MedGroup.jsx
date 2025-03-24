import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaSearch, FaChevronRight } from 'react-icons/fa';
import Sidebar from '../components/Sidebar/Sidebar';

const MedGroup = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [medicineGroups, setMedicineGroups] = useState([]);

  useEffect(() => {
    fetch('/medicinegroups.json')
      .then(response => response.json())
      .then(data => {
        const formattedGroups = data.map(group => ({
          name: group.group, 
          count: group.medicines.length
        }));
        setMedicineGroups(formattedGroups);
      })
      .catch(error => console.error('Error fetching medicine groups:', error));
  }, []);

  const filteredGroups = medicineGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/Inventory" className="text-black hover:underline">Inventory</Link>
            <span className="text-gray-500"> &gt; Medicine Groups ({medicineGroups.length})</span>
            <p className="text-gray-500 text-sm">List of Medicines in Inventory.</p>
          </h1>
          <button className="bg-[#F66464] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer">
            <FaPlus className="mr-2" />
            Add New Item
          </button>
        </div>

        <div className="flex justify-between items-center mt-5 mb-5">
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-3 text-[#979797]" />
            <input
              type="text"
              placeholder="Search Medicine Inventory"
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7E48F0]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-400">
  <table className="w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="text-left px-6 py-3">Group Name ⬍</th>
        <th className="text-left px-6 py-3">No of Medicines ⬍</th>
        <th className="text-left px-6 py-3">Action</th>
      </tr>
    </thead>
  </table>
  <div className="h-120 overflow-y-auto block">
    <table className="w-full">
      <tbody>
        {filteredGroups.map((group, index) => (
          <tr key={index} className="border-t border-gray-400">
            <td className="px-6 py-4">{group.name}</td>
            <td className="px-6 py-4">{group.count.toString().padStart(2, '0')}</td>
            <td className="px-6 py-4">
              <button 
                onClick={() => navigate(`/MedGroupDetails/${group.name}`)}
                className="text-gray-500 hover:text-gray-400 cursor-pointer flex items-center ml-3"
              >
                <div className="mr-1">View Full Detail</div>
                <FaChevronRight size={12}/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      </div>
    </div>
  );
};

export default MedGroup;
