import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import logo2 from "../assets/SignUp.jpg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [institutionName, setInstitutionName] = useState("");
  const [email, setEmail] = useState("");
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");

  const [validLength, setValidLength] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validSymbol, setValidSymbol] = useState(false);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setValidLength(value.length >= 8);
    setValidNumber(/\d/.test(value));
    setValidSymbol(/[!@#$%^&*(),.?":{}|<>]/.test(value));
  };

  const isFormValid =
    institutionName.trim() !== "" &&
    email.trim() !== "" &&
    adminName.trim() !== "" &&
    validLength &&
    validNumber &&
    validSymbol;

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 bg-gray-100">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-medium">Create an Account</h1>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            Join MediTrack Inventory System and revolutionize the way you manage your hospital or clinic inventory.
          </p>

          <div className="mt-6">
            <label className="block text-gray-700 font-medium">Medical Institution Name:</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm outline-none"
              placeholder="Enter institution name"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
            />

            <label className="block text-gray-700 font-medium mt-4">Email:</label>
            <input
              type="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm outline-none"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block text-gray-700 font-medium mt-4">Admin Name:</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm outline-none"
              placeholder="Enter admin name"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />

            <label className="block text-gray-700 font-medium mt-4">Admin Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm outline-none"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
              <span
                className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="text-sm mt-2">
              <p className={`flex items-center gap-2 ${validLength ? "text-green-600" : "text-gray-500"}`}>
                {validLength ? <FaCheckCircle /> : <FaTimesCircle />} At least 8 characters
              </p>
              <p className={`flex items-center gap-2 ${validNumber ? "text-green-600" : "text-gray-500"}`}>
                {validNumber ? <FaCheckCircle /> : <FaTimesCircle />} Include numbers (e.g., 1342)
              </p>
              <p className={`flex items-center gap-2 ${validSymbol ? "text-green-600" : "text-gray-500"}`}>
                {validSymbol ? <FaCheckCircle /> : <FaTimesCircle />} Include symbols (e.g., #$@)
              </p>
            </div>

            <Link to="/LogIn">
              <button
                className={`w-full mt-6 py-3 text-white rounded-lg text-lg shadow-lg transition-all duration-200 ${
                  isFormValid ? "bg-purple-600 hover:bg-purple-700 cursor-pointer" : "bg-[#9c79e7] cursor-not-allowed "
                }`}
                disabled={!isFormValid}
              >
                Sign Up
              </button>
            </Link>

            <p className="text-sm text-gray-500 text-center mt-4">
              By creating an account, you agree to the{" "}
              <a href="#" className="text-[#7E48F0] hover:underline">Terms of Use</a> and{" "}
              <a href="#" className="text-[#7E48F0] hover:underline">Privacy Policy</a>
            </p>

            <p className="text-sm text-gray-500 text-center mt-2">
              Already have an account?{" "}
              <Link to="/LogIn" className="text-[#7E48F0] hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
        <img 
          src={logo2} 
          alt="Pharmacist using tablet" 
          className="w-full h-full object-cover max-h-screen"
        />
      </div>
    </div>
  );
}

export default SignUp;
