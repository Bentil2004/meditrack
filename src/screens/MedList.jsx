import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaPlus, FaSearch, FaTrash, FaEdit, FaBoxOpen, FaSyncAlt, FaChevronRight } from "react-icons/fa";
import { collection, getDocs, onSnapshot, updateDoc, deleteDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

const MedList = () => {
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [newMed, setNewMed] = useState({ name: "", id: "", group: "", stock: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [medicineGroups, setMedicineGroups] = useState([]);

  useEffect(() => {
    const unsubscribeGroups = onSnapshot(collection(db, "medicineGroups"), (snapshot) => {
      const groups = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setMedicineGroups(groups);
    });

    const unsubscribeMedicines = onSnapshot(collection(db, "medicines"), (snapshot) => {
      const medicines = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMedicines(medicines);
    });

    return () => {
      unsubscribeGroups();
      unsubscribeMedicines();
    };
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMed({ ...newMed, [name]: value });
  };

  const generateID = () => {
    const randomID = `MEDID${Math.floor(100000 + Math.random() * 900000)}`;
    setNewMed({ ...newMed, id: randomID });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMed.name && newMed.id && newMed.group && newMed.stock) {
      if (isEditing) {
        const docRef = doc(db, "medicines", newMed.id);
        await updateDoc(docRef, newMed);
      } else {
        await addDoc(collection(db, "medicines"), newMed);
      }
      setShowModal(false);
    }
  };

  const handleDelete = async (id) => {
    setShowDeleteModal(id);
  };

  const confirmDelete = async () => {
    const docRef = doc(db, "medicines", showDeleteModal);
    await deleteDoc(docRef);
    setShowDeleteModal(null);
  };

  const openEditModal = (med) => {
    setNewMed(med);
    setIsEditing(true);
    setShowModal(true);
  };

  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchTerm)
  );

  const getGroupName = (groupId) => {
    const group = medicineGroups.find(group => group.id === groupId);
    return group ? group.name : 'Unknown Group'; 
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/Inventory" className="text-black hover:underline">
              Inventory
            </Link>{" "}
            <span className="text-gray-500"> &gt; List of Medicines ({medicines.length})</span>
            <p className="text-gray-500 text-sm">List of Medicines in Inventory.</p>
          </h1>
          <button onClick={() => setShowModal(true)} className="bg-[#F66464] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-[#dd7a7a] transition cursor-pointer">
            <FaPlus className="mr-2" />
            Add New Item
          </button>
        </div>

        <div className="relative w-1/3 mt-5">
          <FaSearch className="absolute left-3 top-3 text-[#979797]" />
          <input
            type="text"
            placeholder="Search Medicine Inventory"
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md"
            onChange={handleSearch}
          />
        </div>

        <div className="bg-white rounded-lg shadow border border-[#979797] max-h-[2000px] overflow-y-auto">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((med) => (
              <div key={med.id} className="flex items-center justify-between p-4 border-b border-[#979797] last:border-0">
                <div>
                  <p className="font-light">{med.name}</p>
                  <p className="text-sm text-gray-500">ID: {med.id} | Stock: {med.stock}</p>
                  <p className="text-sm text-[#7E48F0]">{getGroupName(med.group)}</p>
                </div>
                <div className="flex space-x-3">
                  <button onClick={() => openEditModal(med)} className="text-blue-600 hover:bg-blue-100 p-2 rounded cursor-pointer">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(med.id)} className="text-[#F66464] hover:bg-red-100 p-2 rounded cursor-pointer">
                    <FaTrash />
                  </button>
                  <button onClick={() => navigate(`/MedDetail/${med.id}`)} className="text-gray-500 hover:text-gray-400 cursor-pointer flex items-center ml-3">
                    <div className="mr-1">View Full Detail</div>
                    <FaChevronRight size={12}/>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 flex flex-col items-center text-gray-500">
              <FaBoxOpen className="text-5xl mb-2" />
              <p>No medicines in stock.</p>
            </div>
          )}
        </div>

        {showModal && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-6">{isEditing ? "Edit Medicine" : "Add New Medicine"}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input type="text" name="id" value={newMed.id} onChange={handleChange} placeholder="ID" className="w-full p-2 border border-gray-400 rounded" required />
                  <button type="button" onClick={generateID} className="absolute right-2 top-2 text-[#7E48F0] hover:text-[#5a2bbd]">
                    <FaSyncAlt />
                  </button>
                </div>
                <input type="text" name="name" value={newMed.name} onChange={handleChange} placeholder="Medicine Name" className="w-full p-2 border border-gray-400 rounded" required />
                <select name="group" value={newMed.group} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required>
                  <option value="">Select Group</option>
                  {medicineGroups.map(group => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                  ))}
                </select>
                <input type="number" name="stock" value={newMed.stock} onChange={handleChange} placeholder="Stock Quantity" className="w-full p-2 border border-gray-400 rounded" required />
                <div className="flex justify-end space-x-4">
                  <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded cursor-pointer">Cancel</button>
                  <button type="submit" className="bg-[#F66464] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#dd7a7a]">{isEditing ? "Update" : "Add"}</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this medicine?</p>
              <div className="flex justify-end space-x-4 mt-4">
                <button onClick={() => setShowDeleteModal(null)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                <button onClick={confirmDelete} className="bg-[#F66464] text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedList;
