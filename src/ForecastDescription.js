import React from "react";
import "./ForecastDescription.css";

export default function ForecastDescription() {
  return (
    <p>
      <span id="description">Clear Sky</span>
      <br />
      Humidity: <span id="humidity">50</span>% | Wind: <span id="wind">10</span>{" "}
      mph
    </p>
  );
}
