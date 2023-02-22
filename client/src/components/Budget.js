import React from 'react';
import Funds from "./Funds.js";
import HomeView from "./HomeView.js";
import { Route, Routes, Link } from "react-router-dom";
import "./Budget.css";

export default function Budget() {
  return (
    <div className='Budget'>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div id="nav-right">
          <Link to="/budget" className="nav-link">Budget</Link>
          <Link to="/funds" className="nav-link">Funds</Link>
        </div>
      </nav>
      Budget
    </div>
  )
}
