import React, {useState} from 'react';
import {OrderResponse, OrderStatus} from '../../../../models/order/models';
import OrderItemDetail from './orderItemDetail/orderItemDetail';
import arrowDown from '../../../../icons/black_arrow_down.png';
import arrow from '../../../../icons/black_arrow.png';
import {useAppDispatch} from '../../../../hook';
import {cancelOrder, deleteOrder} from '../../../../store/actions/orderActions';
import {deleteOrderItem} from '../../../../store/slices/orderSlice';

const OrderItem: React.FC<OrderResponse> = ({
                                         _id,
                                         orderNumber,
                                         orderStatus,
                                         paymentStatus,
                                         paymentOption,
                                         cost,
                                         pizzas,
                                         address
                                     }) => {
    const dispatch = useAppDispatch();
    const [detailSwitch, setDetailSwitch] = useState<boolean>(false);
    const [status, setStatusSwitch] = useState<OrderStatus>(orderStatus);

    const cancelBtn = () => {
        if (status !== OrderStatus.Canceled) {
            return (
                <input type="button"
                       value="Отменить"
                       onClick={() => {
                           if (orderNumber) {
                               dispatch(cancelOrder(orderNumber));
                           }
                           setStatusSwitch(OrderStatus.Canceled);
                       }}/>
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
                    {status}
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
                    <span className="orders__item-address">ул. {address.street}, д. {address.house}, под. {address.entrance}, кв. {address.apartment}, эт. {address.floor}</span>
                    {pizzas.map((item) => <OrderItemDetail {...item} key={item._id}/>)}
                    <div className="orders__item-cancel">
                        {cancelBtn()}
                        <input type="button"
                               value="Удалить"
                               onClick={() => {
                                   if (orderNumber) {
                                       dispatch(deleteOrder(orderNumber));
                                       dispatch(deleteOrderItem(orderNumber));
                                   }
                               }}/>
                    </div>
                </div>
            ) : null}
        </li>
    );
}

export default OrderItem;