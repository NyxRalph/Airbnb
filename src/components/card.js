import React from "react";
import CardFive from "../images/c5.jpeg";
import CardTwo from "../images/c2.jpeg";
import CardThree from "../images/c3.jpeg";

import Star from "../images/Star.jpg";

export default function Card() {
  return (
    <div className="card__section">
      <div className="card__container">
        <div className="status">
          <p className="status__message">SOLD OUT</p>
        </div>
        <img className="cardTwo c_img" src={CardTwo} />

        <div className="card__para-1">
          <img className="star" src={Star} />
          <p className="star__para">5.0 (6) USA</p>
        </div>
        <p className="card__para-2">XVZ Fashion Week</p>
        <p className="card__para-3"><span className="bold">From %136</span>/ Person</p>
      </div>

      <div className="card__container">
        <div className="status">
          <p className="status__message">SOLD OUT</p>
        </div>
        <img className="cardThree c_img" src={CardThree} />
        <div className="card__para-1">
          <img className="star" src={Star} />
          <p className="star__para">5.0 (6) USA</p>
        </div>
        <p className="card__para-2">XVZ Fashion Week</p>
        <p className="card__para-3"><span className="bold"> From $136</span>/ Person</p>
      </div>
      <div className="card__container">
        <div className="status">
          <p className="status__message">SOLD OUT</p>
        </div>
        <img className="cardFive c_img" src={CardFive} />
        <div className="card__para-1">
          <img className="star" src={Star} />
          <p className="star__para">5.0 (6) USA</p>
        </div>
        <p className="card__para-2">XVZ Fashion Week</p>
        <p className="card__para-3"><span className="bold">From %136</span>/ Person</p>
      </div>
      <div className="card__container">
        <div className="status">
          <p className="status__message">SOLD OUT</p>
        </div>
        <img className="cardThree c_img" src={CardThree} />
        <div className="card__para-1">
          <img className="star" src={Star} />
          <p className="star__para">5.0 (6) USA</p>
        </div>
        <p className="card__para-2">XVZ Fashion Week</p>
        <p className="card__para-3"><span className="bold">From %136</span>/ Person</p>
      </div>
    </div>
  );
}
