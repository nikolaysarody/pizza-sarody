import React from 'react';
import {IPizza} from '../../../../../models/models';
import "./orderItemDetail.scss";

const OrderItemDetail: React.FC<IPizza> = ({_id, description, price, title, img, count}) => {

    return (
        <div className="orders__item-pizza">
            <img src={img} alt=""/>
            <span>{title}</span>
            <span><span className="bold">{price * count!}</span> руб.</span>
            <div className="orders__item-count">
                {count}
            </div>
        </div>
    );
}

export default OrderItemDetail;