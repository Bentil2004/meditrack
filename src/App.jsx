import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import HowItWorks from "./components/LandingScreen/HowItWorks";
import Important from "./components/LandingScreen/Important";
import AboutUs from "./components/LandingScreen/AboutUs";
import Navbar from "./components/LandingScreen/Navbar"; 
import Footer from "./components/LandingScreen/Footer";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="mt-20"> 
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-its-important" element={<Important />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
