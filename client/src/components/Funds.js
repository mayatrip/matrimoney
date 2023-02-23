import React, { useState, useEffect } from 'react';
import HomeView from "./HomeView.js";
import Budget from "./Budget.js";
import { Route, Routes, Link } from "react-router-dom";
import "./Funds.css";
import logo from "../images/logo.png";

export default function Funds() {
  const [allIncome, setAllIncome] = useState([]);

  useEffect(() => {
    getIncome();
  }, []);

  async function getIncome(){
    try {
      let response = await fetch('/income');
      if (response.ok) {
        let income = await response.json();
        setAllIncome(income);
      } else {
        console.log(`Network error: ${response.status}, ${response.statusText}`)
      }
    } catch(err){
      console.log(`Server error: ${err.message}`)
    }
  }

  return (
    <div className="Funds">
      <nav>
      <Link to="/"  id="logo"><img src={logo} alt="Home"></img></Link>
        <div id="nav-right">
          <Link to="/budget" className="nav-link">Budget</Link>
          <Link to="/funds" className="nav-link" id="selected-link">Funds</Link>
        </div>
      </nav>
      Funds
    </div>
  )
}
