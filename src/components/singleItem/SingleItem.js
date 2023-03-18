import './singleItem.css';
import { Link } from 'react-router-dom';
import { dataContext } from '../../pages/coffeePage/CoffeePage';
import { sameDataContext } from '../../pages/forYourPleasurePage/ForYourPleasurePage';
import { useContext } from 'react';

const SingleItem = ({id, country, price, img, name}) => {
    const onItemSelected = useContext(dataContext);
    const sameOnItemSelected = useContext(sameDataContext);

    const selectItem = () => {
        const item = {id, country, price, img};
        onItemSelected ? onItemSelected(item) : sameOnItemSelected(item);
    }

    return (
        <Link to={`/${id}`}>
            <div className="single_item" onClick={selectItem}>
                <img src={img} alt="product"></img>
                <div className="product_name">{name}</div>
                <div className="country">{country}</div>
                <div className="price">{price}</div>
            </div>
        </Link>
    );
};

export default SingleItem;