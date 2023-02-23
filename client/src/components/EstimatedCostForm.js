import React, {useState} from 'react';

const EMPTY_FORM = {
  text: "",
  amount: ""
}

export default function EstimatedCostForm(props) {
  const [newEstCost, setEstCost] = useState(EMPTY_FORM);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setEstCost(newEstCost => ({...newEstCost, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCostCb(newEstCost);
    setEstCost(EMPTY_FORM);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Vendor Name:
            <input 
              type = "text"
              name = "text"
              value = {newEstCost.text}
              onChange = {handleChange}
              required
              />
        </label>
        <label>Cost:
            <input 
              type = "text"
              name = "amount"
              value = {newEstCost.amount}
              onChange = {handleChange}
              required
              />
        </label>
        <button type="submit"  className="cursor-pointer">+</button>
    </form>
  )
}
