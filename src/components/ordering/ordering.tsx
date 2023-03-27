import React from 'react';
import {IOrder, OrderPaymentOption, OrderPaymentStatus, OrderStatus} from '../../models/order/models';
import OrderItem from '../profile/orders/orderItem/orderItem';
import PaymentOption from './payment/payment';
import {IAddress} from '../../models/models';
import AddressItem from '../profile/addresses/addressItem/addressItem';
import OrderItemDetail from '../profile/orders/orderItem/orderItemDetail/orderItemDetail';
import './ordering.scss';

const Ordering: React.FC = () => {
    const pizzas = [
        {
            _id: 'hrthrf',
            title: 'Маринара',
            description: 'Томатный соус, чеснок и базилик',
            price: 400,
            img: '/images/Pizza/pizza_3.jpg',
            count: 5
        },
        {
            _id: 'gregerf',
            title: 'Маргарита',
            description: 'Томатный соус, моцарелла и орегано',
            price: 400,
            img: '/images/Pizza/pizza_2.jpg',
            count: 6
        }
    ];
    const addresses: IAddress[] = [
        {
            id: 'sdqwds',
            street: 'Пушкина',
            house: '26а',
            entrance: 8,
            apartment: 59,
            floor: 7,
            byDefault: false
        },
        {
            id: 'grege',
            street: 'Колотушкина',
            house: '84',
            entrance: 1,
            apartment: 12,
            floor: 3,
            byDefault: true
        }
    ];

    return (
        <div className="ordering">
            <h1>Оформление заказа</h1>
            <div className="ordering__container">
                <div className="ordering__wrapper">
                    <h3>Состав:</h3>
                    <div className="ordering__items">
                        {pizzas.map((item) => <OrderItemDetail {...item} key={item._id}/>)}
                    </div>
                    <h3>Способ оплаты:</h3>
                    <div className="ordering__payment">
                        <PaymentOption selectedItem={true} paymentOption={OrderPaymentOption.Cash}/>
                        <PaymentOption selectedItem={false} paymentOption={OrderPaymentOption.Courier}/>
                        <PaymentOption selectedItem={false} paymentOption={OrderPaymentOption.Site}/>
                    </div>
                    <div className="ordering__payment-info">
                        <span>Сумма: <span className="bold">110</span> руб.</span>
                        <input type="button" value="Заказать"/>
                    </div>
                </div>
                <div className="ordering__wrapper">
                    <h3>Адрес доставки:</h3>
                    <ul className="ordering__addresses">
                        {addresses.map((item) => <AddressItem {...item} key={item.id}/>)}
                        <input type="button" value="Добавить адрес"/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Ordering;