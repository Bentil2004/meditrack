import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LogIn.webp";

function Header() {
  return (
    <header className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center mt-16">
        
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          Manage Your Hospital <span className="font-bold">Inventory</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Boost efficiency, save time & money with an easy way to manage inventory.
        </p>

        <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
          <Link to="/SignUp">
            <button className="bg-[#7E48F0] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#6a3cc7] transition duration-300 
                             focus:ring-4 focus:ring-[#7E48F0]/50 outline-none cursor-pointer">
              Get Started
            </button>
          </Link>
          <button className="border-2 border-[#7E48F0] text-[#7E48F0] px-6 py-3 rounded-md shadow-md 
                             hover:bg-[#7E48F0] hover:text-white transition duration-300">
            Sign up with Google
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={logo}
          alt="Pharmacist managing inventory"
          className="shadow-lg max-w-full h-auto"
        />
      </div>
    </header>
  );
}

export default Header;
