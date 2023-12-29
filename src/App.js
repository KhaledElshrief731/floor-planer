
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import AboutProject from './components/AboutProject';



function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="team" element={<Team/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/about-project" element={<AboutProject/>} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
