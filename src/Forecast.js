//Libraries
import React, { useState } from "react";
import axios from "axios";

//Components
import Time from "./Time";

//CSS Files
import "./Forecast.css";
import "./Header.css";
import "./LocationAndDate.css";

//Weather Icons
import Clouds from "./Images/Clouds.png";
import DayCloud from "./Images/DayCloud.png";
import DayRain from "./Images/DayRain.png";
import Hail from "./Images/Hail.png";
import Mist from "./Images/Mist.png";
import Moon from "./Images/Moon.png";
import NightCloud from "./Images/NightCloud.png";
import NightRain from "./Images/NightRain.png";
import OneCloud from "./Images/OneCloud.png";
import Rain from "./Images/Rain.png";
import Snow from "./Images/Snow.png";
import Sun from "./Images/Sun.png";
import Thunderstorm from "./Images/Thunderstorm.png";
import Wind from "./Images/Wind.png";

export default function Forecast() {
  let [currentDate, setCurrentDate] = useState("");
  let [pageNumber, setPageNumber] = useState(6);
  let [pages, setPages] = useState([]);

  function formatDate(timestamp) {
    let date = new Date(timestamp);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dayNumber = date.getDay();
    let dayName = daysOfWeek[dayNumber];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let monthNumber = date.getMonth();
    let monthName = monthNames[monthNumber];

    let day = date.getDate();

    setCurrentDate(`${dayName}, ${monthName} ${day}`);
  }

  //Locate User
  function locateUser() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = "5ed4231e4848c446bb7ab760ec22172f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getForecast);
  }

  //Update City on Search
  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  //Get Forecast
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [degree, setDegree] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function getForecast(response) {
    setPages([
      {
        city: response.data.name,
        date: formatDate(response.data.daily[1].dt * 1000),
        degree: Math.round(response.data.daily[1].temp.day - 273.15),
        description: response.data.daily[1].weather[0].description,
        humidity: response.data.daily[1].humidity,
        wind: Math.round(response.data.daily[1].wind_speed),
        icon: response.data.daily[1].weather[0].icon,
      },
      {
        city: response.data.name,
        date: formatDate(response.data.daily[2].dt * 1000),
        degree: Math.round(response.data.daily[2].temp.day - 273.15),
        description: response.data.daily[2].weather[0].description,
        humidity: response.data.daily[2].humidity,
        wind: Math.round(response.data.daily[2].wind_speed),
        icon: response.data.daily[2].weather[0].icon,
      },
      {
        city: response.data.name,
        date: formatDate(response.data.daily[3].dt * 1000),
        degree: Math.round(response.data.daily[3].temp.day - 273.15),
        description: response.data.daily[3].weather[0].description,
        humidity: response.data.daily[3].humidity,
        wind: Math.round(response.data.daily[3].wind_speed),
        icon: response.data.daily[3].weather[0].icon,
      },
      {
        city: response.data.name,
        date: formatDate(response.data.daily[4].dt * 1000),
        degree: Math.round(response.data.daily[4].temp.day - 273.15),
        description: response.data.daily[4].weather[0].description,
        humidity: response.data.daily[4].humidity,
        wind: Math.round(response.data.daily[4].wind_speed),
        icon: response.data.daily[4].weather[0].icon,
      },
      {
        city: response.data.name,
        date: formatDate(response.data.daily[5].dt * 1000),
        degree: Math.round(response.data.daily[5].temp.day - 273.15),
        description: response.data.daily[5].weather[0].description,
        humidity: response.data.daily[5].humidity,
        wind: Math.round(response.data.daily[5].wind_speed),
        icon: response.data.daily[5].weather[0].icon,
      },
      {
        city: response.data.name,
        date: formatDate(response.data.daily[6].dt * 1000),
        degree: Math.round(response.data.daily[6].temp.day - 273.15),
        description: response.data.daily[6].weather[0].description,
        humidity: response.data.daily[6].humidity,
        wind: Math.round(response.data.daily[6].wind_speed),
        icon: response.data.daily[6].weather[0].icon,
      },
      {
        city: response.data.name,
        date: formatDate(response.data.current.dt * 1000),
        degree: Math.round(response.data.current.temp - 273.15),
        description: response.data.current.weather[0].description,
        humidity: response.data.current.humidity,
        wind: Math.round(response.data.current.wind_speed),
        icon: response.data.current.weather[0].icon,
      },
    ]);
    setLoaded(true);
  }

  console.log(pages);

  function next() {
    setPageNumber(pageNumber + 1);
    if (pageNumber > pages.length - 1) {
      setPageNumber(0);
    }
    updateSection();
  }

  function previous() {
    setPageNumber(pageNumber - 1);
    if (pageNumber < 0) {
      setPageNumber(pages.length - 1);
    }
    updateSection();
  }

  function updateSection() {
    setCity(pages[pageNumber].city);
    setDate(pages[pageNumber].date);
    setDegree(pages[pageNumber].degree);
    setDescription(pages[pageNumber].description);
    setHumidity(pages[pageNumber].humidity);
    setWind(pages[pageNumber].wind);
    setIcon(pages[pageNumber].icon);

    let code = pages[pageNumber].icon;

    if (code === "11d") {
      setIcon(Thunderstorm);
    } else if (code === "09d") {
      setIcon(Rain);
    } else if (code === "10d") {
      setIcon(DayRain);
    } else if (code === "09d") {
      setIcon(NightRain);
    } else if (code === "13d") {
      setIcon(Snow);
    } else if (code === "50d") {
      setIcon(Mist);
    } else if (code === "01d") {
      setIcon(Sun);
    } else if (code === "01n") {
      setIcon(Moon);
    } else if (code === "02d") {
      setIcon(DayCloud);
    } else if (code === "02n") {
      setIcon(NightCloud);
    } else if (code === "03d" || code === "03n") {
      setIcon(OneCloud);
    } else if (code === "04d" || code === "04n") {
      setIcon(Clouds);
    }
  }

  if (loaded) {
    return (
      <div>
        <header>
          <button id="get-location" onClick={locateUser}>
            <img id="pin" src="./Images/Pin.png" alt="" />
            Get Location
          </button>
          <Time />
          <form onSubmit={handleSubmit} id="search-form">
            <input type="search" id="search-input" onChange={handleCity} />
          </form>
        </header>
        <div className="description">
          <h1>
            <span id="current-city">{city}</span>
          </h1>
          <h2 id="current-date">{date}</h2>
        </div>
        <div id="outer">
          <button onClick={previous}>
            <img
              className="arrows"
              id="left"
              src="Images/LeftArrow.png"
              alt=""
            />
          </button>
          <img id="icon" src={icon} alt="" />
          <div className="centered">
            <span id="degree">{degree}</span>
            <span id="degree-symbol">&deg;</span>
            <div className="temperature">
              <button id="celsius">C&nbsp;</button>
              <button id="farenheit">| F</button>
            </div>
          </div>
          <button onClick={next}>
            <img
              className="arrows"
              id="right"
              src="Images/RightArrow.png"
              alt=""
            />
          </button>
        </div>
        <div>
          <p>
            <span id="description">{description}</span>
            <br />
            Humidity: <span id="humidity">{humidity}</span>% | Wind:{" "}
            <span id="wind">{wind}</span> mph
          </p>
        </div>
      </div>
    );
  } else {
    locateUser();

    return (
      <div>
        <header>
          <button id="get-location" onClick={locateUser}>
            <img id="pin" src="./Images/Pin.png" alt="" />
            <span id="location-button">Get Location</span>
          </button>
          <Time />
          <form onSubmit={handleSubmit} id="search-form">
            <input type="search" id="search-input" onChange={handleCity} />
          </form>
        </header>
        <p>Loading...</p>
      </div>
    );
  }
}
