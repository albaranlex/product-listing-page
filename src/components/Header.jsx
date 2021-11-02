import React from "react";
import { GrBasket } from "react-icons/gr";

export default function Header() {
  return (
    <nav>
      <div className="logo">S / P</div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Gallery</li>
        <li>About us</li>
        <li className="contact">Contact us</li>
      </ul>
      <div className="basket">
        <GrBasket color="white" />
      </div>
    </nav>
  );
}
