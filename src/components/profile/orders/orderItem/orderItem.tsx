import { useState } from 'react';
import { type OrderResponse, OrderStatus } from '../../../../models/order/models';
import arrowDown from '../../../../icons/black_arrow_down.png';
import arrow from '../../../../icons/black_arrow.png';
import { useAppDispatch } from '../../../../hook';
import { cancelOrder, deleteOrder } from '../../../../store/actions/orderActions';
import { deleteOrderItem } from '../../../../store/slices/orderSlice';
import OrderItemDetail from './orderItemDetail/orderItemDetail';

const OrderItem = (props: OrderResponse) => {
    const {
        orderNumber,
        orderStatus,
        paymentStatus,
        paymentOption,
        cost,
        pizzas,
        address,
    } = props;
    const dispatch = useAppDispatch();
    const [detailSwitch, setDetailSwitch] = useState<boolean>(false);
    const [status, setStatusSwitch] = useState<OrderStatus>(orderStatus);

    const cancelBtn = () => {
        if (status !== OrderStatus.Canceled) {
            return (
                <input
                    type="button"
                    value="Отменить"
                    onClick={() => {
                        if (orderNumber) {
                            dispatch(cancelOrder(orderNumber));
                        }
                        setStatusSwitch(OrderStatus.Canceled);
                    }}
                />
            );
        }
        return null;
    };

    return (
        <li className="orders__item-container">
            <div className="orders__item-info">
                <span>
                    Заказ №
                    {orderNumber}
                </span>
                <span>{paymentStatus}</span>
                <span>{paymentOption}</span>
                <span>{status}</span>
                <span>
                    <span className="bold">{cost}</span>
                    {' '}
                    руб.
                </span>
                <span>
                    <button
                        type="button"
                        onClick={() => {
                            setDetailSwitch((prev) => !prev);
                        }}
                    >
                        <img src={detailSwitch ? arrowDown : arrow} alt="" />
                    </button>
                </span>
            </div>
            {detailSwitch ? (
                <div className="orders__item-detail">
                    <span className="orders__item-address">
                        ул.
                        {' '}
                        {address.street}
                        , д.
                        {' '}
                        {address.house}
                        , под.
                        {' '}
                        {address.entrance}
                        , кв.
                        {' '}
                        {address.apartment}
                        , эт.
                        {' '}
                        {address.floor}
                    </span>
                    {pizzas.map((item) => (
                        <OrderItemDetail {...item} key={item.title} />
                    ))}
                    <div className="orders__item-cancel">
                        {cancelBtn()}
                        <input
                            type="button"
                            value="Удалить"
                            onClick={() => {
                                if (orderNumber) {
                                    dispatch(deleteOrder(orderNumber));
                                    dispatch(deleteOrderItem(orderNumber));
                                }
                            }}
                        />
                    </div>
                </div>
            ) : null}
        </li>
    );
};

export default OrderItem;
