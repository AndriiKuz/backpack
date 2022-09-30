import durationImg from "../../resources/img/duration.png";
import "./duration.scss";

const Duration = (props) => {
  const { duration } = props;

  return (
    <div className="duration">
      <div className="head">
        <h2>
          Яка тривалість <br /> походу?
        </h2>
        <div className="btn_group">
          <button
            onClick={() => props.changeDuration("1 day")}
            disabled={duration === "1 day" ? true : false}
            className="button button__small"
          >
            1 день
          </button>
          <button
            onClick={() => props.changeDuration("2-3 days")}
            disabled={duration === "2-3 days" ? true : false}
            className="button button__small"
          >
            2-3 дні
          </button>
          <button
            onClick={() => {
              props.changeDuration("over 3 days");
            }}
            disabled={duration === "over 3 days" ? true : false}
            className="button button__small"
          >
            {">"} 3 днів
          </button>
        </div>
      </div>

      <img src={durationImg} alt="Duration img" />
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
