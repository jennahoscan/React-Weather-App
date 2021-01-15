import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <span id="get-location">
        <img id="pin" src="./Images/Pin.png" alt="" />
        Get Location
      </span>
      <span id="current-time">12:00pm</span>
      <form id="search-form">
        <input type="search" id="search-input" />
      </form>
    </header>
  );
}
