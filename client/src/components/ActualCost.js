import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MatrimoneyApi from '../MatrimoneyApi.js';

export default function ActualCost() {

  const [actualCosts, setActCosts] = useState([]);
  const [selectedCost, setSelectedCost] = useState({})

  useEffect(() => {
    getCostActual();
  }, [])

  async function getCostActual(){
    let uresponse = await MatrimoneyApi.getCostActual();
    if (uresponse.ok) {
        setActCosts(uresponse.data);
    } else {
        console.log(`Error! ${uresponse.error}`)
    }
  }

  async function getOneCostActual(id){
    let uresponse = await MatrimoneyApi.getOneCostActual(id);
    if (uresponse.ok){
        setSelectedCost(uresponse.data[0]);
    } else {
        console.log(`Error! ${uresponse.error}`);
    }
  }

  return (
    <div className='ActualCost'>
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" className="selected-second-nav">Actual</Link>
        <Link to="/budget/compare" >Compare</Link>
      </div>
      <div className="table-div">
        <div className="table-div-left">
          <h3>
            Actual Costs:
          </h3>
          <table>
            <tbody>
                <tr>
                    <th>Vendor</th>
                    <th>Cost</th>
                </tr>
                {actualCosts.map(c => (
                    <tr key={c.id}>
                        <td>{c.text}</td>
                        <td>${c.amount}</td>
                        <td>{c.income_id}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="table-div-right">

        </div>
      </div>
    </div>
  )
}
