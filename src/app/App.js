import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../components/main/Main";
import Season from "../components/season/Season";
import Weather from "../components/weather/Weather";
import Duration from "../components/duration/Duration";
import StuffList from "../components/stuffList/StuffList";
import stuff from "../database/stuff.json";

import "./app.scss";

const App = () => {
  const stuffDB = stuff;

  const [season, setSeason] = useState("winter");
  const [weather, setWeather] = useState("sunny");
  const [duration, setDuration] = useState("1 day");

  useEffect(() => {
    setSeason(localStorage.getItem("season"));
    setWeather(localStorage.getItem("weather"));
    setDuration(localStorage.getItem("duration"));
  }, [season, weather, duration]);

  const changeSeason = (season) => {
    localStorage.setItem("season", season);
    setSeason(localStorage.getItem("season"));
  };

  const changeWeather = (weather) => {
    localStorage.setItem("weather", weather);
    setWeather(localStorage.getItem("weather"));
  };

  const changeDuration = (duration) => {
    localStorage.setItem("duration", duration);
    setDuration(localStorage.getItem("weather"));
  };

  const changeStuffList = () => {
    const stuffList = [];

    stuffDB.stuff
      .filter(
        (elem) =>
          elem.season.includes(season) &&
          elem.weather.includes(weather) &&
          elem.duration.includes(duration)
      )
      .map((item, id) =>
        stuffList.push(
          <li key={id} className="list-item">
            {item.name}
          </li>
        )
      );
    return stuffList;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/season"
            element={<Season changeSeason={changeSeason} season={season} />}
          />
          <Route
            path="/weather"
            element={
              <Weather changeWeather={changeWeather} weather={weather} />
            }
          />
          <Route
            path="/duration"
            element={
              <Duration changeDuration={changeDuration} duration={duration} />
            }
          />
          <Route
            path="/stuff-list"
            element={<StuffList changeStuffList={changeStuffList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
