import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Machine from "./Pages/machine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machine" element={<Machine/>}/>
      </Routes>
    </>
  );
}

export default App;
