import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import style from './Project.module.css';

const CountButtons = ({setNumber}) => {
    const addition = () => {
        setNumber((prev) => prev + 1);
    }
    const subtraction = () => {
        setNumber((prev) => prev - 1);
    }

    return (
        <div className= {style.button_container}>
            <button onClick = {subtraction} className= {style.count_btn}> <MinusIcon className= {style.count_btn_icon }/> </button>
            <button onClick = {addition} className= {style.count_btn}> < PlusIcon className= {style.count_btn_icon}/> </button>
        </div>
    );
}

export default CountButtons;