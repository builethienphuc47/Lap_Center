import React from "react";
import "./styles.scss";
export default function Navbar() {
  return (
    <div className="d-flex justify-content-between navbar-container">
      <div className="logoIcon">
        <div className="text-warning">Lap center</div>
      </div>
      <div className="mainMenu">
        <ul className="d-flex ">
          <li>Trang Chu</li>
          <li>Gioi Thieu</li>
          <li>Lien He</li>
          <li>Dang Nhap</li>
        </ul>
      </div>
    </div>
  );
}
