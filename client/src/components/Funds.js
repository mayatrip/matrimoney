import React, { useState, useEffect } from 'react';
import HomeView from "./HomeView.js";
import Budget from "./Budget.js";
import { Route, Routes, Link } from "react-router-dom";
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
          <Link to="/funds" className="nav-link" id="selected-link">Funds</Link>
        </div>
      </nav>
      <h3>
        My Funds:
      </h3>
        <table>
          <tbody>
            <tr>
                <th>Source</th>
                <th>Amount</th>
            </tr>
              {allIncome.map(i => (
                  <tr key={i.id}>
                      <td>{i.text}</td>
                      <td>${i.amount}</td>
                  </tr>
              ))}
          </tbody>
        </table>
    </div>
  )
}
