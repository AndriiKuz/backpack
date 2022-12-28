import topLogo from "../../resources/img/toplogo.svg";
import "./topLogo.scss";

const TopLogo = ({ onSwitchComponent }) => {
  return (
    <button className="home" onClick={() => onSwitchComponent("main")}>
      <img className="top-logo" src={topLogo} alt="Top logo" />
    </button>
  );
};

export default TopLogo;
