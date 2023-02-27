import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from "react-router-dom";
import MatrimoneyApi from '../MatrimoneyApi.js';
import ActualCostForm from './ActualCostForm.js';

export default function ActualCost(props) {

  const {actualCosts, setActCosts} = useOutletContext();
  const [selectedCost, setSelectedCost] = useState(null);

  async function getOneCostActual(id){
    let uresponse = await MatrimoneyApi.getOneCostActual(id);
    if (uresponse.ok){
        setSelectedCost(uresponse.data[0]);
    } else {
        console.log(`Error! ${uresponse.error}`);
    }
  }

  const addCost = async newActCost => {
    let uresponse = await MatrimoneyApi.addCostActual(newActCost);
    if (uresponse.ok){
      setActCosts(uresponse.data);
    } else{
      console.log(`Error! ${uresponse.error}`);
    }
  }

  const deleteCostActual = async id => {
    if (selectedCost && selectedCost.id === id) {
        setSelectedCost(null);
      }
    let uresponse = await MatrimoneyApi.deleteCostActual(id);
    if (uresponse.ok) {
      setActCosts(uresponse.data)
    } else {
      console.log(`Error! ${uresponse.error}`)
    }
  }

  const handleClick = (id, incomeId) => {
    let amountDeleted = (actualCosts.find(c => c.id === id));
    amountDeleted = amountDeleted.amount;
    deleteCostActual(id);
    props.returnFundsCb(incomeId, amountDeleted);
  }



  return (
    <div className='ActualCost'>
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" className="selected-second-nav">Actual</Link>
        <Link to="/budget/compare" >Compare</Link>
      </div>
      <div className="bottom-container">
      <div className="row justify-content-center">
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
                        <td className="cursor-pointer" onClick={e => getOneCostActual(c.id)}>{c.text}</td>
                        <td className="cursor-pointer" onClick={e => getOneCostActual(c.id)}>${c.amount}</td>
                        <td style={{borderRight:"none"}} className="cursor-pointer amount-td" onClick={e => getOneCostActual(c.id)}>{(props.allIncome.find(i => i.id === c.income_id)) ? (props.allIncome.find(i => i.id === c.income_id)).text : ""}</td>
                        <td className="cursor-pointer" style ={{borderLeft: "none", width:10}}><button type="submit" onClick={e => handleClick(c.id, c.income_id)}>x</button></td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total:</td>
                    <td>${actualCosts.reduce(function (acc, obj) { return acc + obj.amount; }, 0)}</td>
                  </tr>
                </tbody>
            </table>
            <h4>Add Cost:</h4>
            <ActualCostForm 
              addCostCb={newActCost => addCost(newActCost)} 
              setIncomeCb={incomeObj => props.setIncomeCb(incomeObj)}
              allIncome={props.allIncome}
              />
            </div>
            <div className="col-5">
                <h3>
                    Notes:
                </h3>
                { selectedCost && 
                <div className="actual-grid-right">
                    <h3>{selectedCost.text}</h3>
                    <p>{selectedCost.notes}</p>
                </div>
                }
                { !selectedCost && 
                <div className="actual-grid-right">
                    <h3>Click on an item for more info</h3>
                </div>
                }
            </div>
        </div>
      </div>
    </div>
  )
}
