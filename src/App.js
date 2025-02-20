import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./data";
import star from "../src/components/images/Star.jpg";

import "../src/style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="card__section">
        <div className="card__scroller">
          {Data().map((Data) => (
            <Card key={Data.id} Data={Data} />
          ))}
        </div>
      </div>
      <Hero />
    </>
  );
}
