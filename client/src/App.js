import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "./components/HomeView.js";
import Budget from "./components/Budget.js";
import Funds from "./components/Funds.js";
import './App.css';
import ActualCost from "./components/ActualCost.js";
import Compare from "./components/Compare.js";
import EstimatedCost from "./components/EstimatedCost.js";
import MatrimoneyApi from "./MatrimoneyApi.js";
import FundsDisplay from "./components/FundsDisplay.js";
import FundsForm from "./components/FundsForm.js";


function App() {
  const [allIncome, setIncome] = React.useState([]);

  useEffect(() => {
    getIncome();
  }, []);

  async function getIncome(){
    let uresponse = await MatrimoneyApi.getIncome();
    if (uresponse.ok){
      setIncome(uresponse.data);
    } else{
      console.log(`Error! ${uresponse.error}`);
    }
  }

  async function addIncome(incomeObj){
    console.log(incomeObj)
    let uresponse = await MatrimoneyApi.addIncome(incomeObj);
    if (uresponse.ok){
      setIncome(uresponse.data);
    } else{
      console.log(`Error! ${uresponse.error}`);
    }
  }

  async function changeIncome(newIncome){
    let id = Number(newIncome.income_id);    
    let oldAmount = (allIncome.find(i => +i.id === +id)).amount_Used;
    let totalAmount;
    if (oldAmount){
      totalAmount = Number(oldAmount) + Number(newIncome.amount)
    } else {
      totalAmount = Number(newIncome.amount)
    }
    let patchObj = {text: newIncome.text, amount: totalAmount};
    let uresponse = await MatrimoneyApi.changeIncome(id, patchObj);
    if (uresponse.ok){
      setIncome(uresponse.data);
    } else{
      console.log(`Error! ${uresponse.error}`);
    }
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/budget" element={<Budget allIncome={allIncome} />} >
          <Route index element={<EstimatedCost />} />
          <Route path="/budget/costs" element={<ActualCost setIncomeCb={newIncome => changeIncome(newIncome)} allIncome={allIncome}/>} />
          <Route path="/budget/compare" element={<Compare />} />
        </Route>
        <Route path="/funds" element={<Funds />} >
          <Route index element={<FundsForm addIncomeCb={newIncome => addIncome(newIncome)}/>} />
          <Route path="/funds/display" element={<FundsDisplay allIncome={allIncome} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
