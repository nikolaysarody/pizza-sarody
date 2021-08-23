import React from 'react';
// import {useSelector} from 'react-redux';
import './cartMenu.scss';
import cartImg from './cart.svg';

function CartMenu() {
    // const pizzaCount = useSelector(state => state.length);
    const carItem = () => {
        // if(pizzaCount) {
            return (
                <div className='cart__item'>
                    <img src={cartImg} alt='cart' width='42' height='42'/>
                    <span>Корзина пустая</span>
                </div>
            );
        // }
    };

    return (
        <div className='cart__menu'>
            {carItem()}
        </div>
    );
}

export default CartMenu;