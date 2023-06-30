import { useMemo } from 'react';
import { useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { PizzaItem } from '../PizzaItem/PizzaItem';
import './Pizza.scss';

export const Pizza = () => {
    const pizzaItems = useAppSelector((state) => state.data.pizza);

    const pizzaBody = useMemo(() => (
        pizzaItems.map((item) => (
            <PizzaItem {...item} key={item.title} />
        ))
    ), [pizzaItems]);

    return (
        <ul className="pizza">
            {pizzaBody}
        </ul>
    );
};
