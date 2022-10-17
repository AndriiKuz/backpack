import "./equipmentList.scss";

const EquipmentList = (props) => {
  return (
    <div className="equipment">
      <div className="head">
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
          Гори кличуть
        </button>
      </div>
    </div>
  );
};

export default EquipmentList;
