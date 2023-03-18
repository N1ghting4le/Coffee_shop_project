import './bestItem.css';
import { Link } from 'react-router-dom';
import { dataContext } from '../../pages/mainPage/MainPage';
import { useContext } from 'react';

const BestItem = ({id, price, img, name}) => {
    const onItemSelected = useContext(dataContext);

    const selectItem = () => {
        const item = {id, price, img};
        onItemSelected(item);
    }

    return (
        <Link to={`/${id}`}>
            <div className="best_item" onClick={selectItem}>
                <img src={img} alt="coffee beans"></img>
                <div className="product_name">{name}</div>
                <div className="price">{price}</div>
            </div>
        </Link>
    );
};

export default BestItem;