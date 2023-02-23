import React, { useState, useEffect } from 'react';
import MatrimoneyApi from '../MatrimoneyApi.js';
import EstimatedCostForm from './EstimatedCostForm';
import { Link } from "react-router-dom";

export default function EstimatedCostDisplay() {
  const [estimatedCosts, setEstCosts] = useState([]);

  useEffect(() => {
    getCostEstimate();
  }, []);

  async function getCostEstimate(){
    let uresponse = await MatrimoneyApi.getCostEstimate();
    if (uresponse.ok){
      setEstCosts(uresponse.data);
    } else {
      console.log(`Error! ${uresponse.error}`)
    }
  }

  const addCost = async newEstCost => {
    console.log(newEstCost);
    let options = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newEstCost)
    };

    try {
      let response = await fetch('/budget', options);
      if (response.ok){
        let cost = await response.json();
        setEstCosts(cost);
      } else{
        console.log(`Server error: ${response.status}: ${response.statusText}`)
      }
    } catch(err){
      console.log(`Network error: ${err.message}`)
    }
  }

  return (
    <div>
    <div className="secondary-nav">
        <Link to="/budget" className="selected-second-nav">Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" >Compare</Link>
      </div>
      <div id="bottom-container">
        <div id="table-div">
        <div id="table-div-left">
          <h3>
            Our Recommendations:*
          </h3>
          <table>
            <tbody>
              <tr>
                <th>Vendor</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Venue</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Venue</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Venue</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Venue</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Venue</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Venue</td>
                <td>$</td>
              </tr>
            </tbody>
          </table>
          <p>
            *Recommendation based off of your budget and average breakdown of wedding costs
          </p>
        </div>
        <div id="table-div-right">
          <h3>
            Estimated Costs:
          </h3>
          <table>
            <tbody>
              <tr>
                <th>Vendor</th>
                <th>Cost</th>
              </tr>
              {estimatedCosts.map(c => (
                <tr key={c.id}>
                  <td>{c.text}</td>
                  <td>${c.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <EstimatedCostForm addCostCb={newEstCost => addCost(newEstCost)}/>
        </div>
        </div>
      </div>
    </div>
  )
}
