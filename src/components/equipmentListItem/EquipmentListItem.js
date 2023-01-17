const EquipmentListItem = ({ item, equipArr, moveEquipToBackpack }) => {
  return (
    <li id={item.name} className="list-item">
      <button
        className={
          equipArr.includes(item.name) ? 'list-btn active' : 'list-btn'
        }
        onClick={(e) => moveEquipToBackpack(e, item.name)}
      >
        {item.name}
      </button>
    </li>
  );
};

export default EquipmentListItem;
