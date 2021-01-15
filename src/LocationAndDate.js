import React from "react";
import "./LocationAndDate.css";

export default function LocationAndDate() {
  return (
    <div className="description">
      <h1>
        <span id="current-city">Baltimore</span>
      </h1>
      <h2 id="current-date">December 29, 2020</h2>
    </div>
  );
}
