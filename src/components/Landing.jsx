import React from "react";
import main_img from "../components/landing-02.png";

export default function Landing() {
  return (
    <div className="landing_wrapper">
      <div className="landing_heading_text">
        <h3>SUPER BOWL</h3>
      </div>
      <div className="landing_heading_img">
        <img src={main_img} />
      </div>
    </div>
  );
}
