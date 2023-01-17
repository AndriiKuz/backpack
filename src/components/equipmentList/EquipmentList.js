import TopLogo from '../topLogo/TopLogo';
import './equipmentList.scss';

const EquipmentList = ({ changeEquipmentList, onSwitchComponent }) => {
  return (
    <div className="equipment">
      <div className="head">
        <TopLogo onSwitchComponent={onSwitchComponent} />
        <h2>Обери що покласти в рюкзак</h2>
      </div>

      <ul className="equipment-list">{changeEquipmentList()}</ul>

      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => onSwitchComponent('backpack')}
        >
          Перевірити рюкзак
        </button>
        <button
          className="button button__back button__big"
          onClick={() => onSwitchComponent('duration')}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default EquipmentList;
