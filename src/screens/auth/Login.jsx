import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, firestore } from "../../firebase/firebaseConfig"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import logo from "../../assets/newLogo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem("adminName", userData.adminName); 
        localStorage.setItem("adminRole", userData.role || "Admin");
        localStorage.setItem("institutionName", userData.institutionName || "Medical Institution");
      }

      console.log("Login Successful:", user);
      navigate("/Dashboard"); 
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <img src={logo} alt="MediTrack Logo" className="w-60 h-28 object-contain" />
          </div>
        </div>

        <form className="bg-white" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#7E48F0] rounded-lg focus:ring-2 focus:ring-[#7E48F0] focus:border-[#7E48F0] transition"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-lg font-medium">
              Password:
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-[#7E48F0] rounded-lg focus:ring-2 focus:ring-[#7E48F0] focus:border-[#7E48F0] transition"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-4 top-4 text-gray-500 cursor-pointer"
                onClick={togglePassword}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7E48F0] text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-[#6D3FCC] transition cursor-pointer flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Log In"
            )}
          </button>

          <p className="text-center text-gray-700 text-sm mt-6">
            Do not have an account?{" "}
            <Link to="/SignUp" className="text-[#7E48F0] hover:underline">
              Sign Up
            </Link>{" "}
            with MediTrack Today!
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
