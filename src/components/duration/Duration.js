import duration from "../../resources/img/duration.png";
import "./duration.scss";

const Duration = () => {
  return (
    <div className="duration">
      <div className="head">
        <h2>
          Яка тривалість <br /> походу?
        </h2>
        <div className="btn_group">
          <button className="button button__small">1 день</button>
          <button className="button button__small">2-3 дні</button>
          <button className="button button__small">{">"} 3 днів</button>
        </div>
      </div>

      <img src={duration} alt="Duration img" />
      <div className="btn_nav_group">
        <button className="button button__big">
          <a href="/stuff-list">Погнали далі</a>
        </button>
        <button className="button button__back button__big">
          <a href="/weather">Повернутися назад</a>
        </button>
      </div>
    </div>
  );
};

export default Duration;
