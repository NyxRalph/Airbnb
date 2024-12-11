import React from "react";

export default function Card(props) {
  return (
    <div className="card__container">
      <div className="status">
        <p className="status__message">{props.available}</p>
      </div>
      <img className="cardTwo c_img" src={props.img} />

      <div className="card__para-1">
        <img className="star" src={props.star} />
        <p className="star__para">{props.rating} {props.review} {props.country}</p>
      </div>
      <p className="card__para-2"> {props.title}</p>
      <p className="card__para-3">
        <span className="bold"> From {props.price}</span> / Person
      </p>
    </div>
  );
}
