import React, {useEffect} from 'react';
import './cartList.scss';
import CartItem from "../cartItem/cartItem";
import {useSelector} from "react-redux";

function CartList() {
    const pizza = useSelector(state => state.order.pizzas);
    const pizzasCount = useSelector(state => state.order.pizzasCount);


    return (
        <ul>
            {/*{pizzasCount.map((item) => <CartItem {...item}  key={`${item.id}-cart`} />)}*/}
        </ul>
    );
}

export default CartList;