import React from 'react';
import {useSelector} from 'react-redux';
import './cart.scss';
import cartImg from './cart.svg';
import CartMenu from './cartMenu/cartMenu';

function Cart() {
    const pizzaCount = useSelector(state => state.length);

    const cartCounter = () => {
        if (pizzaCount) {
            return (
                <div className='cart__counter'>
                    <span>{pizzaCount}</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='cart'>
            <div className='cart__container'>
                <img src={cartImg} alt='cart' width='24' height='24'/>
                {cartCounter()}
            </div>
            <CartMenu/>
        </div>
    );
}

export default Cart;
