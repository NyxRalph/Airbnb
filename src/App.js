import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import "../src/style.css";


import Data from "./data";
import star from "./images/Star.jpg";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card__section">
        {Data.map((Data) => { <Card
          img={Data.img}
          available="SOLD OUT"
          star={star}
          rating={Data.rating}
          review={Data.reviewcount}
          country={Data.location}
          title={Data.title}
          price={Data.price}
        />})}

       
      </div>
    </>
  );
}
