import React, { useState } from 'react'

const EMPTY_FORM = {
    text: "",
    amount: "",
    income_id: "",
    notes: ""
  }

export default function ActualCostForm(props) {
    const [newActCost, setActCost] = useState(EMPTY_FORM);
    const [selected, setSelected] = useState("");
  
    const handleChange = (event) => {
      let { name, value } = event.target;
      let actObj = {...newActCost};
      actObj[name] = value;
      setSelected(actObj.income_id);
      actObj.text = actObj.text.charAt(0).toUpperCase() + actObj.text.slice(1);
      setActCost(newActCost => actObj);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addCostCb(newActCost);
      props.setIncomeCb(newActCost);
      setActCost(EMPTY_FORM);
      setSelected("")
    }
  return (
    <form onSubmit={handleSubmit} className="actual-cost-form">
      <div className="row justify-content-center  align-items-end">
        <div className="col">
        </div>
        <div className="col-5">
          <label>Vendor Name:
            <input 
            type = "text"
            name = "text"
            value = {newActCost.text}
            onChange = {handleChange}
            required
            />
          </label>
        </div>
        <div className="col-5">
          <label>Cost:
            <input 
            type = "text"
            name = "amount"
            value = {newActCost.amount}
            onChange = {handleChange}
            required
            />
          </label>
        </div>
        <div className="col">
        <button type="submit" className="cursor-pointer" style={{marginBottom:"-60px", position:"relative", zIndex:100}}>+</button>
        </div>
      </div>
      <div className="row justify-content-center  align-items-end">
        <div className="col">
        </div>
        <div className="col-5">
          <label>Who is Paying?:
            <select name="income_id" onChange={handleChange} required value={selected}>
              <option value="" selected disabled hidden>Choose from your funds</option>
              {props.allIncome.map(i => (
                <option key={i.id} value={i.id} >{i.text}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="col-5">
          <label>Notes:
            <input 
            type = "text"
            name = "notes"
            value = {newActCost.notes}
            onChange = {handleChange}
            required
            />
          </label>
        </div>
        <div className="col">
          <button type="button" className="invis-button">+</button>
        </div>
      </div>
    </form>
  )
}
