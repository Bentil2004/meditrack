import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaUsers, FaSearch, FaFilter, FaTrash } from "react-icons/fa";
import logo from "../assets/pfp.jpeg";

function Staffs() {
  const [staffMembers, setStaffMembers] = useState([
    { id: 1, name: "Fiifi Ampoma Bentil", email: "fiifiampoma@gmail.com", image: logo },
    { id: 2, name: "Gino Kofi Freeman", email: "gino69@gmail.com", image: logo },
    { id: 3, name: "Richmond Osei", email: "richmondosei@gmail.com", image: logo },
    { id: 4, name: "Joana Bentil", email: "joanaben@gmail.com", image: logo },
    { id: 5, name: "Daniel Kofi", email: "danielkofi@gmail.com", image: logo },
    { id: 6, name: "Sarah Mensah", email: "sarahmensah@gmail.com", image: logo },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: "", email: "" });

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setNewStaff({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStaff.name && newStaff.email) {
      setStaffMembers([...staffMembers, { id: staffMembers.length + 1, ...newStaff, image: logo }]);
      closeModal();
    }
  };

  const handleDelete = (id) => {
    setStaffMembers(staffMembers.filter((staff) => staff.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      <Sidebar />

      <div className="flex-grow p-6 space-y-6 relative">
        <div className="pb-4">
          <h2 className="text-4xl font-medium text-[#979797]">Staffs</h2>
          <h3 className="text-xl font-semibold text-gray-600">Who has access?</h3>
        </div>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="relative bg-purple-100 p-4 rounded-lg w-16 flex justify-center items-center">
            <FaUsers className="text-purple-600 text-3xl" />
            <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {staffMembers.length}
            </span>
          </div>



          <button
            onClick={openModal}
            className="bg-[#F66464] text-white px-6 py-3 rounded-lg shadow hover:bg-red-300 cursor-pointer"
          >
            + Add New Staff
          </button>
        </div>





        <div className="flex items-center justify-between pb-4">
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-3 text-[#979797]" />
            <input
              type="text"
              placeholder="Find Staff"
              className="w-full pl-10 pr-4 py-2 border border-[#979797] rounded-lg outline-none"
            />
          </div>
          <button className="flex items-center space-x-2 text-[#979797]">
            <FaFilter />
            <span>- Select Date Added -</span>
          </button>
        </div>







        <div className="bg-white rounded-lg shadow border border-[#979797] max-h-[500px] overflow-y-auto">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="flex items-center justify-between p-4 border-b border-[#979797] last:border-0">
              <div className="flex items-center space-x-4">
                <img src={staff.image} alt={staff.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-light">{staff.name}</p>
                  <p className="text-sm text-[#7E48F0]">{staff.email}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(staff.id)}
                className="text-[#F66464] hover:bg-red-100 p-2 rounded"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>









        <div className="absolute bottom-10 left-0 w-full px-6 flex items-center justify-between text-gray-600">
          <p>Showing 1 - {staffMembers.length} results of {staffMembers.length}</p>
          <div className="flex items-center space-x-4">
            <button className="border px-3 py-1 rounded">&lt;</button>
            <span>Page 01</span>
            <button className="border px-3 py-1 rounded">&gt;</button>
          </div>
        </div>
      </div>








      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-150 shadow-lg relative " >

            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer">
              ✖
            </button>

            <h2 className="text-xl font-bold text-purple-600 mb-4">Add Staff</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Staff Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newStaff.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newStaff.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <button type="submit" className="bg-[#F66464] text-white px-6 py-2 rounded-lg w-full cursor-pointer">
                Save Details
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Staffs;
