import React from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Compare() {
  const [estimatedCosts, setEstCosts] = useOutletContext();

  return (
    <div className='Compare'>
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" className="selected-second-nav">Compare</Link>
      </div>
      <div id="table-div">
        <div id="table-div-left">
          <h3>
            Compare
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
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}
