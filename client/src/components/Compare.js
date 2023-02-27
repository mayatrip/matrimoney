import React from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Compare(props) {
  const {estimatedCosts, setEstCosts, actualCosts, setActCosts} = useOutletContext();

  return (
    <div className='Compare'>
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" className="selected-second-nav">Compare</Link>
      </div>
      <div className="bottom-container">
      <div className="row justify-content-center">
        <div className="col-5">
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
        <div className="col-5">
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
                  <td>{(props.allIncome.find(i => i.id === c.income_id)).text}</td>
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
