import style from './Project.module.css';

const Count = ({number}) => {

    return (
        <p className= {style.count}>{number}</p>
    );
}

export default Count;