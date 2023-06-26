import { memo, useMemo, useState } from 'react';
import { type OrderResponse, OrderStatus } from '../../model/types/order';
import arrowDown from '../../../../shared/assets/icons/black_arrow_down.png';
import arrow from '../../../../shared/assets/icons/black_arrow.png';
import { useAppDispatch } from '../../../../shared/lib/hooks/hooks';
import { cancelOrder, deleteOrder } from '../../model/action/orderActions';
import { deleteOrderItem } from '../../model/slice/orderSlice';
import OrderItemDetail from '../OrderItemDetail/OrderItemDetail';

const OrderItem = memo((props: OrderResponse) => {
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

    const orderBody = useMemo(() => (
        pizzas.map((item) => (
            <OrderItemDetail {...item} key={item.title} />
        ))
    ), [pizzas]);

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
            {detailSwitch && (
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
                    {orderBody}
                    <div className="orders__item-cancel">
                        {status !== OrderStatus.Canceled && (
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
                        )}
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
            )}
        </li>
    );
});

export default OrderItem;
