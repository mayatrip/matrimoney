import React from 'react';
import "./HomeView.css";
import Budget from "./Budget.js";
import Funds from "./Funds.js";
import { Route, Routes, Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div className="HomeView">
      <h1>MATRIMONEY</h1>
      <div id="homepage-buttons">
        <Link to="/budget">
          <button type="button">VIEW MY BUDGET</button>
        </Link>
        <Link to="/funds">
          <button type="button">ADD FUNDS</button>
        </Link>
      </div>

      <Routes>
        <Route path="/budget" element={<Budget />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </div>
  )
}
