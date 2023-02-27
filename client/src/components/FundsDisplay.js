import React from 'react';
import { Link } from "react-router-dom";

export default function FundsDisplay(props) {
  let incomeSum = props.allIncome.reduce(function (acc, obj) { return acc + obj.amount; }, 0);
  let spentSum = props.allIncome.reduce(function (acc, obj) { return acc + obj.amount_used; }, 0);
  return (
    <div className="FundsDisplay">
      <div className="secondary-nav">
        <Link to="/funds">Add Funds</Link>
        <Link to="/funds/display"  className="selected-second-nav">View Funds</Link>
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
                      <td>${i.amount - i.amount_used}
                      <button className="cursor-pointer" type="submit" onClick={e => props.deleteIncomeCb(i.id)}>x</button>
                      </td>
                  </tr>
              ))}
            <tr>
              <td>Total:</td>
              <td>${incomeSum}</td>
              <td>${incomeSum - spentSum}
                <button className="cursor-pointer invis-button" type="button"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
