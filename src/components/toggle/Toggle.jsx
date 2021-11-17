import React , {useContext} from 'react';
import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from "../../context";


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"});
    };
    return (
        <div className="t" onClick={handleClick} style={{backgroundColor: theme.state.darkMode ? "#222222" : "white"}}>
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button"  style={{left:theme.state.darkMode ? 0 : 25, backgroundColor: theme.state.darkMode ? "white" : "#222222"}}></div>
        </div>
    )
}

export default Toggle;
