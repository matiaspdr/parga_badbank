import React , { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { Card } from "react-bootstrap";

function Balance() {

  const {user, setUser} = useContext(UserContext);
  // Función para renderizar la lista de transacciones
  const renderTransactionList = () => {
    return user.transactionHistory.map((transaction, index) => (
      <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{transaction.type}</div>
        <div>$ {transaction.amount}</div>
      </div>
    ));
  };

  return (
    <Card
      style={{ backgroundColor: "rgb(186, 31, 46)",color:"white", maxHeight: 900, minHeight: 500 , width: "auto", maxWidth: 800, minWidth: 400 ,marginInline: "auto", padding:50 ,  boxShadow: "0 0 8px #000000"}}
      
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
    >
      <div className="totalBalance">
        <h1>All data</h1>
        <h2>$ {user.balance}</h2> 
      </div>

      <br/>
      
      <div className="history">
        <h3>Transaction History:</h3>
        {renderTransactionList()}
      </div>
    </Card>
  );
}

export default Balance;
