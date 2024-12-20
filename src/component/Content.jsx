import React, { useState } from 'react';
import InputSec from './InputSec';
import TransHist from './TransHist';
import Dashboard from './Dashboard';

const Content = () => {
  const [money, setMoney] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedTag, setSelectedTag] = useState("Others"); // Default tag

  // Handle input value change
  function handleOnChange(event) {
    const value = parseFloat(event.target.value) || 0; // Ensure numeric value
    setAmount(value);
  }

  // Add credited money
  function addMoney() {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    const data = "+" + amount;
    const newData = [...money, { action: "Credited", amount: data, tag: selectedTag }];
    setMoney(newData);
  }

  // Deduct debited money
  function reduceMoney() {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (Total < amount) {
      alert("Insufficient balance.");
    } else {
      const data = "-" + amount;
      const newData = [...money, { action: "Debited", amount: data, tag: selectedTag }];
      setMoney(newData);
    }
  }

  // Handle tag change
  function handleTagChange(event) {
    setSelectedTag(event.target.value);
  }

  // Calculate totals
  let Total = 0;
  let creditMoney = 0,
    shoppingMoney = 0,
    eduMoney = 0,
    foodMoney = 0,
    othMoney = 0;
    money.forEach(item => {
      if (item.action === "Credited") {
          Total += parseFloat(item.amount.slice(1));
      }
      else{
          Total -= parseFloat(item.amount.slice(1));
      }
    })
  money.forEach(item => {
    const value = parseFloat(item.amount);
    if (item.action === "Credited") {
      creditMoney += value;
    } else if (item.action === "Debited") {
      if (item.tag === "Shopping") shoppingMoney += value;
      if (item.tag === "Education") eduMoney += value;
      if (item.tag === "Food") foodMoney += value;
      if (item.tag === "Others") othMoney += value;
    }
  });

  return (
    <>
      <div className="md:flex">
        {/* Dashboard */}
        <div className="md:w-1/3 m-2">
          <Dashboard
            total={Total}
            creditMoney={creditMoney}
            othMoney={othMoney}
            foodMoney={foodMoney}
            eduMoney={eduMoney}
            shoppingMoney={shoppingMoney}
          />
        </div>

        {/* Input Section */}
        <div className="md:w-1/3 m-2">
          <InputSec
            amount={amount}
            handleOnChange={handleOnChange}
            reduceMoney={reduceMoney}
            addMoney={addMoney}
            total={Total}
            handleOnSubmit={e => e.preventDefault()} // Prevent default behavior
            fortag={selectedTag}
            handleTagChange={handleTagChange}
          />
        </div>

        {/* Transaction History */}
        <div className="md:w-1/3 m-2">
          <TransHist money={money} />
        </div>
      </div>
    </>
  );
};

export default Content;
