import { useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { PizzaItem } from '../PizzaItem/PizzaItem';
import './Pizza.scss';

export const Pizza = () => {
    const pizzaItems = useAppSelector((state) => state.pizza.pizza);

    return (
        <ul className="pizza">
            {pizzaItems.map((item) => (
                <PizzaItem {...item} key={item.title} />
            ))}
        </ul>
    );
};
