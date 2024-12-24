
import React from "react";
import "../hovercard.css"; 

export default function HoverCard({ data, onClose, isVisible }) {
  return (
    <div className={`hover-card ${isVisible ? 'visible' : ''}`} onMouseLeave={onClose}>
      <img className="hover-card__image" src={require(`./images/${data.img}`)} alt={data.title} />
      <div className="hover-card__details">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {/* <p><strong>Price:</strong> ${data.price} / Person</p> */}
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>Rating:</strong> {data.states.rating} ({data.states.reviewcount} reviews)</p>
      </div>
    </div>
  );
}