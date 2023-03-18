import './forYourPleasure.css';
import AppHeader from '../../components/appHeader/AppHeader';
import InfoWithImage from '../../components/infoWithImage/InfoWithImage';
import GoodsList from '../../components/goodsList/GoodsList';
import { Helmet } from 'react-helmet';
import { createContext } from 'react';

export const sameDataContext = createContext();
const {Provider} = sameDataContext;

const ForYourPleasurePage = ({onItemSelected}) => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="For your pleasure"/>
                <title>For your pleasure</title>
            </Helmet>
            <div className="page_header">
                <div className="page_bg">
                    <img src="images/for_your_pleasure.jpg" alt="for your pleasure" className="shop_img"></img>
                </div>
                <AppHeader/>
                <h1>For your pleasure</h1>
            </div>
            <main className="page_main">
                <InfoWithImage title={'goods'} img={'cup_of_coffee.jpg'} alt={'cup of coffee'}/>
                <div className="line"></div>
                <Provider value={onItemSelected}>
                    <GoodsList filter={''} str={''}/>
                </Provider>
            </main>
        </>
    );
};

export default ForYourPleasurePage;