import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link mx-2 active btn rounded-0 btn-danger" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 btn rounded-0 btn-danger" to="/deposit">Deposit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 btn rounded-0 btn-danger" to="/withdraw">Withdraw</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 btn rounded-0 btn-danger" to="/balance">All data</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 btn rounded-0 btn-danger" to="/allData">Data base</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 btn rounded-0 btn-danger" to="/createaccount">Create Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center p-3 d-none d-md-block">
        <img src="logo.png" alt="Company Logo" style={{ width: '8%', height: 'auto' }} />
      </div>
    </div>  
  );
}

export default NavBar;
