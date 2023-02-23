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
    let uresponse = await MatrimoneyApi.addCostEstimate(newEstCost);
    if (uresponse.ok){
      setEstCosts(uresponse.data);
    } else{
      console.log(`Error! ${uresponse.error}`);
    }
  }

  const deleteCostEstimate = async id => {
    let uresponse = await MatrimoneyApi.deleteCostEstimate(id);
    if (uresponse.ok) {
      setEstCosts(uresponse.data)
    } else {
      console.log(`Error! ${uresponse.error}`)
    }
  }

  return (
    <div>
    <div className="secondary-nav">
        <Link to="/budget" className="selected-second-nav">Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" >Compare</Link>
      </div>
      <div className="bottom-container">
        <div className="table-div">
        <div className="table-div-left">
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
        <div className="table-div-right">
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
                  <td>${c.amount}
                    <button type="submit" onClick={e => deleteCostEstimate(c.id)}>x</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Total:</td>
                <td>${estimatedCosts.reduce(function (acc, obj) { return acc + obj.amount; }, 0)}</td>
              </tr>
            </tbody>
          </table>
          <EstimatedCostForm addCostCb={newEstCost => addCost(newEstCost)}/>
        </div>
        </div>
      </div>
    </div>
  )
}
