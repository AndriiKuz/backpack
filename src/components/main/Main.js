import backpack from "../../resources/img/backpack.png";
import "./main.scss";

const Main = (props) => {
  return (
    <div className="main">
      <img src={backpack} alt="Main img" />

      <button
        className="button button__big"
        onClick={() => props.onSwitchComponent("season")}
      >
        Гори кличуть
      </button>
    </div>
  );
};

export default Main;
