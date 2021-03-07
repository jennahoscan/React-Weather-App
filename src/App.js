import React from "react";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Illustrations from "./Illustrations";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Forecast />
      <Footer />
      <Illustrations />
    </div>
  );
}
