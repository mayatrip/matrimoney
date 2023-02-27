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
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link to="/"  id="logo"><img src={logo} alt="Home" className="navbar-brand"></img></Link>
          <div className="justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/budget" className="nav-link">Budget</Link>
                </li>
                <li className="nav-item">
                  <Link to="/funds" className="nav-link selected-link">Funds</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> 
      <h2>
        My Funds:
      </h2>
      <Outlet/>
    </div>
  )
}
