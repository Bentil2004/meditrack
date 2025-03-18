import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Inventory from "./screens/Inventory";
import Report from "./screens/Report";
import Settings from "./screens/Settings";
import Staffs from "./screens/Staffs";
import MedList from "./screens/MedList";
import MedGroup from "./screens/MedGroup";
import MedDetail from "./screens/MedDetail";
import MedGroupDetails from "./screens/MedGroupDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Inventory" element={<Inventory/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Staffs" element={<Staffs/>}/>
        <Route path="/MedList" element={<MedList/>}/>
        <Route path="/MedGroup" element={<MedGroup/>}/>
        <Route path="/MedDetail/:id" element={<MedDetail/>}/> 
        <Route path="/MedGroupDetails/:groupName" element={<MedGroupDetails/>}/> 

      </Routes>
    </Router>
  );
}

export default App;
