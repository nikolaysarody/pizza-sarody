import React from 'react';
import {useSelector} from "react-redux";
import PizzaItem from "./pizzaItem/pizzaItem";

import './pizza.scss';

function Pizza() {
    const pizzaItems = useSelector(state => state.pizza.pizza);

    return (
        <ul className='pizza'>
            {pizzaItems.map((item) => <PizzaItem {...item} key={item.id}/>)}
        </ul>
    );
}

export default Pizza;