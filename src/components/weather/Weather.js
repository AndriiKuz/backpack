import cn from "classnames";
import { useState, useEffect } from "react";
import TopLogo from "../topLogo/TopLogo";
import Options from "../options/Options";
import sunnyBg from "../../resources/img/sunny-bg.png";
import rainBg from "../../resources/img/rain-bg.png";
import snowBg from "../../resources/img/snow-bg.png";
import cloudBg from "../../resources/img/cloudy-bg.png";
import sunny from "../../resources/img/sunny.png";
import winterImg from "../../resources/img/winter.png";
import "./weather.scss";

const Weather = ({ weather, changeData, onSwitchComponent }) => {
  const [isActive, setIsActive] = useState(null);
  const compName = "weather";
  const options = ["Ясно", "Хмарно", "Дощ", "Сніг"];

  useEffect(() => {
    setIsActive(true);
  }, [weather]);

  return (
    <div className="weather">
      <img
        className={cn("weather-bg", { "fall-down": isActive })}
        src={
          weather === "Ясно"
            ? sunnyBg
            : weather === "Дощ"
            ? rainBg
            : weather === "Сніг"
            ? snowBg
            : cloudBg
        }
        alt="Season background"
      />
      <div className="head">
        <TopLogo onSwitchComponent={onSwitchComponent} />
        <h2>
          Яка погода <br /> очікується?
        </h2>
        <Options
          setIsActive={setIsActive}
          compState={weather}
          changeData={changeData}
          compName={compName}
          options={options}
        />
      </div>

      <img
        className={cn("weather-img", { "slide-left": isActive })}
        src={weather === "Сніг" ? winterImg : sunny}
        alt="Weather img"
      />

      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => onSwitchComponent("duration")}
        >
          Погнали далі
        </button>
        <button
          className="button button__back button__big"
          onClick={() => onSwitchComponent("season")}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Weather;
