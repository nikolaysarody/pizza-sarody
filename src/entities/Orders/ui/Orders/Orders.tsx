import { memo, useEffect, useMemo } from 'react';
import ProfileNav from '../../../../features/ProfileNav/ProfileNav';
import { Pages } from '../../../../features/Settings/model/types/user';
import { fetchOrders } from '../../model/action/orderActions';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import OrderItem from '../OrderItem/OrderItem';
import './Orders.scss';

export const Orders = memo(() => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.order.items);

    const orderBody = useMemo(() => (
        orders.length !== 0
            ? orders.map((item) => <OrderItem {...item} key={item.orderNumber} />)
            : 'Нет заказов'
    ), [orders]);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div className="orders">
            <ProfileNav page={Pages.Orders} />
            <div className="orders__container">
                <h1>Заказы</h1>
                <ul className="orders__items">
                    {orderBody}
                </ul>
            </div>
        </div>
    );
});
