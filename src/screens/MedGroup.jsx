import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSearch, FaChevronRight } from "react-icons/fa";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Sidebar from "../components/Sidebar/Sidebar";

const MedGroup = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [medicineGroups, setMedicineGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newGroup, setNewGroup] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "medicineGroups"), (snapshot) => {
      const groups = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        count: doc.data().count || 0,
      }));
      setMedicineGroups(groups);
    });
  
    return () => unsubscribe(); 
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddGroup = async (e) => {
    e.preventDefault(); 
    
    if (newGroup.trim()) {
      const docRef = await addDoc(collection(db, "medicineGroups"), { 
        name: newGroup, 
        count: 0, 
        medicines: [] 
      });

      setMedicineGroups([...medicineGroups, { id: docRef.id, name: newGroup, count: 0 }]);
      setNewGroup("");
      closeModal(); 
    } else {
      alert("Please enter a valid group name.");
    }
  };

  const filteredGroups = medicineGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-black cursor-pointer hover:underline" onClick={() => navigate('/Inventory')}>
              Inventory
            </span>  &gt;  <span className="text-gray-400">Medicine Groups ({medicineGroups.length})</span>
          </h1>
          <button onClick={openModal} className="bg-[#F66464] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer">
            <FaPlus className="mr-2" />
            Add New Group
          </button>
        </div>

        <div className="relative w-1/3 mt-5">
          <FaSearch className="absolute left-3 top-3 text-[#979797]" />
          <input
            type="text"
            placeholder="Search Medicine Groups"
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden border mt-5">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-6 py-3">Group Name</th>
                <th className="px-6 py-3">No of Medicines</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredGroups.map((group) => (
                <tr key={group.id} className="border-t">
                  <td className="px-6 py-3">{group.name}</td>
                  <td className="px-6 py-3">{group.count}</td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => navigate(`/MedGroupDetails/${group.id}`)}
                      className="text-gray-500 flex items-center cursor-pointer"
                    >
                      View Details <FaChevronRight size={12} className="ml-1"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Add New Group</h2>
              <form onSubmit={handleAddGroup}>
                <input
                  type="text"
                  placeholder="Group Name"
                  value={newGroup}
                  onChange={(e) => setNewGroup(e.target.value)}
                  className="w-full p-2 border border-gray-400 rounded"
                />
                <div className="flex justify-end space-x-4 mt-4">
                  <button type="button" onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                  <button type="submit" className="bg-[#F66464] text-white px-4 py-2 rounded">Add</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedGroup;