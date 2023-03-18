import './bestGoodsList.css';
import '../bestItem/BestItem';
import BestItem from '../bestItem/BestItem';
import { useHttp } from '../../hooks/http.hook';
import { useState, useEffect } from 'react';

const BestGoodsList = () => {
    const {request} = useHttp();

    const [bestGoodsList, setBestGoodsList] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        request('http://localhost:3001/bestGoods')
            .then(onGoodsLoaded);
    }

    const onGoodsLoaded = (goods) => {
        setBestGoodsList(goods);
    }

    const renderBestGoods = () => {
        return bestGoodsList.map(({id, price, img, name}) => {
            return <BestItem key={id}
                             id={id} 
                             price={price} 
                             img={img} 
                             name={name}/>;
        });
    }

    const elements = renderBestGoods();

    return (
        <div className="best_goods">
            {elements}
        </div>
    );
};

export default BestGoodsList;