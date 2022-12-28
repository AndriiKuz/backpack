import { useState, useEffect } from 'react';
import Main from '../components/main/Main';
import Season from '../components/season/Season';
import Weather from '../components/weather/Weather';
import Duration from '../components/duration/Duration';
import EquipmentList from '../components/equipmentList/EquipmentList';
import Backpack from '../components/backpack/Backpack';
import equipmentDB from '../equipment.json';
import trash from '../../src/resources/img/trash.svg';
import './app.scss';

const App = () => {
  const [season, setSeason] = useState('Зима');
  const [weather, setWeather] = useState('sunny');
  const [duration, setDuration] = useState('1 day');
  const [component, setComponent] = useState('main');
  const [equipArr, setEquipArr] = useState([]);

  useEffect(() => {
    setSeason(localStorage.getItem('season'));
    setWeather(localStorage.getItem('weather'));
    setDuration(localStorage.getItem('duration'));
  }, [season, weather, duration]);

  const onSwitchComponent = (component) => {
    setComponent(component);
  };

  const changeData = (key, value) => {
    localStorage.setItem(`${key}`, value);
    setSeason(localStorage.getItem(`${key}`));
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
        <li key={id} id={item.name} className="list-item">
          <button
            className={
              equipArr.includes(item.name) ? 'list-btn active' : 'list-btn'
            }
            onClick={(e) => moveEquipToBackpack(e, item.name)}
          >
            {item.name}
          </button>
        </li>
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
    return equipArr.length ? (
      equipArr.map((item, id) => (
        <li key={id} id={item} className="list-item">
          <p className="equipment-name">{item}</p>

          <button className="button button__delete">
            <img
              className="trash-icon"
              src={trash}
              onClick={() => delEquipFromBackpack(item)}
              alt="Trash icon"
            />
          </button>
        </li>
      ))
    ) : (
      <li key={'empty'} id={'empty'} className="list-item">
        <p className="equipment-name">Рюкзак порожній</p>
      </li>
    );
  };

  return (
    <div className="App">
      {component === 'main' ? (
        <Main onSwitchComponent={onSwitchComponent} />
      ) : null}
      {component === 'season' ? (
        <Season
          onSwitchComponent={onSwitchComponent}
          changeData={changeData}
          season={season}
        />
      ) : null}
      {component === 'weather' ? (
        <Weather
          onSwitchComponent={onSwitchComponent}
          changeData={changeData}
          weather={weather}
        />
      ) : null}
      {component === 'duration' ? (
        <Duration
          onSwitchComponent={onSwitchComponent}
          changeData={changeData}
          duration={duration}
        />
      ) : null}
      {component === 'equipment list' ? (
        <EquipmentList
          onSwitchComponent={onSwitchComponent}
          changeEquipmentList={() => changeEquipmentList()}
        />
      ) : null}
      {component === 'backpack' ? (
        <Backpack
          onSwitchComponent={onSwitchComponent}
          checkBackpack={checkBackpack}
        />
      ) : null}
    </div>
  );
};

export default App;
