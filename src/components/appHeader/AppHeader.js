import './appHeader.css';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header>
            <NavLink to="/">
                <span>
                    <img src="images/Group.png" alt="logo" className="logo"></img>Coffee house
                </span>
            </NavLink>
            <NavLink to="/our_coffee">
                <span>Our coffee</span>
            </NavLink>
            <NavLink to="/for_your_pleasure">
                <span>For your pleasure</span>
            </NavLink>
        </header>
    );
};

export default AppHeader;