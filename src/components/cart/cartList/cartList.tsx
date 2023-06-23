import React from 'react';
import './cartList.scss';
import CartItem from '../cartItem/cartItem';
import { useAppSelector } from '../../../hook';

const CartList = () => {
    const pizzas = useAppSelector((state) => state.cart.pizza);

    return (
        <ul className="cart-list">
            {pizzas.map((item) => (
                <CartItem {...item} key={`${item.title}-cart`} />
            ))}
        </ul>
    );
};

export default CartList;
