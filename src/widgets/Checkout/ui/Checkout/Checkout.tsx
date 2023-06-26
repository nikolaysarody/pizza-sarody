import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { addOrder } from '../../../../entities/Orders/model/action/orderActions';
import { fetchOrderError } from '../../../../entities/Orders/model/slice/orderSlice';
import { fetchAddresses } from '../../../Addresses/model/action/addressAction';
import { OrderPaymentOption, OrderPaymentStatus, OrderStatus } from '../../../../entities/Orders/model/types/order';
import AddressItem from '../../../Addresses/ui/AddressItem/AddressItem';
import OrderItemDetail from '../../../../entities/Orders/ui/OrderItemDetail/OrderItemDetail';
import PaymentOption from '../../../../features/PaymentOption/PaymentOption';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import './Checkout.scss';

export const Checkout = () => {
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector((state) => state.cart.pizza);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);
    const addresses = useAppSelector((state) => state.address.items);
    const {
        title,
        items,
        discount,
        description,
    } = useAppSelector((state) => state.cart.promo);
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
            return +((totalPrice / 100) * discount).toFixed(2);
        }
        return totalPrice;
    };

    const orderBody = useMemo(() => (
        pizzas.map((item) => (
            <OrderItemDetail {...item} key={item.title} />
        ))), [pizzas]);

    const addressesBody = useMemo(() => (
        addresses.length !== 0 ? (
            addresses.map((item) => (
                <AddressItem {...item} key={`${item.apartment}${item.house}${item.floor}`} />
            ))
        ) : (
            <span className="ordering__addresses_no-addresses">Нет адресов</span>
        )), [addresses]);

    const changeOptionHandler = useCallback((option: OrderPaymentOption) => {
        setPaymentOption(option);
    }, []);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    return (
        <div className="ordering">
            {modalAcceptVisible && (
                <CheckoutModal
                    title={`Заказ №${orderNumber} принят!`}
                    onClose={() => {
                        setModalAcceptVisible(false);
                    }}
                    isAccept
                />
            )}
            {modalRegistrationVisible && (
                <CheckoutModal
                    title="Пожалуйста, зарегистрируйтесь"
                    onClose={() => {
                        setModalRegistrationVisible(false);
                    }}
                    isAccept={false}
                />
            )}
            {modalAddressVisible && (
                <CheckoutModal
                    title="Пожалуйста, добавьте адрес доставки"
                    onClose={() => {
                        setModalAddressVisible(false);
                    }}
                    isAccept={false}
                />
            )}
            <h1>Оформление заказа</h1>
            <div className="ordering__container">
                <div className="ordering__wrapper">
                    <h3>Состав:</h3>
                    <div className="ordering__items">
                        {orderBody}
                    </div>
                    <h3>Способ оплаты:</h3>
                    <div className="ordering__payment">
                        <PaymentOption
                            selectedItem={paymentOption === OrderPaymentOption.Cash}
                            paymentOption={OrderPaymentOption.Cash}
                            key={OrderPaymentOption.Cash}
                            changeOption={changeOptionHandler}
                        />
                        <PaymentOption
                            selectedItem={paymentOption === OrderPaymentOption.Courier}
                            paymentOption={OrderPaymentOption.Courier}
                            key={OrderPaymentOption.Courier}
                            changeOption={changeOptionHandler}
                        />
                        <PaymentOption
                            selectedItem={paymentOption === OrderPaymentOption.Site}
                            paymentOption={OrderPaymentOption.Site}
                            key={OrderPaymentOption.Site}
                            changeOption={changeOptionHandler}
                        />
                    </div>
                    <div className="ordering__payment-info">
                        {title ? (
                            <div className="ordering__payment-info_promo">
                                <span className="ordering__payment-info_promo_price">
                                    Промокод:
                                    {' '}
                                    {title.toUpperCase()}
                                </span>
                                {items.length === 0 ? (
                                    <span className="ordering__payment-info_promo_price">
                                        Скидка: -
                                        {discount}
                                        %
                                    </span>
                                ) : (
                                    <span className="ordering__payment-info_promo_price">
                                        Описание:
                                        {' '}
                                        {description}
                                    </span>
                                )}
                            </div>
                        ) : null}
                        <div className="ordering__payment-info_row">
                            <span className="ordering__payment-info_price">
                                Сумма:&nbsp;
                                <span className="bold">{price()}</span>
                                &nbsp;руб.
                            </span>
                            <input
                                type="button"
                                value="Заказать"
                                onClick={() => {
                                    if (addresses.length !== 0) {
                                        if (localStorage.getItem('userId')) {
                                            dispatch(
                                                addOrder({
                                                    paymentStatus: OrderPaymentStatus.NotPaid,
                                                    paymentOption,
                                                    orderStatus: OrderStatus.Waited,
                                                    cost: price(),
                                                    pizzas,
                                                }),
                                            )
                                                .then((res) => {
                                                    if (res) {
                                                        setOrderNumber(res.data.orderNumber);
                                                    }
                                                })
                                                .catch((e) => dispatch(fetchOrderError(e as Error)));
                                            setModalAcceptVisible(true);
                                        } else setModalRegistrationVisible(true);
                                    } else setModalAddressVisible(true);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="ordering__wrapper">
                    <h3>Адрес доставки:</h3>
                    <ul className="ordering__addresses">
                        {addressesBody}
                        <input
                            type="button"
                            value="Добавить адрес"
                            onClick={() => {
                                if (localStorage.getItem('userId')) {
                                    navigate('/addresses');
                                } else {
                                    setModalRegistrationVisible(true);
                                }
                            }}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};
