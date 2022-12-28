import cn from "classnames";
import { useEffect, useState } from "react";
import TopLogo from "../topLogo/TopLogo";
import Options from "../options/Options";
import winterImg from "../../resources/img/winter.png";
import winterBg from "../../resources/img/winter-bg.png";
import springImg from "../../resources/img/spring.png";
import springBg from "../../resources/img/spring-bg.png";
import summerImg from "../../resources/img/summer.png";
import summerBg from "../../resources/img/summer-bg.png";
import autumnImg from "../../resources/img/autumn.png";
import autumnBg from "../../resources/img/autumn-bg.png";
import "./season.scss";

const Season = ({ season, changeData, onSwitchComponent }) => {
  const [isActive, setIsActive] = useState(null);
  const compName = "season";
  const options = ["Зима", "Весна", "Літо", "Осінь"];

  useEffect(() => {
    setIsActive(true);
  }, [season]);

  return (
    <div className="season">
      <img
        className={cn("season-bg", { "fall-down": isActive })}
        src={
          season === "Зима"
            ? winterBg
            : season === "Весна"
            ? springBg
            : season === "Літо"
            ? summerBg
            : autumnBg
        }
        alt="Season background"
      />
      <div className="head">
        <TopLogo onSwitchComponent={onSwitchComponent} />
        <h2>
          Який сезон <br /> оберете?
        </h2>
        <Options
          setIsActive={setIsActive}
          compState={season}
          changeData={changeData}
          compName={compName}
          options={options}
        />
      </div>

      <img
        className={cn("season-img", { "slide-left": isActive })}
        src={
          season === "Зима"
            ? winterImg
            : season === "Весна"
            ? springImg
            : season === "Літо"
            ? summerImg
            : autumnImg
        }
        alt="Season img"
      />
      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => onSwitchComponent("weather")}
        >
          Погнали далі
        </button>
        <button
          className="button button__back button__big"
          onClick={() => onSwitchComponent("main")}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Season;
