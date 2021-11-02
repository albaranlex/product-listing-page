import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrBasket } from "react-icons/gr";

export default function Header() {
  let iconStyles = { color: "white", fontSize: "1.2em" };

  return (
    <nav>
      <div className="logo">Super Bowl</div>
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
