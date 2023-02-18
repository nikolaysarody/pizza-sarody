import React from 'react';
import './cartMenu.scss';
import cartImg from './cart.svg';
import CartList from '../cartList/cartList';
import {useAppDispatch, useAppSelector} from '../../../hook';
import {clearAll} from "../../../store/slices/orderSlice";

interface CartMenuProps {
    toggle: boolean;
}

const CartMenu: React.FC<CartMenuProps> = ({toggle}) => {
    const pizzaInCart = useAppSelector(state => state.order.pizza);
    const price = useAppSelector(state => state.order.totalPrice);
    const dispatch = useAppDispatch();

    const cartItem = () => {
        if (toggle) {
            if (pizzaInCart.length) {
                return (
                    <div className='cart__menu'>
                        <div className='cart__item'>
                            <div className='cart__top'>
                                <span className='label'>Пицца</span>
                                <input className='btn-clear'
                                       type='button'
                                       value='Очистить корзину'
                                       onClick={() => dispatch(clearAll())}
                                />
                            </div>
                            <div className='cart__content'>
                                <CartList/>
                            </div>
                            <div className='cart__down'>
                                <div className='cart__down-wrapper'>
                                    <span className='price'>Сумма:</span>
                                    <span className='price-bold'>{price}</span>
                                    <span className='price'>рублей</span>
                                </div>
                                <input type='button' value='Оформить заказ' className='cart__order'/>
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <div className='cart__menu empty'>
                    <div className='cart__item-empty'>
                        <img src={cartImg} alt='cart' width='42' height='42'/>
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