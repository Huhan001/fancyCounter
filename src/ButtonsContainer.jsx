import CountButtons from "./CountButtons";
import style from "./Project.module.css";

const ButtonsContainer = ({ setNumber, locked }) => {
  // you cna use props to not only pass a value but to also configure the component to your liking.

  return (
    <div className={style.button_container}>
      <CountButtons type="minus" setNumber={setNumber} locked={locked} />
      <CountButtons type="plus" setNumber={setNumber} locked={locked} />
    </div>
  );
};

export default ButtonsContainer;

/* prop drilling is the passing of a prop from a parent component to a child 
 component that doesn't need it, but it needs to pass it to another child component that needs it. */
