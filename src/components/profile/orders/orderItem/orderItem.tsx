import React, {useState} from 'react';
import {IOrder, OrderStatus} from '../../../../models/order/models';
import OrderItemDetail from './orderItemDetail/orderItemDetail';
import arrowDown from './black_arrow_down.png';
import arrow from './black_arrow.png';

const OrderItem: React.FC<IOrder> = ({id, orderNumber, orderStatus, paymentStatus, paymentOption, cost, pizzas}) => {
    const [detailSwitch, setDetailSwitch] = useState<boolean>(false);

    const cancelBtn = () => {
        if (orderStatus !== OrderStatus.Canceled){
            return (
                <div className="orders__item-cancel">
                    <input type="button" value="Отменить"/>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <li className="orders__item-container">
            <div className="orders__item-info">
                <span>
                    Заказ №{orderNumber}
                </span>
                <span>
                    {paymentStatus}
                </span>
                <span>
                    {paymentOption}
                </span>
                <span>
                    {orderStatus}
                </span>
                <span>
                    <span className="bold">{cost}</span> руб.
                </span>
                <span>
                    <img src={detailSwitch ? arrowDown : arrow}
                         alt="" onClick={() => setDetailSwitch(prev => !prev)}/>
                </span>
            </div>
            {detailSwitch ? (
                <div className="orders__item-detail">
                    {pizzas.map((item) => <OrderItemDetail {...item} key={item._id}/>)}
                    {cancelBtn()}
                </div>
            ) : null}
        </li>
    );
}

export default OrderItem;