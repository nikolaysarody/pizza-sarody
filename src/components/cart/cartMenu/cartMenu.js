import React, {useEffect, useRef, useState} from 'react';
import './cartMenu.scss';
import cartImg from './cart.svg';
import CartContent from '../cartContent/cartContent';
import {useSelector} from 'react-redux';

function CartMenu({toggle, count}) {
    const cartMenu = useRef(null);
    const pizzaInCart = useSelector(state => state);
    const [pizzaTypesCount, setPizzaTypesCount] = useState([]);

    // useEffect(() => {
    //     pizzaInCart.forEach((item) => {
    //         if (pizzaTypesCount.filter((type) => type.id === item.id).length < 1){
    //         }
    //     });
    // }, toggle);

    const carItem = () => {
        if (cartMenu.current) {
            if (toggle) {
                cartMenu.current.style.visibility = 'visible';
                if (pizzaInCart.length) {
                    return (
                        <div className='cart__item'>
                            <div className='cart__top'>
                                <span>Пицца</span>
                                <input type='button' value='Очистить корзину'/>
                            </div>
                            <div className='cart__content'>
                                <CartContent/>
                            </div>
                            <div className='cart__down'>
                                <span>Сумма: {console.log(pizzaTypesCount)} рублей</span>
                                <input type='button' value='Оформить заказ' className='cart__order'/>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className='cart__item-empty'>
                        <img src={cartImg} alt='cart' width='42' height='42'/>
                        <span>Корзина пустая</span>
                    </div>
                );
            }
            cartMenu.current.style.visibility = 'hidden';
        }
    };

    return (
        <div className='cart__menu' ref={cartMenu}>
            {carItem()}
        </div>
    );
}

export default CartMenu;