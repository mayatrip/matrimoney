import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import "./Funds.css";
import logo from "../images/logo.png";
import MatrimoneyApi from '../MatrimoneyApi.js';

export default function Funds() {
  const [allIncome, setAllIncome] = useState([]);

  useEffect(() => {
    getIncome();
  }, []);

  async function getIncome(){
    let uresponse = await MatrimoneyApi.getIncome();
    if (uresponse.ok){
      setAllIncome(uresponse.data);
    } else {
      console.log(`Error! ${uresponse.error}`);
    }
  }

  return (
    <div className="Funds">
      <nav>
      <Link to="/"  id="logo"><img src={logo} alt="Home"></img></Link>
        <div id="nav-right">
          <Link to="/budget" className="nav-link">Budget</Link>
          <Link to="/funds" className="nav-link selected-link">Funds</Link>
        </div>
      </nav>
      <h2>
        My Funds:
      </h2>
      <Outlet/>
    </div>
  )
}
