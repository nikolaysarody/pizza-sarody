import React from 'react';
import './cartList.scss';
import CartItem from "../cartItem/cartItem";
import {useAppSelector} from "../../../hook";

function CartList() {
    const pizzas = useAppSelector(state => state.order.pizza);


    return (
        <ul className='cart-list'>
            {pizzas.map((item) => <CartItem {...item}  key={`${item._id}-cart`} />)}
        </ul>
    );
}

export default CartList;