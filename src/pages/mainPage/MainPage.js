import './mainPage.css';
import BestGoodsList from '../../components/bestGoodsList/BestGoodsList';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createContext } from 'react';

export const dataContext = createContext();
const {Provider} = dataContext;

const MainPage = ({onItemSelected}) => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Main page"/>
                <title>Coffee shop</title>
            </Helmet>
            <div className="main_page_header">
                <div className="main_page_bg">
                    <img src="images/desk_new.jpg" alt="desk" className="desk_img"></img>
                </div>
                <div className="wrapper">
                    <h1>Everything You Love About Coffee</h1>
                    <img className="beans_logo" src="images/Beans logo.png" alt="beans logo"></img>
                    <h2 className="no_shadow">We makes every day full of energy and taste</h2>
                    <h2 className="with_shadow">Want to try our beans?</h2>
                    <Link to="/our_coffee">
                        <button className="more">More</button>
                    </Link>
                </div>
            </div>
            <main className="main_page_main">
                <div className="about_us">
                    <h2>About us</h2>
                    <img src="images/Beans logo black.png" alt="beans logo black" className="beans_logo_black"></img>
                    <div className="info">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</p>
                    </div>
                </div>
                <div className="our_best">
                    <h2>Our best</h2>
                    <Provider value={onItemSelected}>
                        <BestGoodsList/>
                    </Provider>
                </div>
            </main>
        </>
    );
};

export default MainPage;