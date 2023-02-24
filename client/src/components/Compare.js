import React from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Compare() {
  const {estimatedCosts, setEstCosts, actualCosts, setActCosts} = useOutletContext();

  return (
    <div className='Compare'>
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" className="selected-second-nav">Compare</Link>
      </div>
      <div className="bottom-container">
      <div className="table-div">
        <div id="table-div-left">
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
              <tr>
                <td>Total:</td>
                <td>${estimatedCosts.reduce(function (acc, obj) { return acc + obj.amount; }, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-div-right">
          <h3>
            Actual Costs:
          </h3>
          <table>
            <tbody>
              <tr>
                <th>Vendor</th>
                <th>Cost</th>
                <th>Who is Paying?</th>
              </tr>
              {actualCosts.map(c => (
                <tr key={c.id}>
                  <td>{c.text}</td>
                  <td>${c.amount}</td>
                  <td>{c.income_id}</td>
                </tr>
              ))}
              <tr>
                <td>Total:</td>
                <td>${actualCosts.reduce(function (acc, obj) { return acc + obj.amount; }, 0)}</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
      </div>
    </div>
  )
}
