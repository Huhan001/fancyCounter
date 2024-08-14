import Count from "./Count";
import ButtonsContainer from "./ButtonsContainer";
import ResetButton from "./ResetButton";
import { Title } from "./Title";
import style from "./Project.module.css";
import { useEffect, useState } from "react";

export const Card = () => {
  const [number, setNumber] = useState(0);
  const locked = number === 5 ? true : false;

  /*    purposed solution to the problem of the user not 
        being able to use the keyboard to increment the counter.
        useEffect hook has a cleanup function that is returned 
        when the component is unmounted.
        it is best if we remove the previous event listener before adding a new one.*/

  const handleKeyDown = (events) => {
    events.code === "Space" && setNumber(number + 1);
  };

  const cleaner = () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

  useEffect(() => {
    window.addEventListener(
      "keydown",
      number < 5 ? handleKeyDown : setNumber(5)
    );

    return cleaner;
  }, [number]);

  return (
    <div className={`${style.card} ${locked ? style.card_limit : ""}`}>
      <Title locked={locked} />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <ButtonsContainer setNumber={setNumber} locked={locked} />
    </div>
  );
};

// you should use the react fragments to wrap the elements in the Card component.
{
  /* <></> */
}
// pop drilling is the passing of a prop from a parent component to a child component that doesn't need it, but it needs to pass it to another child component that needs it.
