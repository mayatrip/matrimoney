import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeView from "./components/HomeView.js";
import Budget from "./components/Budget.js";
import Funds from "./components/Funds.js";
import './App.css';
import ActualCost from "./components/ActualCost.js";
import Compare from "./components/Compare.js";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/budget/costs" element={<ActualCost />} />
        <Route path="/budget/compare" element={<Compare />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </div>
  );
}

export default App;
