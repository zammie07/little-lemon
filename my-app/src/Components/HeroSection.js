import React from "react";
import platter from "../assets/images/restauranfood.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-items">
        <div className="hero-row">
          {/* column 1 */}
          <div className="col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="intro">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <div className="col-2">
            <img src={platter} alt="platter" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
