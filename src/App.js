import React from 'react';
import Home from './components/Home.js';
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Navbar from "./components/Navbar";

import Technology from "./components/Technology";

import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
   
<>
    <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
        
      </Routes>
   



   
    </>

  )
}
