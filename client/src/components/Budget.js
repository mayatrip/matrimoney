import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Outlet, useOutletContext } from "react-router-dom";
import "./Budget.css";
import logo from "../images/logo.png";
import MatrimoneyApi from '../MatrimoneyApi';

export default function Budget() {
  const [estimatedCosts, setEstCosts] = React.useState([]);
  const [actualCosts, setActCosts] = React.useState([]);

  useEffect(() => {
    getCostEstimate();
    getCostActual();
  }, []);

  async function getCostEstimate(){
    let uresponse = await MatrimoneyApi.getCostEstimate();
    if (uresponse.ok){
      setEstCosts(uresponse.data);
    } else {
      console.log(`Error! ${uresponse.error}`)
    }
  }

  async function getCostActual(){
    let uresponse = await MatrimoneyApi.getCostActual();
    if (uresponse.ok) {
        setActCosts(uresponse.data);
    } else {
        console.log(`Error! ${uresponse.error}`)
    }
  }

  // const addCost = async newEstCost => {
  //   let uresponse = await MatrimoneyApi.addCostEstimate(newEstCost);
  //   if (uresponse.ok){
  //     setEstCosts(uresponse.data);
  //   } else{
  //     console.log(`Error! ${uresponse.error}`);
  //   }
  // }

  // const deleteCostEstimate = async id => {
  //   let uresponse = await MatrimoneyApi.deleteCostEstimate(id);
  //   if (uresponse.ok) {
  //     setEstCosts(uresponse.data)
  //   } else {
  //     console.log(`Error! ${uresponse.error}`)
  //   }
  // }

  return (
    <div className='Budget'>
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
                  <Link to="/budget" className="nav-link selected-link">Budget</Link>
                </li>
                <li className="nav-item">
                  <Link to="/funds" className="nav-link">Funds</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> 


      <h2>My Budget</h2>
      <Outlet context={{actualCosts, setActCosts, estimatedCosts, setEstCosts} }/>
    </div>
  )
}
