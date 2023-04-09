import React, {useEffect} from 'react';
import ProfileNav from '../profileNav/profileNav';
import OrderItem from './orderItem/orderItem';
import './orders.scss';
import {fetchOrders} from '../../../store/actions/orderActions';
import {useAppDispatch, useAppSelector} from '../../../hook';
import {Pages} from '../../../models/user/models';

const Orders: React.FC = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.order.items);

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    return (
        <div className="orders">
            <ProfileNav page={Pages.Orders}/>
            <div className="orders__container">
                <h1>Заказы</h1>
                <ul className="orders__items">
                    {orders.length !== 0 ? orders.map((item) => <OrderItem {...item} key={item._id}/>) : 'Нет заказов'}
                </ul>
            </div>
        </div>
    )
}

export default Orders;