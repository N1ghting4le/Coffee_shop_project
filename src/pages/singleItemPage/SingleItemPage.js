import './singleItemPage.css';
import AppHeader from '../../components/appHeader/AppHeader';
import LargeItem from '../../components/largeItem/LargeItem';
import { Helmet } from 'react-helmet';
import { createContext } from 'react';

export const dataContext = createContext();
const {Provider} = dataContext;

const SingleItemPage = ({selectedItem}) => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with info about our coffee"/>
                <title>Our coffee</title>
            </Helmet>
            <div className="page_header">
                <div className="page_bg">
                    <img src="images/coffee_shop.jfif" alt="coffee shop" className="shop_img"></img>
                </div>
                <AppHeader/>
                <h1>Our coffee</h1>
            </div>
            <main className="single_item_main">
                <Provider value={selectedItem}>
                    <LargeItem/>
                </Provider>
            </main>
        </>
    );
};

export default SingleItemPage;