import React, { useEffect } from 'react';
import ProfileNav from '../profileNav/profileNav';
import { Pages } from '../../../models/user/models';
import './orders.scss';
import { fetchOrders } from '../../../store/actions/orderActions';
import { useAppDispatch, useAppSelector } from '../../../hook';
import OrderItem from './orderItem/orderItem';

function Orders(): JSX.Element {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.order.items);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div className="orders">
            <ProfileNav page={Pages.Orders} />
            <div className="orders__container">
                <h1>Заказы</h1>
                <ul className="orders__items">
                    {orders.length !== 0
                        ? orders.map((item) => <OrderItem {...item} key={item.orderNumber} />)
                        : 'Нет заказов'}
                </ul>
            </div>
        </div>
    );
}

export default Orders;
