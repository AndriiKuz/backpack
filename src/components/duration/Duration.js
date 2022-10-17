import durationImg from "../../resources/img/duration.png";
import topLogo from "../../resources/img/toplogo.svg";
import "./duration.scss";

const Duration = (props) => {
  const { duration } = props;

  return (
    <div className="duration">
      <div className="head">
        <img className="top-logo" src={topLogo} alt="Top logo" />
        <h2>
          Яка тривалість <br /> походу?
        </h2>
        <div className="btn_group">
          <button
            onClick={() => props.changeData("duration", "1 day")}
            disabled={duration === "1 day" ? true : false}
            className="button button__small"
          >
            1 день
          </button>
          <button
            onClick={() => props.changeData("duration", "2-3 days")}
            disabled={duration === "2-3 days" ? true : false}
            className="button button__small"
          >
            2-3 дні
          </button>
          <button
            onClick={() => {
              props.changeData("duration", "over 3 days");
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
        <button
          className="button button__big"
          onClick={() => props.onSwitchComponent("equipment list")}
        >
          Погнали далі
        </button>
        <button
          className="button button__back button__big"
          onClick={() => props.onSwitchComponent("weather")}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Duration;
