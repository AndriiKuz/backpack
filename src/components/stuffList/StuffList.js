import "./stuffList.scss";

const StuffList = () => {
  return (
    <div className="stuff">
      <div className="head">
        <h2>
          Рекомендоване
          <br /> спорядження
        </h2>
      </div>

      <ul className="stuff-list">
        <li className="list-item">Намет</li>
        <li className="list-item">Спальний мішок</li>
        <li className="list-item">Термос</li>
        <li className="list-item">Посуд</li>
        <li className="list-item">Пальник</li>
        <li className="list-item">Теплий одяг</li>
        <li className="list-item">Ліхтарик</li>
        <li className="list-item">Павербанк</li>
      </ul>

      <div className="btn_nav_group">
        <button className="button button__big">
          <a href="/">Гори кличуть</a>
        </button>
      </div>
    </div>
  );
};

export default StuffList;
