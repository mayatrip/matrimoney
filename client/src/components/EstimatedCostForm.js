import React, {useState} from 'react';

const EMPTY_FORM = {
  text: "",
  amount: ""
}

export default function EstimatedCostForm(props) {
  const [newEstCost, setEstCost] = useState(EMPTY_FORM);

  const handleChange = (event) => {
    let { name, value } = event.target;
    let estObj = {...newEstCost};
    estObj[name] = value;
    estObj.text = estObj.text.charAt(0).toUpperCase() + estObj.text.slice(1);
    setEstCost(newEstCost => estObj);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCostCb(newEstCost);
    setEstCost(EMPTY_FORM);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center  align-items-end">
        <div className="col">
        </div>
        <div className="col-5">
          <label>Expense Category:
            <input 
              type = "text"
              name = "text"
              value = {newEstCost.text}
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
              value = {newEstCost.amount}
              onChange = {handleChange}
              required
              />
          </label>
        </div>
        <div className="col">
        <button type="submit" className="cursor-pointer">+</button>
        </div>
      </div>
    </form>
  )
}
