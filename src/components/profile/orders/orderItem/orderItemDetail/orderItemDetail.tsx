import React from 'react';
import './orderItemDetail.scss';
import { type IPizza } from '../../../../../models/pizza/models';

function OrderItemDetail({ price, title, img, count }: IPizza): JSX.Element {
    return (
        <div className="orders__item-pizza">
            <img src={img} alt="" />
            <span>{title}</span>
            <span>
                <span className="bold">{price * (count || 1)}</span> руб.
            </span>
            <div className="orders__item-count">{count}</div>
        </div>
    );
}

export default OrderItemDetail;
