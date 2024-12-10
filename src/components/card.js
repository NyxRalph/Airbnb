import React from "react";
import CardOne from "../images/c1.jpeg";
import CardTwo from "../images/c2.jpeg";
import CardThree from "../images/c3.jpeg";
import CardFour from "../images/c4.jpeg";

export default function Card() {
  return (
    <div className="card__section">
      <div className="card__container">
        <div className="status">
          <p className="status__message">SOLD OUT</p>
        </div>
        <img className="cardTwo c_img" src={CardTwo} />
      </div>
      <div className="card__container">
        <img className="cardThree c_img" src={CardThree} />
      </div>
    </div>
  );
}
