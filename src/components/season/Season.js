import season from "../../resources/img/season.png";
import "./season.scss";

const Season = () => {
  return (
    <div className="season">
      <div className="head">
        <h2>
          Який сезон <br /> оберете?
        </h2>
        <div className="btn_group">
          <button className="button button__small">Зима</button>
          <button className="button button__small">Весна</button>
          <button className="button button__small">Літо</button>
          <button className="button button__small">Осінь</button>
        </div>
      </div>

      <img src={season} alt="Season img" />
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
