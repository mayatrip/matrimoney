import React from 'react';
import HomeView from "./HomeView.js";
import Budget from "./Budget.js";
import { Route, Routes, Link } from "react-router-dom";
import "./Funds.css";

export default function Funds() {
  return (
    <div className="Funds">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div id="nav-right">
          <Link to="/budget" className="nav-link">Budget</Link>
          <Link to="/funds" className="nav-link">Funds</Link>
        </div>
      </nav>
      Funds
    </div>
  )
}
