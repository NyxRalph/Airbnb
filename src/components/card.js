import React from "react";
import CardOne from "../images/c1.jpeg";
import CardTwo from "../images/c2.jpeg";
import CardThree from "../images/c3.jpeg";
import Star from "../images/Star.jpg";

export default function Card() {
  return (
    <div className="card__section">




      <div className="card__container">
        {/* <div className="status">
          <p className="status__message">SOLD OUT</p>
        </div> */}
        <img className="cardTwo c_img" src={CardTwo} />


        <div className="card__para-1">
          <img className="star" src={Star} />
          <p className="star__para">5.0 (6) USA</p>
        </div>
        <p className="card__para-2" >XVZ Fashion Week</p>
        <p className="card__para-3" >From %136/ Person</p>


      </div>





      <div className="card__container">
        <img className="cardThree c_img" src={CardThree} />
      </div>
    </div>
  );
}
