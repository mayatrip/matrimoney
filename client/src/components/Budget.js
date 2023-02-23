import React from 'react';
import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./Budget.css";
import logo from "../images/logo.png";
import EstimatedCost from './EstimatedCost.js';

export default function Budget() {


  return (
    <div className='Budget'>
      <nav>
        <Link to="/"  id="logo"><img src={logo} alt="Home"></img></Link>
        <div id="nav-right">
          <Link to="/budget" className="nav-link" id="selected-link">Budget</Link>
          <Link to="/funds" className="nav-link">Funds</Link>
        </div>
      </nav>
      <h2>My Budget</h2>
      <Routes>
        <Route path="/budget" element={<EstimatedCost />} />
      </Routes>
      <Outlet />
    </div>
  )
}
