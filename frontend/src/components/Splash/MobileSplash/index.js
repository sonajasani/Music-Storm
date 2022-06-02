import React from "react";
import "./MobileSplash.css";
import mobImg from "./mob-sc2.jpg";

export default function MobileSplash() {
  return (
    <div id="mob-container">
      <div id="mob-img">
        <img src={mobImg} alt="mobile image" />
      </div>
      <div>
        <h1 id="mob-title">Never stop listening</h1>
      </div>
      <div id="mob-border"></div>
      <div>
        <p id="mob-txt">
          Enjoy your favorite songs for free on MusicStorm and share it with your Friends.
        </p>
      </div>
      <div id="mob-btns">
        <button id="apl" disabled></button>
        <button id="goog" disabled></button>
      </div>
    </div>
  );
}
