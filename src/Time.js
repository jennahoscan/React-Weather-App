import React, { useState } from "react";
import "./Header.css";

export default function Time() {
  // Get Current Time and Update Every Second
  let [currentTime, setCurrentTime] = useState("");

  setInterval(function getTime() {
    let date = new Date();

    let hours = date.getHours();
    let amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    setCurrentTime(`${hours}:${minutes} ${amOrPm}`);
  }, 1000);

  return <span id="current-time">{currentTime}</span>;
}
