import style from "./Project.module.css";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtons = ({ type, setNumber }) => {
  const addition = () => {
    setNumber((prev) => prev + 1);
  };
  const subtraction = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <>
      {/* <button onClick = {subtraction} className= {style.count_btn}> <MinusIcon className= {style.count_btn_icon }/> </button>
            <button onClick = {addition} className= {style.count_btn}> < PlusIcon className= {style.count_btn_icon}/> </button> */}
      {/* assigned the ternary directly to the onClick event handler. */}

      <button
        onClick={type === "minus" ? subtraction : addition}
        className={style.count_btn}
      >
        {type === "minus" ? (
          <MinusIcon className={style.count_btn_icon} />
        ) : (
          <PlusIcon className={style.count_btn_icon} />
        )}
      </button>
    </>
  );
};

export default CountButtons;
