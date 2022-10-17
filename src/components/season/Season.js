import cn from "classnames";
import { useEffect, useState } from "react";
import topLogo from "../../resources/img/toplogo.svg";
import winterImg from "../../resources/img/winter.svg";
import winterBg from "../../resources/img/winterbackground.svg";
import springImg from "../../resources/img/spring.svg";
import springBg from "../../resources/img/springbackground.svg";
import summerImg from "../../resources/img/summer.svg";
import summerBg from "../../resources/img/summerbackground.svg";
import autumnImg from "../../resources/img/autumn.svg";
import autumnBg from "../../resources/img/autumnbackground.svg";
import "./season.scss";

const Season = (props) => {
  const [isActive, setIsActive] = useState(null);
  const { season } = props;

  useEffect(() => {
    setIsActive(true);
  }, [season]);

  return (
    <div className="season">
      <img
        className={cn("season-bg", { "fall-down": isActive })}
        src={
          season === "winter"
            ? winterBg
            : season === "spring"
            ? springBg
            : season === "summer"
            ? summerBg
            : autumnBg
        }
        alt="Season background"
      />
      <div className="head">
        <img className="top-logo" src={topLogo} alt="Top logo" />

        <h2>
          Який сезон <br /> оберете?
        </h2>
        <div className="btn_group">
          <button
            onClick={() => {
              props.changeData("season", "winter");
              setIsActive(false);
            }}
            disabled={season === "winter" ? true : false}
            className="button button__small"
          >
            Зима
          </button>
          <button
            onClick={() => {
              props.changeData("season", "spring");
              setIsActive(false);
            }}
            disabled={season === "spring" ? true : false}
            className="button button__small"
          >
            Весна
          </button>
          <button
            onClick={() => {
              props.changeData("season", "summer");
              setIsActive(false);
            }}
            disabled={season === "summer" ? true : false}
            className="button button__small"
          >
            Літо
          </button>
          <button
            onClick={() => {
              props.changeData("season", "autumn");
              setIsActive(false);
            }}
            disabled={season === "autumn" ? true : false}
            className="button button__small"
          >
            Осінь
          </button>
        </div>
      </div>

      <img
        className={cn("season-img", { "slide-left": isActive })}
        src={
          season === "winter"
            ? winterImg
            : season === "spring"
            ? springImg
            : season === "summer"
            ? summerImg
            : autumnImg
        }
        alt="Season img"
      />
      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => props.onSwitchComponent("weather")}
        >
          Погнали далі
        </button>
        <button
          className="button button__back button__big"
          onClick={() => props.onSwitchComponent("main")}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Season;
