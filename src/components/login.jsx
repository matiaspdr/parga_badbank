import React, { useState } from "react";
import { Card } from "react-bootstrap";
import '../App.css'
import { createEvent } from "@testing-library/react";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Card
      style={{  maxwidth: 400, marginInline: "auto" }}
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
    >
      <h1>Welcome</h1>
      <div className="login">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a 
              className={`nav-link ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabClick("login")}
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected={activeTab === "login"}
            >
              Login
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={`nav-link ${activeTab === "register" ? "active" : ""}`}
              onClick={() => handleTabClick("register")}
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected={activeTab === "register"}
            >
              Register
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`tab-pane fade ${activeTab === "login" ? "show active" : ""}`}
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div className="text-center mb-3">
                <p>Please log in to access your account.</p>
              </div>

              <div style={{display:"grid", justifyItem:"center",  maxWidth:"50%" , width: "auto" }}>
               <div className="form-outline mb-4" >
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
               </div>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>


              <div style={{  display:"grid", justifyItems: "center" }}>
                  <button style={{ backgroundColor: " rgb(186, 31, 46)", width:500  }}  type="submit" className="btn btn-primary btn-block mb-4">
                   Sign in
                  </button>
              </div>
              
            </form>
          </div>
          <div
            className={`tab-pane fade ${activeTab === "register" ? "show active" : ""}`}
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
            
          >
            <form >
              
              <p className="text-center">Follow the steps and register:</p>

              <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" />
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="registerUsername" className="form-control" />
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control" />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="registerPassword" className="form-control" />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="firstDeposit"
                  id="firstDeposit"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerDeposit">
                  Deposit 
                </label>
              </div>


              <div style={{display:"grid", justifyItems: "center" }}>
                  <button style={{ backgroundColor: " rgb(186, 31, 46)", width:500  }}  type="submit" className="btn btn-primary btn-block mb-4">
                   Sign in
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Login;

