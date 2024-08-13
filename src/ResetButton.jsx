import { ResetIcon } from '@radix-ui/react-icons';
import style from './Project.module.css';

const ResetButton = ({setNumber}) => {
    // i find this to be most convenient way as to create a function and pass it as an event handler button onClick event.
    const minus = () => {
        setNumber(prev => prev = 0);
    }
    return (
        <button onClick={minus} className= {style.reset_btn}>
            <ResetIcon  className= {style.reset_btn_icon}/>
        </button>
    );
}

export default ResetButton;