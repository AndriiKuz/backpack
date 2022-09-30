import "./stuffList.scss";

const StuffList = (props) => {
  return (
    <div className="stuff">
      <div className="head">
        <h2>
          Рекомендоване
          <br /> спорядження
        </h2>
      </div>

      <ul className="stuff-list">{props.changeStuffList()}</ul>

      <div className="btn_nav_group">
        <button className="button button__big">
          <a href="/">Гори кличуть</a>
        </button>
      </div>
    </div>
  );
};

export default StuffList;
