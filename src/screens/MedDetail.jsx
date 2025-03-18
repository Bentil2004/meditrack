import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaChevronRight, FaEdit, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar/Sidebar";

const MedDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [medicine, setMedicine] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetch("/medicines.json")
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
        const selectedMed = data.find((med) => med.id === id);
        setMedicine(selectedMed);
      })
      .catch((err) => console.error("Error loading medicines:", err));
  }, [id]);

  if (!medicine) {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 flex items-center justify-center">
          <p className="text-red-500 text-xl">Medicine not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/inventory" className="text-black hover:underline">
              Inventory
            </Link>{" "}
            &gt;{" "}
            <Link to="/medlist" className="text-black hover:underline">
              List of Medicines
            </Link>{" "}
            <span className="text-gray-500">&gt; {medicine.name}</span>
          </h1>

          {/* <button 
            onClick={() => setIsEditing(true)}
            className="bg-[#1388BD] text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaEdit className="mr-2" /> Edit Details
          </button> */}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-10">
          <div className="bg-white rounded-lg shadow-md border border-gray-400 p-4">
            <h2 className="font-medium border-b border-gray-400 pb-2">Medicine Details</h2>
            <div className="grid grid-cols-2 mt-3">
              <div>
                <p className="text-xl font-bold">{medicine.id}</p>
                <p className="text-gray-400 text-sm">Medicine ID</p>
              </div>
              <div>
                <p className="text-xl font-bold">{medicine.group}</p>
                <p className="text-gray-400 text-sm">Medicine Group</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-400 p-4">
            <div className="flex justify-between border-b border-gray-400 pb-2">
              <h2 className="font-medium">Inventory in Qty</h2>
              {/* <button className="text-[#1388BD] flex items-center font-light">
                Send Stock Request <FaChevronRight className="ml-1" />
              </button> */}
            </div>
            <div className="grid grid-cols-3 mt-3">
              <div>
                <p className="text-xl font-bold">298</p>
                <p className="text-gray-400 text-sm">Lifetime Supply</p>
              </div>
              <div>
                <p className="text-xl font-bold">290</p>
                <p className="text-gray-400 text-sm">Lifetime Sales</p>
              </div>
              <div>
                <p className="text-xl font-bold">{medicine.stock}</p>
                <p className="text-gray-400 text-sm">Stock Left</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-4 border border-gray-400 p-4">
          <h2 className="font-light border-b border-gray-400 pb-2">How to Use</h2>
          <p className="text-gray-600 mt-2">{medicine.usage}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-4 border border-gray-400 p-4">
          <h2 className="font-light border-b border-gray-400 pb-2">Side Effects</h2>
          <div className="text-gray-600 mt-2">
            <strong>Common:</strong>
            <ul className="list-disc ml-6">
              {medicine.sideEffects.common.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
            <strong className="mt-2 block">Rare:</strong>
            <ul className="list-disc ml-6">
              {medicine.sideEffects.rare.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
            <strong className="mt-2 block">Serious:</strong>
            <ul className="list-disc ml-6">
              {medicine.sideEffects.serious.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
            <strong className="mt-2 block">Notes:</strong>
            <p className="ml-6">{medicine.sideEffects.notes}</p>
          </div>
        </div>

        <button 
          onClick={() => setShowDeleteModal(true)}
          className="cursor-pointer hover:bg-[#dd7a7a] bg-[#F66464] text-white px-4 py-2 rounded-md flex items-center mt-6"
        >
          <FaTrashAlt className="mr-2" /> Delete Medicine
        </button>

        {showDeleteModal && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this medicine?</p>
              <div className="flex justify-end space-x-4 mt-4">
                <button onClick={() => setShowDeleteModal(false)} className="bg-gray-300 px-4 py-2 rounded cursor-pointer">Cancel</button>
                <button onClick={() => navigate("/medlist")} className="bg-[#F66464] text-white px-4 py-2 rounded hover:bg-[#dd7a7a] cursor-pointer">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedDetail;
