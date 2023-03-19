import './coffeePage.css';
import InfoWithImage from '../../components/infoWithImage/InfoWithImage';
import FiltersAndSearch from '../../components/filtersAndSearch/FiltersAndSearch';
import GoodsList from '../../components/goodsList/GoodsList';
import { Helmet } from 'react-helmet';
import { createContext, useState } from 'react';

export const dataContext = createContext();
const {Provider} = dataContext;

const CoffeePage = ({onItemSelected}) => {
    const [filter, setFilter] = useState('');
    const [str, setStr] = useState('');

    const onFilterChange = (activeFilter) => {
        setFilter(activeFilter);
    }

    const onStrChange = (str) => {
        setStr(str);
    }

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
                <h1>Our coffee</h1>
            </div>
            <main className="page_main">
                <InfoWithImage title={'beans'} img={'girl_drinks_coffee_new.jpg'} alt={'girl drinks coffee'}/>
                <div className="line"></div>
                <FiltersAndSearch onFilterChange={onFilterChange} onStrChange={onStrChange}/>
                <Provider value={onItemSelected}>
                    <GoodsList filter={filter} str={str}/>
                </Provider>
            </main>
        </>
    );
};

export default CoffeePage;