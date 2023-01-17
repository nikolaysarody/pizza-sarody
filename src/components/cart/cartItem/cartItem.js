import React, {useEffect, useState} from "react";
import {addItemInOrder, deleteItemInOrder} from "../../../store/orderSlice";
import {useSelector, useDispatch} from 'react-redux';
import './cartItem.scss';
import PizzaService from "../../services/pizzaService";
import {updatePizzas} from "../../../store/pizzaSlice";

function CartItem() {

    // const [pizzaItems, setPizzaItems] = useState([]);
    // const pizzasCount = useSelector(state => state.order.pizzasCount);
    // const pizzas = useSelector(state => state.order.pizzas);

    // const dispatch = useDispatch();

    // const pizzaService = new PizzaService();

    // useEffect(() => {
    //     console.log(pizzas);
    // }, [pizzas])

    // useEffect(() => {
    //     setPizzaItems(pizzaService.getPizza());
    // }, []);

    return (
        <li>

        </li>
    );
}

export default CartItem;

