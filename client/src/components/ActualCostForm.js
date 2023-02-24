import React, { useState } from 'react'

const EMPTY_FORM = {
    text: "",
    amount: "",
    income_id: "",
    notes: ""
  }

  const EMPTY_INCOME = {
    income_id: "",
    amount: ""
  }

export default function ActualCostForm(props) {
    const [newActCost, setActCost] = useState(EMPTY_FORM);
    const [incomeObj, setIncomeObj] = useState({})
  
    const handleChange = (event) => {
      let { name, value } = event.target;
      setActCost(newActCost => ({...newActCost, [name]: value }));
      let newIncomeObj = {income_id: newActCost.income_id, amount: newActCost.amount};
      setIncomeObj(incomeObj => newIncomeObj)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addCostCb(newActCost);
      props.setIncomeCb(newActCost);
      setActCost(EMPTY_FORM);
      setIncomeObj(EMPTY_INCOME);
    }
  return (
    <form id="actual-cost-form" onSubmit={handleSubmit}>
        <label>Vendor Name:
            <input 
            type = "text"
            name = "text"
            value = {newActCost.text}
            onChange = {handleChange}
            required
            />
        </label>
        <label>Cost:
            <input 
            type = "text"
            name = "amount"
            value = {newActCost.amount}
            onChange = {handleChange}
            required
            />
        </label>
        <label>Who is Paying?:
        <select name="income_id" onChange={handleChange}>
          {props.allIncome.map(i => (
            <option key={i.id} value={i.id} >{i.text}</option>
          ))}
        </select>
        </label>
        <label>Notes:
            <input 
            type = "text"
            name = "notes"
            value = {newActCost.notes}
            onChange = {handleChange}
            required
            />
        </label>
        <div className="span-2-rows">
        <button id="actual-cost-button" type="submit" className="cursor-pointer">+</button>
        </div>
    </form>
  )
}
