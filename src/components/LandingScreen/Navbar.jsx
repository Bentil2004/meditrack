import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/newLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex items-center justify-between">
      <a href="/" className="flex-shrink-0">
        <img src={logo} alt="MediTrack Logo" className="h-10" />
      </a>

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#how-it-works" className="hover:text-[#7E48F0]">
            How it works
          </a>
        </li>
        <li>
          <a href="#why-its-important" className="hover:text-[#7E48F0]">
            Why it's important
          </a>
        </li>
        <li>
          <a href="#about-us" className="hover:text-[#7E48F0]">
            About us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#7E48F0]">
            Contact
          </a>
        </li>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/Login" className="text-gray-700 hover:text-[#7E48F0]">
          Login
        </Link>
        <Link
          to="/SignUp"
          className="bg-[#7E48F0] text-white px-4 py-2 rounded-md hover:bg-[#6a3cc7]"
        >
          Sign up
        </Link>
      </div>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <a href="#how-it-works" className="text-gray-700 hover:text-[#7E48F0]">
            How it works
          </a>
          <a href="#why-its-important" className="text-gray-700 hover:text-[#7E48F0]">
            Why it's important
          </a>
          <a href="#about-us" className="text-gray-700 hover:text-[#7E48F0]">
            About us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#7E48F0]">
            Contact
          </a>
          <hr className="w-3/4 border-gray-300" />
          <Link to="/Login" className="text-gray-700 hover:text-[#7E48F0]">
            Login
          </Link>
          <Link
            to="/SignUp"
            className="bg-[#7E48F0] text-white px-4 py-2 rounded-md hover:bg-[#6a3cc7]"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
