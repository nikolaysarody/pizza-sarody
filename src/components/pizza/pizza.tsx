import React from 'react';
import {useAppSelector} from "../../hook";
import PizzaItem from "./pizzaItem/pizzaItem";

import './pizza.scss';

const Pizza: React.FC = () => {
    const pizzaItems = useAppSelector(state => state.pizza.pizza);

    return (
        <ul className='pizza'>
            {pizzaItems.map((item) => <PizzaItem {...item} key={item.id}/>)}
        </ul>
    );
}

export default Pizza;