import React from 'react';
import './cartMenu.scss';
import cartImg from '../../../icons/cart_menu.svg';
import CartList from '../cartList/cartList';
import {useAppDispatch, useAppSelector} from '../../../hook';
import {Link} from 'react-router-dom';
import {clearAllCart} from '../../../store/slices/cartSlice';

interface CartMenuProps {
    toggle: boolean;
    setToggle: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({toggle, setToggle}) => {
    const dispatch = useAppDispatch();
    const pizzaInCart = useAppSelector(state => state.cart.pizza);
    const {title, items, discount} = useAppSelector(state => state.cart.promo);
    const totalPrice = useAppSelector(state => state.cart.totalPrice);

    const price = () => {
        if (discount) {
            if (items && items.length > 0) {
                return totalPrice;
            }
            return totalPrice / 100 * discount;
        }
        return totalPrice;
    }

    const cartItem = () => {
        if (toggle) {
            if (pizzaInCart.length) {
                return (
                    <div className="cart__menu">
                        <div className="cart__item">
                            <div className="cart__top">
                                <span className="label">Пицца</span>
                                <input className="btn-clear"
                                       type="button"
                                       value="Очистить корзину"
                                       onClick={() => dispatch(clearAllCart())}
                                />
                            </div>
                            <div className="cart__content">
                                <CartList/>
                            </div>
                            {title ? <div className="cart__down--promo">
                                <span className="cart__down--promo--price">Промокод: {title.toUpperCase()}</span>
                                <span className="cart__down--promo--price">Скидка: -{discount}%</span>
                            </div> : null}
                            <div className="cart__down">
                                <div className="cart__down-wrapper">
                                    <span className="price">Сумма:</span>
                                    <span className="price-bold">{price()}</span>
                                    <span className="price">рублей</span>
                                </div>
                                <Link to="/checkout" className="cart__order" onClick={() => setToggle()}>Оформить
                                    заказ</Link>
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <div className="cart__menu empty">
                    <div className="cart__item-empty">
                        <img src={cartImg} alt="cart" width="42" height="42"/>
                        <span>Корзина пустая</span>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (cartItem());
}

export default CartMenu;