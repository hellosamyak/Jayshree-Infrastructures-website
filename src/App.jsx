import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Projects from "./pages/Projects";
import Strengths from "./pages/Strengths";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/strengths" element={<Strengths />} />
      </Routes>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
