import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div id="outer">
      <button>
        <img className="arrows" id="left" src="Images/LeftArrow.png" alt="" />
      </button>
      <img id="icon" src="./Images/Sun.png" alt="" />
      <div className="centered">
        <span id="degree">3</span>
        <span id="degree-symbol">&deg;</span>
        <div className="temperature">
          <button id="celsius">C&nbsp;</button>
          <button id="farenheit">| F</button>
        </div>
      </div>
      <button>
        <img className="arrows" id="right" src="Images/RightArrow.png" alt="" />
      </button>
    </div>
  );
}
