import topLogo from "../../resources/img/toplogo.svg";
import "./equipmentList.scss";

const EquipmentList = (props) => {
  return (
    <div className="equipment">
      <div className="head">
        <img className="top-logo" src={topLogo} alt="Top logo" />
        <h2>
          Рекомендоване
          <br /> спорядження
        </h2>
      </div>

      <ul className="equipment-list">{props.changeEquipmentList()}</ul>

      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => props.onSwitchComponent("main")}
        >
          Готово
        </button>
      </div>
    </div>
  );
};

export default EquipmentList;
