import React, {useEffect} from 'react';
import './cartList.scss';
import CartItem from "../cartItem/cartItem";
import {useSelector} from "react-redux";

function CartList() {
    const pizzas = useSelector(state => state.order.pizza);


    return (
        <ul className='cart-list'>
            {pizzas.map((item) => <CartItem {...item}  key={`${item.id}-cart`} />)}
        </ul>
    );
}

export default CartList;