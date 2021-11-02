import React, { useState } from "react";
import { GrBasket, GrMenu } from "react-icons/gr";

export default function Header(props) {
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
      <div className="basket_menu">
        <div className="basket">
          <a href="#/cart">
            <GrBasket />{" "}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </a>{" "}
        </div>

        <div className="menu">
          <GrMenu />
        </div>
      </div>
    </nav>
  );
}
