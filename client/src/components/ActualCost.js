import React, { useState, useEffect } from 'react';
import Compare from './Compare.js';
import Funds from "./Funds.js";
import HomeView from "./HomeView.js";
import Budget from "./Budget.js";
import "./ActualCost.css";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import MatrimoneyApi from '../MatrimoneyApi.js';

export default function ActualCost() {

  const [actualCosts, setActCosts] = useState([]);
  const [selectedCost, setSelectedCost] = useState({})

  useEffect(() => {
    getCostActual();
  }, [])

  async function getCostActual(){
    let uresponse = await MatrimoneyApi.getCostActual();
    if (uresponse.ok) {
        setActCosts(uresponse.data);
    } else {
        console.log(`Error! ${uresponse.error}`)
    }
  }

  async function getOneCostActual(id){
    let uresponse = await MatrimoneyApi.getOneCostActual(id);
    if (uresponse.ok){
        setSelectedCost(uresponse.data[0]);
    } else {
        console.log(`Error! ${uresponse.error}`);
    }
  }

  return (
    <div className='ActualCost'>
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
            Actual Costs:
          </h3>
          <table>
            <tbody>
                <tr>
                    <th>Vendor</th>
                    <th>Cost</th>
                </tr>
                {actualCosts.map(c => (
                    <tr key={c.id}>
                        <td>{c.text}</td>
                        <td>${c.amount}</td>
                    </tr>
                ))}
            </tbody>
          </table>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}
