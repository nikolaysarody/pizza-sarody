import React from 'react';
import './cartList.scss';
import CartItem from '../cartItem/cartItem';
import { useAppSelector } from '../../../hook';

function CartList(): JSX.Element {
    const pizzas = useAppSelector((state) => state.cart.pizza);

    return (
        <ul className="cart-list">
            {pizzas.map((item) => (
                <CartItem {...item} key={`${item.title}-cart`} />
            ))}
        </ul>
    );
}

export default CartList;
