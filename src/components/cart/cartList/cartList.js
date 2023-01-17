import React from 'react';
import './cartList.scss';
import CartItem from "../cartItem/cartItem";
import {useSelector} from "react-redux";

function CartList() {
    const pizza = useSelector(state => state.pizza);
    const pizzasCount = useSelector(state => state.order.pizzasCount);

    // let pizzas = () => {
    //     for (let key item in pizzasCount){
    //
    //     }
    // };

    return (
        <ul>
            {/*{pizzasCount.map((item) => <CartItem {...item}  key={`${item.id}-cart`} />)}*/}
        </ul>
    );
}

export default CartList;