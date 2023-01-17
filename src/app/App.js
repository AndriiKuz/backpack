import { useState } from 'react';
import Main from '../components/main/Main';
import Season from '../components/season/Season';
import Weather from '../components/weather/Weather';
import Duration from '../components/duration/Duration';
import EquipmentList from '../components/equipmentList/EquipmentList';
import EquipmentListItem from '../components/equipmentListItem/EquipmentListItem';
import Backpack from '../components/backpack/Backpack';
import BackpackListItem from '../components/backpackListItem/BackpackListItem';
import Done from '../components/done/Done';
import equipmentDB from '../equipment.json';

import './app.scss';

const App = () => {
  const [season, setSeason] = useState('Зима');
  const [weather, setWeather] = useState('Ясно');
  const [duration, setDuration] = useState('1 день');
  const [component, setComponent] = useState('main');
  const [equipArr, setEquipArr] = useState([]);

  const onSwitchComponent = (component) => {
    setComponent(component);
  };

  const changeData = (compName, item) => {
    switch (compName) {
      case 'season':
        setSeason(item);
        break;
      case 'weather':
        setWeather(item);
        break;
      case 'duration':
        setDuration(item);
        break;
      default:
    }
  };

  const changeEquipmentList = () => {
    return equipmentDB.equipment
      .filter(
        (elem) =>
          elem.season.includes(season) &&
          elem.weather.includes(weather) &&
          elem.duration.includes(duration)
      )
      .map((item, id) => (
        <EquipmentListItem
          key={id}
          id={id}
          item={item}
          equipArr={equipArr}
          moveEquipToBackpack={moveEquipToBackpack}
        />
      ));
  };

  const delEquipFromBackpack = (id) => {
    setEquipArr(
      (equipArr) => (equipArr = equipArr.filter((item) => item !== id))
    );
  };

  const moveEquipToBackpack = (e, id) => {
    if (!e.target.classList.contains('active')) {
      e.target.classList.toggle('active');
      setEquipArr((equipArr) => (equipArr = [...equipArr, id]));
    } else {
      delEquipFromBackpack(id);
      e.target.classList.toggle('active');
    }
  };

  const checkBackpack = () => {
    if (equipArr.length) {
      return equipArr.map((item, id) => (
        <BackpackListItem
          key={id}
          item={item}
          delEquipFromBackpack={delEquipFromBackpack}
        />
      ));
    } else {
      return (
        <li key={'empty'} id={'empty'} className="list-item">
          <p className="equipment-name">Рюкзак порожній</p>
        </li>
      );
    }
  };

  const render = () => {
    switch (component) {
      case 'main':
        return <Main onSwitchComponent={onSwitchComponent} />;

      case 'season':
        return (
          <Season
            onSwitchComponent={onSwitchComponent}
            changeData={changeData}
            season={season}
          />
        );
      case 'weather':
        return (
          <Weather
            onSwitchComponent={onSwitchComponent}
            changeData={changeData}
            weather={weather}
          />
        );
      case 'duration':
        return (
          <Duration
            onSwitchComponent={onSwitchComponent}
            changeData={changeData}
            duration={duration}
          />
        );

      case 'equipment list':
        return (
          <EquipmentList
            onSwitchComponent={onSwitchComponent}
            changeEquipmentList={() => changeEquipmentList()}
          />
        );

      case 'backpack':
        return (
          <Backpack
            onSwitchComponent={onSwitchComponent}
            checkBackpack={checkBackpack}
            equipArr={equipArr}
          />
        );
      case 'done':
        return <Done onSwitchComponent={onSwitchComponent} />;

      default:
    }
  };

  const renderComponent = render();

  return <div className="App">{renderComponent}</div>;
};

export default App;
