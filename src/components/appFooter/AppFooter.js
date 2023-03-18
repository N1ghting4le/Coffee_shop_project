import './appFooter.css';
import { NavLink } from 'react-router-dom';

const AppFooter = () => {
    return (
        <div className="footer">
            <footer>
                <NavLink to="/">
                    <span>
                        <img src="images/Group black.png" alt="logo" className="logo_black"></img>Coffee house
                    </span>
                </NavLink>
                <NavLink to="/our_coffee">
                    <span>Our coffee</span>
                </NavLink>
                <NavLink to="/for_your_pleasure">
                    <span>For your pleasure</span>
                </NavLink>
            </footer>
            <img src="images/Beans logo black.png" alt="beans logo black" className="beans_logo_black_footer"></img>
        </div>
    );
};

export default AppFooter;