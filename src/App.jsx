import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes, Outlet } from 'react-router-dom';
import { createRoot } from "react-dom";
import UserContext, {UserProvider} from "./context/userContext";
import { Card } from "react-bootstrap";
import NavBar from "./components/navbar.js";
import Login from './components/login';
import Home from "./components/home.jsx";
import Deposit from "./components/deposit.jsx";
import Withdraw from "./components/withdraw.jsx";
import CreateAccount from "./components/createaccount.jsx";
import AllData from "./components/alldata.jsx";
import Balance from './components/balance.jsx';
import './App.css';
import './index.js';
import './context/userContext';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
   return (
    <><UserProvider>
        <BrowserRouter>
          <NavBar/> 
          <Routes>
          <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/deposit" element={<Deposit/>} />
              <Route path="/withdraw" element={<Withdraw/>} />
              <Route path="/createaccount" element={<CreateAccount/>} />
              <Route path="/allData" element={<AllData/>} />
              <Route path="/balance" element={<Balance/>} />
            
          </Routes>
        </BrowserRouter>
      </UserProvider>
      
    </>
  );
}

export default App;

