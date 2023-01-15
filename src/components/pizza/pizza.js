import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updatePizzas} from "../../store/pizzaSlice";
import PizzaService from '../services/pizzaService';
import PizzaItem from "./pizzaItem/pizzaItem";

import './pizza.scss';

function Pizza() {
    const [pizzaItems, setPizzaItems] = useState([]);
    const dispatch = useDispatch();

    const pizzaService = new PizzaService();

    useEffect(() => {
        dispatch(updatePizzas(pizzaService.getPizza()));
        setPizzaItems(pizzaService.getPizza());
    }, []);

    return (
        <ul className='pizza'>
            {pizzaItems.map((item) => <PizzaItem {...item}  key={item.id}/>)}
        </ul>
    );
}

export default Pizza;