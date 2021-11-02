import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrBasket } from "react-icons/gr";

export default function Header() {
  return (
    <nav>
      <div className="logo">Rayes.</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <AiOutlineSearch />
        <GrBasket />
      </div>
    </nav>
  );
}
