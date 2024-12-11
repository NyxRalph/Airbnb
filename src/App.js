import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import "../src/style.css";
import c2 from "./images/c2.jpeg";
import c3 from "./images/c3.jpeg";
import c4 from "./images/c4.jpeg";
import c5 from "./images/c5.jpeg";
import star from "./images/Star.jpg";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card__section">
        <Card
          img={c2}
          available="SOLD OUT"
          star={star}
          rating="5.0"
          review="(6)"
          country="USA"
          title="XVZ Fashion Week"
          price="$136"
        />
        <Card
          img={c3}
          available="SOLD OUT"
          star={star}
          rating="5.0"
          review="(6)"
          country="USA"
          title="XVZ Fashion Week"
          price="$136"
        />
        <Card
          img={c5}
          available="SOLD OUT"
          star={star}
          rating="5.0"
          review="(6)"
          country="USA"
          title="XVZ Fashion Week"
          price="$136"
        />
        <Card
          img={c2}
          available="SOLD OUT"
          star={star}
          rating="5.0"
          review="(6)"
          country="USA"
          title="XVZ Fashion Week"
          price="$136"
        />
      </div>
    </>
  );
}
