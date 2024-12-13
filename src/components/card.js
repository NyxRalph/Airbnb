import React from "react";
import Data from "../data"


export default function Card(props) {

  // console.log(props.Data[1].reviewcount)


  return (
    <div className="card__container">
      <div className="status">
        {props.Data.openSpots === 0 && (
          <p className="status__message">{props.Data.available}</p>
        )}
      </div>
      <img className="cardTwo c_img" src={require(`./images/${props.Data.img}`)} />

      <div className="card__para-1">
        <img className="star" src={require(`./images/${props.Data.star}`)} />
        <p className="star__para">
          {props.Data.states.rating} ({props.Data.states.reviewcount}) {props.Data.country}
        </p>
      </div>
      <p className="card__para-2"> {props.Data.title}</p>
      <p className="card__para-3">
        <span className="bold"> From {props.Data.price}</span> / Person
      </p>
    </div>
  );
}
