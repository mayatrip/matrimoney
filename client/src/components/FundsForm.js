import React, { useState } from 'react';
import { Link } from "react-router-dom";

const EMPTY_FORM = {
    text: "",
    amount: ""
  }

export default function FundsForm(props) {
    const [income, setIncome] = useState(EMPTY_FORM);

    const handleChange = (event) => {
      let { name, value } = event.target;
      setIncome(income => ({...income, [name]: value }));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addIncomeCb(income);
      setIncome(EMPTY_FORM);
    }

  return (
    <div>
      <div className="secondary-nav">
        <Link to="/funds" className="selected-second-nav">Add Funds</Link>
        <Link to="/funds/display" >View Funds</Link>
      </div>
      <div className="bottom-container">
        <form onSubmit={handleSubmit}>
            <label>Source of Funds:
                <input 
                type = "text"
                name = "text"
                value = {income.text}
                onChange = {handleChange}
                required
                />
            </label>
            <label>Amount:
                <input 
                type = "text"
                name = "amount"
                value = {income.amount}
                onChange = {handleChange}
                required
                />
            </label>
            <button type="submit"  className="cursor-pointer">+</button>
        </form>
      </div>
    </div>

  )
}
