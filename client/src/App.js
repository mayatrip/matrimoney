import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeView from "./components/HomeView.js";
import Budget from "./components/Budget.js";
import Funds from "./components/Funds.js";
import './App.css';

function App() {


  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/budget">Budget</Link> | <Link to="/funds">Funds</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </div>
  );
}

export default App;
