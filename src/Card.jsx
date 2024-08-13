import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import { Title } from "./Title";
import style from './Project.module.css';
import { useState } from "react";

export const Card = () => {
    const [number, setNumber] = useState(0);

    return (
        <div className= {style.card}>
            <Title />
            <Count number = {number}/>
            <ResetButton setNumber = {setNumber} />
            <CountButtons setNumber = {setNumber}/>
        </div>
    );
}


// you should use the react fragments to wrap the elements in the Card component.
{/* <></> */}