import React from "react";
import main_img from "../components/landing-02.png";
import { SiHellofresh, SiEmlakjet, SiForestry } from "react-icons/si";
//

export default function Landing() {
  return (
    <div className="landing_wrapper">
      <div className="landing_heading_text">
        <h3>
          SUPER <span>BOWL</span>
        </h3>
      </div>
      <div className="landing_heading_img">
        <img src={main_img} alt="hand with bowl" />
      </div>

      <div className="landing_button">
        <a href="#start">
          <button href="start">Order Here </button>
        </a>
      </div>
    </div>
  );
}
