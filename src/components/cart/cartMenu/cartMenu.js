import React, {useEffect, useRef, useState} from 'react';
import './cartMenu.scss';
import cartImg from './cart.svg';
import CartList from '../cartList/cartList';
import {useDispatch, useSelector} from 'react-redux';
import {clearAll} from "../../../store/orderSlice";

function CartMenu({toggle}) {
    const pizzaInCart = useSelector(state => state.order.pizza);
    const price = useSelector(state => state.order.price);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     pizzaInCart.forEach((item) => {
    //         if (pizzaTypesCount.filter((type) => type.id === item.id).length < 1){
    //         }
    //     });
    // }, toggle);


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
        return ('');
    };

    // const carItem = () => {
    //     console.log(cartMenu.current)
    //     if (cartMenu.current) {
    //         if (toggle) {
    //             cartMenu.current.style.visibility = 'visible';
    //             if (pizzaInCart.length) {
    //                 return (
    //                     <div className='cart__item'>
    //                         <div className='cart__top'>
    //                             <span>Пицца</span>
    //                             <input type='button' value='Очистить корзину'/>
    //                         </div>
    //                         <div className='cart__content'>
    //                             <CartList/>
    //                         </div>
    //                         <div className='cart__down'>
    //                             <span>Сумма: {console.log(pizzaTypesCount)} рублей</span>
    //                             <input type='button' value='Оформить заказ' className='cart__order'/>
    //                         </div>
    //                     </div>
    //                 );
    //             }
    //             return (
    //                 <div className='cart__item-empty'>
    //                     <img src={cartImg} alt='cart' width='42' height='42'/>
    //                     <span>Корзина пустая</span>
    //                 </div>
    //             );
    //         }
    //         cartMenu.current.style.visibility = 'hidden';
    //     }
    // };

    return (cartItem());
}

export default CartMenu;