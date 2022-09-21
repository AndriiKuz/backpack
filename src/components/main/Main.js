import backpack from "../../resources/img/backpack.png";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <p className="logo">
        кузь <br />х<br /> сашка
      </p>
      <h1>
        Збери свій <br /> рюкзак в похід
      </h1>
      <img src={backpack} alt="Main img" />

      <button className="button button__big">
        <a href="/season">Гори кличуть</a>
      </button>
    </div>
  );
};

export default Main;
