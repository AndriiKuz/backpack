// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../components/main/Main";
import Season from "../components/season/Season";
import Weather from "../components/weather/Weather";
import Duration from "../components/duration/Duration";
import EquipmentList from "../components/equipmentList/EquipmentList";
import equipmentDB from "../equipment.json";
import "./app.scss";

const App = () => {
  const [season, setSeason] = useState("winter");
  const [weather, setWeather] = useState("sunny");
  const [duration, setDuration] = useState("1 day");
  const [component, setComponent] = useState("main");

  const onSwitchComponent = (component) => {
    setComponent(component);
  };

  useEffect(() => {
    setSeason(localStorage.getItem("season"));
    setWeather(localStorage.getItem("weather"));
    setDuration(localStorage.getItem("duration"));
  }, [season, weather, duration]);

  const changeData = (key, value) => {
    localStorage.setItem(`${key}`, value);
    setSeason(localStorage.getItem(`${key}`));
  };

  const changeEquipmentList = () => {
    return equipmentDB.equipment
      .filter(
        (elem) =>
          elem.season.includes(season) &&
          elem.weather.includes(weather) &&
          elem.duration.includes(duration)
      )
      .map((item, id) => (
        <li key={id} className="list-item">
          {item.name}
        </li>
      ));
  };

  return (
    <div className="App">
      {component === "main" ? (
        <Main onSwitchComponent={onSwitchComponent} />
      ) : null}
      {component === "season" ? (
        <Season
          onSwitchComponent={onSwitchComponent}
          changeData={changeData}
          season={season}
        />
      ) : null}
      {component === "weather" ? (
        <Weather
          onSwitchComponent={onSwitchComponent}
          changeData={changeData}
          weather={weather}
        />
      ) : null}
      {component === "duration" ? (
        <Duration
          onSwitchComponent={onSwitchComponent}
          changeData={changeData}
          duration={duration}
        />
      ) : null}
      {component === "equipment list" ? (
        <EquipmentList
          onSwitchComponent={onSwitchComponent}
          changeEquipmentList={changeEquipmentList}
        />
      ) : null}
    </div>
  );
};

export default App;
