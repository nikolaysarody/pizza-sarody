import React, {useEffect, useState} from 'react';
import {OrderPaymentOption, OrderPaymentStatus, OrderStatus} from '../../models/order/models';
import PaymentOption from './payment/payment';
import AddressItem from '../profile/addresses/addressItem/addressItem';
import OrderItemDetail from '../profile/orders/orderItem/orderItemDetail/orderItemDetail';
import './checkout.scss';
import {useAppDispatch, useAppSelector} from '../../hook';
import {addOrder} from '../../store/actions/orderActions';
import AcceptModal from './acceptModal/acceptModal';
import {fetchOrderError} from '../../store/slices/orderSlice';
import {fetchAddresses} from '../../store/actions/addressAction';

const Checkout: React.FC = () => {
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(state => state.order.pizza);
    const price = useAppSelector(state => state.order.totalPrice);
    const addresses = useAppSelector(state => state.address.items);
    const [paymentOption, setPaymentOption] = useState<OrderPaymentOption>(OrderPaymentOption.Cash);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [orderNumber, setOrderNumber] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, []);

    return (
        <div className="ordering">
            <AcceptModal orderNumber={orderNumber} visible={modalVisible} onClose={() => setModalVisible(false)}/>
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
                                       paymentOption={OrderPaymentOption.Cash} key={OrderPaymentOption.Cash}
                                       changeOption={() => setPaymentOption(OrderPaymentOption.Cash)}/>
                        <PaymentOption selectedItem={paymentOption === OrderPaymentOption.Courier}
                                       paymentOption={OrderPaymentOption.Courier} key={OrderPaymentOption.Cash}
                                       changeOption={() => setPaymentOption(OrderPaymentOption.Courier)}/>
                        <PaymentOption selectedItem={paymentOption === OrderPaymentOption.Site}
                                       paymentOption={OrderPaymentOption.Site} key={OrderPaymentOption.Cash}
                                       changeOption={() => setPaymentOption(OrderPaymentOption.Site)}/>
                    </div>
                    <div className="ordering__payment-info">
                        <span>Сумма: <span className="bold">{price}</span> руб.</span>
                        <input type="button"
                               value="Заказать"
                               onClick={() => {
                                   dispatch(addOrder({
                                       paymentStatus: OrderPaymentStatus.NotPaid,
                                       paymentOption: paymentOption,
                                       orderStatus: OrderStatus.Waited,
                                       cost: price,
                                       pizzas
                                   }))
                                       .then(res => setOrderNumber(res!.data.orderNumber!))
                                       .catch(e => dispatch(fetchOrderError(e as Error)));
                                   setModalVisible(true);
                               }}/>
                    </div>
                </div>
                <div className="ordering__wrapper">
                    <h3>Адрес доставки:</h3>
                    <ul className="ordering__addresses">
                        {addresses.length !== 0 ? addresses.map((item) => <AddressItem {...item} key={item._id}/>) : 'Нет адресов'}
                        {/*<input type="button" value="Добавить адрес"/>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Checkout;