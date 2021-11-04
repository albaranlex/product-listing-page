import React from "react";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  return (
    <nav>
      <div className="menu">
        <GrMenu />
      </div>
      <div className="logo">
        <p>S / P</p>
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Gallery</li>
          <li className="contact">Contact us</li>
        </ul>
      </div>
      <div className="basket_show"></div>
    </nav>
  );
}
