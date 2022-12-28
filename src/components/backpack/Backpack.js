import topLogo from '../../resources/img/toplogo.svg';
import './backpack.scss';

const Backpack = ({ checkBackpack, onSwitchComponent }) => {
  return (
    <div className="backpack">
      <div className="head">
        <img className="top-logo" src={topLogo} alt="Top logo" />
        <h2>
          Перевір свій
          <br /> рюкзак
        </h2>
      </div>

      <ul className="backpack-list">{checkBackpack()}</ul>

      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => onSwitchComponent('main')}
        >
          Вирушаймо!
        </button>
        <button
          className="button button__back button__big"
          onClick={() => onSwitchComponent('equipment list')}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Backpack;
