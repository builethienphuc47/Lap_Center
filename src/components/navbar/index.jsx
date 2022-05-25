import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="d-flex justify-content-between navbar-container">
      <div className="logoIcon">
        <div className="text-warning">Lap center</div>
      </div>
      <div className="mainMenu">
        <ul className="d-flex ">
          <li><Link to="/">Trang Chu</Link></li>
          <li>Lien He</li>
          <li><Link to="Login">Login</Link></li>
          <li><Link to="About">About</Link></li>
        </ul>
      </div>
    </div>
  );
}
