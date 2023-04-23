import React, {useEffect, useState} from 'react';
import {OrderPaymentOption, OrderPaymentStatus, OrderStatus} from '../../models/order/models';
import PaymentOption from './payment/payment';
import AddressItem from '../profile/addresses/addressItem/addressItem';
import OrderItemDetail from '../profile/orders/orderItem/orderItemDetail/orderItemDetail';
import './checkout.scss';
import {useAppDispatch, useAppSelector} from '../../hook';
import {addOrder} from '../../store/actions/orderActions';
import {fetchOrderError} from '../../store/slices/orderSlice';
import {fetchAddresses} from '../../store/actions/addressAction';
import {useNavigate} from 'react-router-dom';
import CheckoutModal from './checkoutModal/checkoutModal';

const Checkout: React.FC = () => {
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(state => state.cart.pizza);
    const totalPrice = useAppSelector(state => state.cart.totalPrice);
    const addresses = useAppSelector(state => state.address.items);
    const {title, items, discount, description} = useAppSelector(state => state.cart.promo);
    const [paymentOption, setPaymentOption] = useState<OrderPaymentOption>(OrderPaymentOption.Cash);
    const [modalRegistrationVisible, setModalRegistrationVisible] = useState<boolean>(false);
    const [modalAddressVisible, setModalAddressVisible] = useState<boolean>(false);
    const [modalAcceptVisible, setModalAcceptVisible] = useState<boolean>(false);
    const [orderNumber, setOrderNumber] = useState<number>(0);
    const navigate = useNavigate();

    const price = (): number => {
        if (discount) {
            if (items && items.length > 0) {
                return totalPrice;
            }
            return +(totalPrice / 100 * discount).toFixed(2);
        }
        return totalPrice;
    }

    useEffect(() => {
        dispatch(fetchAddresses());
    }, []);

    return (
        <div className="ordering">
            <CheckoutModal title={`Заказ №${orderNumber} принят!`}
                           visible={modalAcceptVisible}
                           onClose={() => setModalAcceptVisible(false)}
                           isAccept={true}/>
            <CheckoutModal title={`Пожалуйста, зарегистрируйтесь`}
                           visible={modalRegistrationVisible}
                           onClose={() => setModalRegistrationVisible(false)}
                           isAccept={false}/>
            <CheckoutModal title={`Пожалуйста, добавьте адрес доставки`}
                           visible={modalAddressVisible}
                           onClose={() => setModalAddressVisible(false)}
                           isAccept={false}/>
            <h1>Оформление заказа</h1>
            <div className="ordering__container">
                <div className="ordering__wrapper">
                    <h3>Состав:</h3>
                    <div className="ordering__items">
                        {pizzas.map((item) => <OrderItemDetail {...item} key={item._id}/>)}
                    </div>
                    <h3>Способ оплаты:</h3>
                    <div className="ordering__payment">
                        <PaymentOption selectedItem={paymentOption === OrderPaymentOption.Cash}
                                       paymentOption={OrderPaymentOption.Cash}
                                       key={OrderPaymentOption.Cash}
                                       changeOption={() => setPaymentOption(OrderPaymentOption.Cash)}/>
                        <PaymentOption selectedItem={paymentOption === OrderPaymentOption.Courier}
                                       paymentOption={OrderPaymentOption.Courier}
                                       key={OrderPaymentOption.Courier}
                                       changeOption={() => setPaymentOption(OrderPaymentOption.Courier)}/>
                        <PaymentOption selectedItem={paymentOption === OrderPaymentOption.Site}
                                       paymentOption={OrderPaymentOption.Site}
                                       key={OrderPaymentOption.Site}
                                       changeOption={() => setPaymentOption(OrderPaymentOption.Site)}/>
                    </div>
                    <div className="ordering__payment-info">
                        {title ? <div className="ordering__payment-info--promo">
                            <span
                                className="ordering__payment-info--promo--price">Промокод: {title.toUpperCase()}</span>
                            {items.length === 0 ?
                                <span className="ordering__payment-info--promo--price">Скидка: -{discount}%</span> :
                                <span className="ordering__payment-info--promo--price">Описание: {description}</span>}
                        </div> : null}
                        <div className="ordering__payment-info--row">
                            <span className="ordering__payment-info--price">Сумма:<span
                                className="bold">&nbsp;{price()}&nbsp;</span>руб.</span>
                            <input type="button"
                                   value="Заказать"
                                   onClick={() => {
                                       if (addresses.length !== 0) {
                                           if (localStorage.getItem('userId')) {
                                               dispatch(addOrder({
                                                   paymentStatus: OrderPaymentStatus.NotPaid,
                                                   paymentOption: paymentOption,
                                                   orderStatus: OrderStatus.Waited,
                                                   cost: price(),
                                                   pizzas
                                               }))
                                                   .then(res => setOrderNumber(res!.data.orderNumber!))
                                                   .catch(e => dispatch(fetchOrderError(e as Error)));
                                               setModalAcceptVisible(true);
                                           } else setModalRegistrationVisible(true);
                                       } else setModalAddressVisible(true);
                                   }}/>
                        </div>
                    </div>
                </div>
                <div className="ordering__wrapper">
                    <h3>Адрес доставки:</h3>
                    <ul className="ordering__addresses">
                        {addresses.length !== 0 ? addresses.map((item) => <AddressItem {...item} key={item._id}/>) :
                            <span className="ordering__addresses--no-addresses">Нет адресов</span>}
                        <input type="button" value="Добавить адрес" onClick={() => {
                            localStorage.getItem('userId') ?
                                navigate('/addresses') :
                                setModalRegistrationVisible(true);
                        }}/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Checkout;