import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import Github from "./Components/Github";
import Linkdin from "./Components/Linkdin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/github" element={<Github />} />
        <Route path="/linkdin" element={<Linkdin />} />
      </Routes>
    </div>
  );
}

export default App;
