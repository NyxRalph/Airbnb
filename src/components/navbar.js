import React from "react";
import { Airbnb_logo } from "./images/Airbnb Icon.svg";


export default function Navbar (){
    return (
        <>
        <link href="../src/components/index.css" />
        <nav className="hero__nav">
        <img src={Airbnb_logo} alt="Airbnb Logo" className="hero__logo" />
      </nav>
        </>
    )
}