import { memo } from 'react';
import './OrderItemDetail.scss';
import { type IPizza } from '../../../Pizza/model/types/pizza';

const OrderItemDetail = memo((props: IPizza) => {
    const {
        price,
        title,
        img,
        count,
    } = props;
    return (
        <div className="orders__item-pizza">
            <img src={img} alt="" />
            <span>{title}</span>
            <span>
                <span className="bold">{price * (count || 1)}</span>
                {' '}
                руб.
            </span>
            <div className="orders__item-count">{count}</div>
        </div>
    );
});

export default OrderItemDetail;
