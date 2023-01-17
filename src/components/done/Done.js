import mountines from '../../resources/img/mountines.svg';
import './done.scss';

const Done = ({ onSwitchComponent }) => {
  return (
    <div className="done">
      <h2 className="manifestation">
        Гори кличуть тих, <br /> чия душа їм <br /> по росту!
      </h2>
      <img className="bounce-in" src={mountines} alt="Done img" />
      <button
        className="button button__big manifestation"
        onClick={() => onSwitchComponent('main')}
      >
        Почати знову
      </button>
    </div>
  );
};

export default Done;
