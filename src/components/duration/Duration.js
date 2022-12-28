import cn from "classnames";
import { useEffect, useState } from "react";
import TopLogo from "../topLogo/TopLogo";
import Options from "../options/Options";
import oneDayImg from "../../resources/img/1day.png";
import twoDaysImg from "../../resources/img/2-3days.png";
import overThreeDaysImg from "../../resources/img/over3days.png";
import "./duration.scss";

const Duration = ({ duration, changeData, onSwitchComponent }) => {
  const [isActive, setIsActive] = useState(null);
  const compName = "duration";
  const options = ["1 день", "2-3 дні", "> 3 днів"];

  useEffect(() => {
    setIsActive(true);
  }, [duration]);

  return (
    <div className="duration">
      <div className="head">
        <TopLogo onSwitchComponent={onSwitchComponent} />
        <h2>
          Яка тривалість <br /> походу?
        </h2>
        <Options
          setIsActive={setIsActive}
          compState={duration}
          changeData={changeData}
          compName={compName}
          options={options}
        />
      </div>
      <img
        className={cn("duration-img", { "slide-left": isActive })}
        src={
          duration === "1 день"
            ? oneDayImg
            : duration === "2-3 дні"
            ? twoDaysImg
            : overThreeDaysImg
        }
        alt="Duration img"
      />
      <div className="btn_nav_group">
        <button
          className="button button__big"
          onClick={() => onSwitchComponent("equipment list")}
        >
          Погнали далі
        </button>
        <button
          className="button button__back button__big"
          onClick={() => onSwitchComponent("weather")}
        >
          Повернутися назад
        </button>
      </div>
    </div>
  );
};

export default Duration;
