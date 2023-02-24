import React from 'react';
import { Link } from "react-router-dom";

export default function FundsDisplay(props) {
  return (
    <div>
      <div className="secondary-nav">
        <Link to="/funds" className="selected-second-nav">Add Funds</Link>
        <Link to="/funds/display" >View Funds</Link>
      </div>
      <div className="bottom-container">
        <h3>All Funds</h3>
        <table id="funds-table">
          <tbody>
            <tr>
                <th>Source</th>
                <th>Total Amount</th>
                <th>Amount Remaining</th>
            </tr>
              {props.allIncome.map(i => (
                  <tr key={i.id}>
                      <td>{i.text}</td>
                      <td>${i.amount}</td>
                      <td>${i.amount - i.amount_used}</td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
