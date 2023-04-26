import React from 'react';
import { useAppSelector } from '../../hook';
import PizzaItem from './pizzaItem/pizzaItem';
import './pizza.scss';

function Pizza(): JSX.Element {
    const pizzaItems = useAppSelector((state) => state.pizza.pizza);

    return (
        <ul className="pizza">
            {pizzaItems.map((item) => (
                <PizzaItem {...item} key={item.title} />
            ))}
        </ul>
    );
}

export default Pizza;
