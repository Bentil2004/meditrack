import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/newLogo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="w-full max-w-lg"> 
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="MediTrack Logo"
              className="w-60 h-28 object-contain"
            />
          </div>
        </div>

        <form className="bg-white">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium">Email:</label>
            <input
              type="email"
              className="w-full p-3 border border-[#7E48F0] rounded-lg focus:ring-2 focus:ring-[#7E48F0] focus:border-[#7E48F0] transition"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border border-[#7E48F0] rounded-lg focus:ring-2 focus:ring-[#7E48F0] focus:border-[#7E48F0] transition"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="text-right mb-4">
            <a href="#" className="text-[#7E48F0] text-s hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7E48F0] text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-[#6D3FCC] transition"
          >
            Log In
          </button>

          <p className="text-center text-gray-700 text-s mt-6">
            Do not have an account?{" "}
            <a href="#" className="text-[#7E48F0] font-semibold hover:underline">
              Sign Up
            </a>{" "}
            with MediTrack Today!
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
