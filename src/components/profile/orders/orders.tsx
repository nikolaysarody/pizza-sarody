import React, {useEffect, useState} from 'react';
// import {useAppDispatch} from '../../../hook';
import {Pages} from '../../../models/models';
import ProfileNav from '../profileNav/profileNav';
import {IOrder, OrderPaymentOption, OrderPaymentStatus, OrderStatus} from '../../../models/order/models';
import OrderItem from './orderItem/orderItem';
import './orders.scss';
import {checkAuth} from '../../../store/actions/authActions';
import {fetchPizza} from '../../../store/actions/pizzaActions';
import {fetchAction} from '../../../store/actions/actionActions';
import {fetchOrders} from '../../../store/actions/orderActions';
import {useAppDispatch, useAppSelector} from '../../../hook';

const Orders: React.FC = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.order.items);

    useEffect(() => {
        if (localStorage.getItem('id') !== null) {
            dispatch(fetchOrders(localStorage.getItem('id')!));
        }
    }, []);
    // const orders: IOrder[] = [
    //     {
    //         id: 'qwerty',
    //         orderNumber: 1234,
    //         paymentStatus: OrderPaymentStatus.NotPaid,
    //         paymentOption: OrderPaymentOption.Site,
    //         orderStatus: OrderStatus.Waited,
    //         cost: 400,
    //         pizzas: [
    //             {
    //                 _id: "sdqdsfg",
    //                 title: "Пепперони",
    //                 description: "Сыр моцарелла, колбаса пепперони, перец чили, помидоры, орегано, базилик, чеснок",
    //                 price: 400,
    //                 img: "/images/Pizza/pizza_1.png",
    //                 count: 5
    //             },
    //             {
    //                 _id: "gregerf",
    //                 title: "Маргарита",
    //                 description: "Томатный соус, моцарелла и орегано",
    //                 price: 400,
    //                 img: "/images/Pizza/pizza_2.jpg",
    //                 count: 1
    //             }
    //         ]
    //     },
    //     {
    //         id: 'fgefw',
    //         orderNumber: 1245,
    //         paymentStatus: OrderPaymentStatus.Paid,
    //         paymentOption: OrderPaymentOption.Courier,
    //         orderStatus: OrderStatus.Delivered,
    //         cost: 546,
    //         pizzas: [
    //             {
    //                 _id: "hrthrf",
    //                 title: "Маринара",
    //                 description: "Томатный соус, чеснок и базилик",
    //                 price: 400,
    //                 img: "/images/Pizza/pizza_3.jpg",
    //                 count: 5
    //             },
    //             {
    //                 _id: "gregerf",
    //                 title: "Маргарита",
    //                 description: "Томатный соус, моцарелла и орегано",
    //                 price: 400,
    //                 img: "/images/Pizza/pizza_2.jpg",
    //                 count: 6
    //             }
    //         ]
    //     },
    // ];

    return (
        <div className="orders">
            <ProfileNav page={Pages.Orders}/>
            <div className="orders__container">
                <h1>Заказы</h1>
                <ul className="orders__items">
                    {orders.map((item) => <OrderItem {...item} key={item.id}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Orders;