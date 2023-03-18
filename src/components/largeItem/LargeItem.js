import './largeItem.css';
import { useContext } from 'react';
import { dataContext } from '../../pages/singleItemPage/SingleItemPage';

const LargeItem = () => {
    const {price, country, img} = useContext(dataContext);

    return (
        <div className="single_item_info">
            <img src={img} alt="product large"></img>
            <div className="about_it">
                <h2>About it</h2>
                <img src="images/Beans logo black.png" alt="beans logo black"></img>
                <div className="country_info">
                    <span className="bold">Country: </span>
                    <span>{country}</span>
                </div>
                <div className="description">
                    <p><span className="bold">Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="price_info">
                    <span className="bold">Price: </span>
                    <span className="bold large">{price}</span>
                </div>
            </div>
        </div>
    );
};

export default LargeItem;