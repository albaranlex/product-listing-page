import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <p>copyright @2020</p>
      <div className="social">
        <AiOutlineInstagram />
        <AiOutlineFacebook />
        <i className="fa fa-instagram"></i>
      </div>
    </div>
  );
}
