import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaTrash } from 'react-icons/fa';
import Sidebar from '../components/Sidebar/Sidebar';

const MedGroupDetails = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    fetch('/medicinegroups.json')
      .then(response => response.json())
      .then(data => {
        const selectedGroup = data.find(group => group.group === groupName);
        if (selectedGroup) {
          setGroupData(selectedGroup);
        }
      })
      .catch(error => console.error('Error fetching medicine group details:', error));
  }, [groupName]);

  if (!groupData) {
    return <div>Loading...</div>;
  }

  const filteredMedicines = groupData.medicines.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-black cursor-pointer hover:underline" onClick={() => navigate('/Inventory')}>
              Inventory
            </span>{' '}
            &gt; <span className="text-black cursor-pointer hover:underline" onClick={() => navigate('/MedGroup')}>
              Medicine Groups
            </span>{' '}
            &gt; <span className="text-gray-400">{groupData.group} ({filteredMedicines.length})</span>
            <p className="text-gray-500 text-sm">Detailed view of a medicine group.</p>
          </h1>
          {/* <button className="bg-[#F66464] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer">
            + Add New Group
          </button> */}
        </div>

        <div className="relative w-1/3 mt-5 mb-5">
          <FaSearch className="absolute left-3 top-3 text-[#979797]" />
          <input
            type="text"
            placeholder="Search for Medicine"
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7E48F0]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-400">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left px-6 py-3">Medicine Name</th>
                <th className="text-left px-6 py-3">No of Medicines</th>
                <th className="text-left px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedicines.map((med, index) => (
                <tr key={index} className="border-t border-gray-400">
                  <td className="px-6 py-4">{med.name}</td>
                  <td className="px-6 py-4">{med.stock.toString().padStart(2, '0')}</td>
                  <td className="px-6 py-4">
                    <button className="text-red-500 flex items-center hover:text-red-400">
                      <FaTrash className="mr-1" /> Remove from Group
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <button className="bg-[#F66464] text-white px-6 py-3 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer">
            <FaTrash className="mr-2" /> Delete Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedGroupDetails;
