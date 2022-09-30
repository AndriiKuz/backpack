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
            onClick={() => props.changeWeather("sunny")}
            disabled={weather === "sunny" ? true : false}
            className="button button__small"
          >
            Ясно
          </button>
          <button
            onClick={() => props.changeWeather("rain")}
            disabled={weather === "rain" ? true : false}
            className="button button__small"
          >
            Дощ
          </button>
          <button
            onClick={() => props.changeWeather("snow")}
            disabled={weather === "snow" ? true : false}
            className="button button__small"
          >
            Сніг
          </button>
        </div>
      </div>

      <img src={weatherImg} alt="Weather img" />
      <div className="btn_nav_group">
        <button className="button button__big">
          <a href="/duration">Погнали далі</a>
        </button>
        <button className="button button__back button__big">
          <a href="/season">Повернутися назад</a>
        </button>
      </div>
    </div>
  );
};

export default Weather;
