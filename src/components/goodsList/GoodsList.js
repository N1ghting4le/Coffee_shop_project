import './goodsList.css';
import SingleItem from '../singleItem/SingleItem';
import { useHttp } from '../../hooks/http.hook';
import { useState, useEffect, useCallback } from 'react';

const GoodsList = ({filter, str}) => {
    const {request} = useHttp();

    const [goodsList, setGoodsList] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        request('http://localhost:3001/goods')
            .then(onGoodsLoaded);
    }

    const onGoodsLoaded = (goods) => {
        setGoodsList(goods);
    }

    const filterGoods = useCallback((arr) => {
        return filter === '' ? arr : arr.filter(item => item.country === filter);
    }, [filter]);

    const searchGoods = useCallback(() => {
        return str === '' ? goodsList : goodsList.filter(item => item.name.toLowerCase().includes(str.toLowerCase()));
    }, [str, goodsList]);

    const renderGoods = (arr) => {
        return arr.map(({id, country, price, img, name}) => {
            return <SingleItem key={id} 
                                id={id} 
                                country={country} 
                                price={price} 
                                img={img} 
                                name={name}/>;
        });
    }

    const elements = renderGoods(filterGoods(searchGoods()));

    return (
        <div className="goods">
            {elements}
        </div>
    );
};

export default GoodsList;