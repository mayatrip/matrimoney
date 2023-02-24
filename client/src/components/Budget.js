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
      <nav>
        <Link to="/"  id="logo"><img src={logo} alt="Home"></img></Link>
        <div id="nav-right">
          <Link to="/budget" className="nav-link selected-link">Budget</Link>
          <Link to="/funds" className="nav-link">Funds</Link>
        </div>
      </nav>
      <h2>My Budget</h2>
      <Outlet context={[actualCosts, setActCosts, estimatedCosts, setEstCosts] }/>
    </div>
  )
}
