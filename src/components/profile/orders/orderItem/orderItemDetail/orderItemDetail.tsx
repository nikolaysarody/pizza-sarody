import React from 'react';
import {IPizza} from '../../../../../models/models';

const OrderItemDetail: React.FC<IPizza> = ({_id, description, price, title, img, count}) => {

    return (
        <div className="orders__item-pizza">
            <img src={img} alt=""/>
            <span>{title}</span>
            <span><span className="bold">{price * count!}</span> руб.</span>
            <span><span className="bold">{count}</span> шт.</span>
        </div>
    );
}

export default OrderItemDetail;