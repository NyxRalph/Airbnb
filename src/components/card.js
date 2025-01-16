

import React, { useState } from "react";
import HoverCard from "./hovercard";

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card__container" 
        //  onMouseEnter={() => setIsHovered(true)} dfghjk
         onMouseLeave={() => setIsHovered(false)}>
      <div className="status">
        {props.Data.openSpots === 0 && (
          <p className="status__message">{props.Data.available}</p>
        )}
      </div>
      <img className="cardTwo c_img" src={require(`./images/${props.Data.img}`)} alt={props.Data.title} />
      <div className="card__para-1">
        <img className="star" src={require(`./images/${props.Data.star}`)} alt="Star" />
        <p className="star__para">
          {props.Data.states.rating} ({props.Data.states.reviewcount}) {props.Data.country}
        </p>
      </div>
      <p className="card__para-2"> {props.Data.title}</p>
      <p className="card__para-3">
        <span className="bold"> From {props.Data.price}</span> / Person
      </p>
      <HoverCard data={props.Data} onClose={() => setIsHovered(false)} isVisible={isHovered} />
    </div>
  );
}