import seasonImg from "../../resources/img/season.png";
import "./season.scss";

const Season = (props) => {
  const { season } = props;

  return (
    <div className="season">
      <div className="head">
        <h2>
          Який сезон <br /> оберете?
        </h2>
        <div className="btn_group">
          <button
            onClick={() => props.changeSeason("winter")}
            disabled={season === "winter" ? true : false}
            className="button button__small"
          >
            Зима
          </button>
          <button
            onClick={() => props.changeSeason("spring")}
            disabled={season === "spring" ? true : false}
            className="button button__small"
          >
            Весна
          </button>
          <button
            onClick={() => props.changeSeason("summer")}
            disabled={season === "summer" ? true : false}
            className="button button__small"
          >
            Літо
          </button>
          <button
            onClick={() => props.changeSeason("autumn")}
            disabled={season === "autumn" ? true : false}
            className="button button__small"
          >
            Осінь
          </button>
        </div>
      </div>

      <img src={seasonImg} alt="Season img" />
      <div className="btn_nav_group">
        <button className="button button__big">
          <a href="/weather">Погнали далі</a>
        </button>
        <button className="button button__back button__big">
          <a href="/">Повернутися назад</a>
        </button>
      </div>
    </div>
  );
};

export default Season;
