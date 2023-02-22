import React from 'react';
import Funds from "./Funds.js";
import HomeView from "./HomeView.js";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./Budget.css";
import logo from "../images/logo.png";
import ActualCost from './ActualCost.js';
import Compare from './Compare.js';

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
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" >Compare</Link>
      </div>
      <div id="table-div">
        <div id="table-div-left">
          <h3>
            Our Recommendations:
          </h3>
          <table>
            <tr>
              <th>Vendor</th>
              <th>Cost</th>
            </tr>
          </table>
          <p>

          </p>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
