import "./options.scss";

const Options = ({ setIsActive, changeData, compState, compName, options }) => {
  const buttons = options.map((item) => (
    <button
      className="button button__small"
      disabled={compState === item ? true : false}
      onClick={() => {
        changeData(compName, item);
        setIsActive(false);
      }}
    >
      {item}
    </button>
  ));

  return <div className="btn_group">{buttons}</div>;
};

export default Options;
