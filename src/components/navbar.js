import React from "react";
import AirbnbLogo from "../images/Airbnb Icon.svg";

export default function Navbar() {
  return (
    <nav className="hero__nav">
      <img src={AirbnbLogo} alt="Airbnb Logo" className="hero__logo" />
      <p className="logo__name"> airbnb</p>
    </nav>
  );
}
