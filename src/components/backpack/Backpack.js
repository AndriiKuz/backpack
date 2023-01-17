import TopLogo from '../topLogo/TopLogo';
import './backpack.scss';

const Backpack = ({
  checkBackpack,
  onSwitchComponent,
  equipArr,
  resetData,
}) => {
  return (
    <div className="backpack">
      <div className="head">
        <TopLogo onSwitchComponent={onSwitchComponent} />
        <h2>
          Перевір свій
          <br /> рюкзак
        </h2>
      </div>

      <ul className="backpack-list">{checkBackpack()}</ul>

      <div className="btn_nav_group">
        <button
          disabled={!equipArr.length}
          className="button button__big"
          onClick={() => {
            onSwitchComponent('done');
            resetData();
          }}
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
