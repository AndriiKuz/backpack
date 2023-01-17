import trash from '../../resources/img/trash.svg';
import './backpackListItem.scss';
const BackpackListItem = ({ item, delEquipFromBackpack }) => {
  return (
    <li className="list-item">
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
  );
};

export default BackpackListItem;
