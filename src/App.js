import React from "react";
import Header from "./Header";
import LocationAndDate from "./LocationAndDate";
import Forecast from "./Forecast";
import ForecastDescription from "./ForecastDescription";
import Footer from "./Footer";
import Illustrations from "./Illustrations";
import "./styles.css";

export default function App() {
  return (
    <div className="FullApp">
      <Header />
      <LocationAndDate />
      <Forecast />
      <ForecastDescription />
      <Footer />
      <Illustrations />
    </div>
  );
}
