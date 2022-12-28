import backpack from "../../resources/img/backpack.png";
import "./main.scss";

const Main = ({ onSwitchComponent }) => {
  return (
    <div className="main">
      <img className="bounce-in" src={backpack} alt="Main img" />
      <button
        className="button button__big manifestation"
        onClick={() => onSwitchComponent("season")}
      >
        Гори кличуть
      </button>
    </div>
  );
};

export default Main;
