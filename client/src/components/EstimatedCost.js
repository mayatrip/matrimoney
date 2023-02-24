import React, { useState, useEffect } from 'react';
import MatrimoneyApi from '../MatrimoneyApi.js';
import EstimatedCostForm from './EstimatedCostForm';
import { Link, useOutletContext } from "react-router-dom";

export default function EstimatedCostDisplay(props) {
  const {estimatedCosts, setEstCosts} = useOutletContext();
  let totalIncome = props.allIncome.reduce(function (acc, obj) { return acc + obj.amount; }, 0);

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
                    <button className="cursor-pointer" type="submit" onClick={e => deleteCostEstimate(c.id)}>x</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Total:</td>
                <td>${estimatedCosts.reduce(function (acc, obj) { return acc + obj.amount; }, 0)}</td>
              </tr>
            </tbody>
          </table>
          <h4>Add Estimated Cost:</h4>
          <EstimatedCostForm addCostCb={newEstCost => addCost(newEstCost)}/>
        </div>
        <div className="table-div-right">
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
                <td>${(totalIncome * 0.25).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Food</td>
                <td>${(totalIncome * 0.14).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Drinks</td>
                <td>${(totalIncome * 0.08).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Music</td>
                <td>${(totalIncome * 0.1).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Photographer</td>
                <td>${(totalIncome * 0.1).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Attire for Couple</td>
                <td>${(totalIncome * 0.08).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Flowers/Decor</td>
                <td>${(totalIncome * 0.08).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Stationary</td>
                <td>${(totalIncome * 0.02).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Wedding Coordinator</td>
                <td>${(totalIncome * 0.07).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Hair and Makeup</td>
                <td>${(totalIncome * 0.03).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Wedding Rings</td>
                <td>${(totalIncome * 0.02).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Favors and Gifts</td>
                <td>${(totalIncome * 0.01).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Extra Fees/Emergency</td>
                <td>${(totalIncome * 0.02).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Your funds:</td>
                <td>${totalIncome}</td>
              </tr>
            </tbody>
          </table>
          <p>
            *Recommendation based off of your funds and average breakdown of wedding costs
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
