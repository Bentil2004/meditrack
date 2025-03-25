import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaTrash, FaPlus } from 'react-icons/fa';
import { doc, getDoc, updateDoc, arrayUnion, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Sidebar from '../components/Sidebar/Sidebar';

const MedGroupDetails = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [groupData, setGroupData] = useState(null);
  const [newMedicine, setNewMedicine] = useState('');
  const [newStock, setNewStock] = useState('');

  useEffect(() => {
    const fetchGroupData = async () => {
      const groupRef = doc(db, 'medicineGroups', groupName);
      const groupSnap = await getDoc(groupRef);

      if (groupSnap.exists()) {
        setGroupData(groupSnap.data());
      } else {
        console.error('Group not found');
      }
    };

    fetchGroupData();
  }, [groupName]);

  if (!groupData) {
    return <div>Loading...</div>;
  }

  const filteredMedicines = groupData.medicines
    ? groupData.medicines.filter((med) =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

    const handleAddMedicine = async () => {
      if (newMedicine && newStock) {
        const groupRef = doc(db, 'medicineGroups', groupName);
        const newMed = { name: newMedicine, stock: parseInt(newStock) };
    
        const updatedMedicines = [...groupData.medicines, newMed];
    
        await updateDoc(groupRef, {
          medicines: updatedMedicines,
          count: updatedMedicines.length,
        });
    
        setGroupData((prevData) => ({
          ...prevData,
          medicines: updatedMedicines,
          count: updatedMedicines.length,
        }));
    
        setNewMedicine('');
        setNewStock('');
      }
    };
    

  const handleRemoveMedicine = async (medicineName) => {
    const groupRef = doc(db, 'medicineGroups', groupName);
    const updatedMedicines = groupData.medicines.filter(med => med.name !== medicineName);

    await updateDoc(groupRef, {
      medicines: updatedMedicines,
      count: updatedMedicines.length, 
    });

    setGroupData((prevData) => ({
      ...prevData,
      medicines: updatedMedicines,
      count: updatedMedicines.length,
    }));
  };

  const handleDeleteGroup = async () => {
    await deleteDoc(doc(db, 'medicineGroups', groupName));
    navigate('/MedGroup');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-black cursor-pointer hover:underline" onClick={() => navigate('/Inventory')}>
              Inventory
            </span>  &gt; <span className="text-black cursor-pointer hover:underline" onClick={() => navigate('/MedGroup')}>
              Medicine Groups
            </span>   &gt; <span className="text-gray-400">{groupData?.name} ({groupData?.count})</span>
          </h1>
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

        <div className="mt-5 p-4 bg-white shadow-md rounded-lg border border-gray-300">
          <h2 className="text-lg font-bold mb-2">Add New Medicine</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Medicine Name"
              value={newMedicine}
              onChange={(e) => setNewMedicine(e.target.value)}
              className="w-1/3 px-3 py-2 border border-gray-400 rounded-md"
            />
            <input
              type="number"
              placeholder="Stock"
              value={newStock}
              onChange={(e) => setNewStock(e.target.value)}
              className="w-1/3 px-3 py-2 border border-gray-400 rounded-md"
            />
            <button
              onClick={handleAddMedicine}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-green-600 transition cursor-pointer"
            >
              <FaPlus className="mr-2" /> Add
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-400 mt-15">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left px-6 py-3">Medicine Name</th>
                <th className="text-left px-6 py-3">Stock</th>
                <th className="text-left px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedicines.map((med, index) => (
                <tr key={index} className="border-t border-gray-400">
                  <td className="px-6 py-4">{med.name}</td>
                  <td className="px-6 py-4">{med.stock}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRemoveMedicine(med.name)}
                      className="text-red-500 flex items-center hover:text-red-400 cursor-pointer"
                    >
                      <FaTrash className="mr-1" /> Remove from Group
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <button
            onClick={handleDeleteGroup}
            className="bg-[#F66464] text-white px-6 py-3 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer"
          >
            <FaTrash className="mr-2" /> Delete Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedGroupDetails;
