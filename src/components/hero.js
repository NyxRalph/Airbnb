import React from "react";
import PicOne from "../images/w1.jpeg";
import PicTwo from "../images/w2.jpeg";
import PicThree from "../images/w3.jpeg";
import PicFour from "../images/w4.jpeg";
import PicFive from "../images/w5.jpeg";
import PicSix from "../images/w6.jpeg";
import PicSeven from "../images/w7.jpeg";
import PicEight from "../images/w8.jpeg";
import PicNine from "../images/w9.jpeg";
import PicZero from "../images/w0.jpeg";

export default function Hero() {
  return (
    <div className="hero__section">
      <div className="pic__container">
        <div className="containTwo">
          <img src={PicThree} className="hero picThree" />
          <img src={PicFour} className="hero picFour" />
        </div>
        <div className="containOne">
          <img src={PicOne} className="hero picOne" />
          <img src={PicTwo} className="hero picTwo" />
        </div>
        <div className="containThree">
          <img src={PicFive} className="hero picFive" />
          <img src={PicSix} className="hero picSix" />
        </div>
        <div className="containFour">
          <img src={PicSeven} className="hero picSeven" />
          <img src={PicEight} className="hero picEight" />
        </div>
        <div className="containFive">
          <img src={PicNine} className="hero picNine" />
          <img src={PicZero} className="hero picZero" />
        </div>
      </div>
    </div>
  );
}
