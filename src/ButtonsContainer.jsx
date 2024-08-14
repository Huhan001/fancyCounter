import CountButtons from "./CountButtons";
import style from "./Project.module.css";

const ButtonsContainer = ({ setNumber }) => {
  // you cna use props to not only pass a value but to also configure the component to your liking.

  return (
    <div className={style.button_container}>
      <CountButtons type="minus" setNumber={setNumber} />
      <CountButtons type="plus" setNumber={setNumber} />
    </div>
  );
};

export default ButtonsContainer;
