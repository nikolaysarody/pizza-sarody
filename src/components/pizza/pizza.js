import React, {useEffect, useState} from 'react';
import './pizza.scss';
import PizzaService from '../services/pizzaService';
import PizzaItem from "./pizzaItem/pizzaItem";

function Pizza() {
    const [pizzaItems, setPizzaItems] = useState([]);
    const pizzaService = new PizzaService();

    useEffect(() => {
        setPizzaItems(pizzaService.getPizza);
    }, [pizzaService.getPizza]);

    return (
        <ul className='pizza' id={'pizza'}>
            {pizzaItems.map((item) => <PizzaItem {...item}  key={item.id}/>)}
        </ul>
    );
}

export default Pizza;