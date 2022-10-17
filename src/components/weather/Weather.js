import weatherImg from "../../resources/img/weather.png";
import "./weather.scss";

const Weather = (props) => {
  const { weather } = props;

  return (
    <div className="weather">
      <div className="head">
        <h2>
          Яка погода <br /> очікується?
        </h2>
        <div className="btn_group">
          <button
            onClick={() => props.changeData("weather", "sunny")}
            disabled={weather === "sunny" ? true : false}
            className="button button__small"
          >
            Ясно
          </button>
          <button
            onClick={() => props.changeData("weather", "rain")}
            disabled={weather === "rain" ? true : false}
            className="button button__small"
          >
            Дощ
          </button>
          <button
            onClick={() => props.changeData("weather", "snow")}
            disabled={weather === "snow" ? true : false}
            className="button button__small"
          >
            Сніг
          </button>
        </div>
      </div>

      <img src={weatherImg} alt="Weather img" />
      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => props.onSwitchComponent("duration")}
        >
          Погнали далі
        </button>
        <button
          className="button button__back button__big"
          onClick={() => props.onSwitchComponent("season")}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Weather;
