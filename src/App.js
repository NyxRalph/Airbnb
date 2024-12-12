import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./data";
import star from "../src/components/images/Star.jpg";

import "../src/style.css";




// for (let i = 0; i < Data().length; ++i){
//   console.log(Data()[i]);

//   console.log(
//     Data().map((Data) => {
//       <Card
//         img={Data.img}
//         available="SOLD OUT"
//         star={star}
//         rating={Data.rating}
//         review={Data.reviewcount}
//         country={Data.location}
//         title={Data.title}
//         price={Data.price}
//       />
//     })
//   )

// }


console.log(Data()[1].location)
console.log(Data()[1].img)
        

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <div className="card__section">
        {Data().map(Data => 
          <Card
            img={Data.img}
            available="SOLD OUT"
            star={star}
            rating={Data.rating}
            review={Data.reviewcount}
            country={Data.location}
            title={Data.title}
            price={Data.price}
          />
        )}
      </div>
    </>
  );
}
