import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { type IPizza } from '../../../models/pizza/models';
import { addItemInCart, deleteItemInCart } from '../../../store/slices/cartSlice';
import './pizzaItem.scss';

const PizzaItem = (props: Omit<IPizza, 'count'>) => {
    const {
        title,
        description,
        price,
        img,
        _id,
    } = props;
    const dispatch = useAppDispatch();
    const [pizzaCount, setPizzaCount] = useState<number | undefined>(0);
    const pizzaInOrder = useAppSelector((state) => state.cart.pizza);

    useEffect(() => {
        let index = 0;
        if (
            pizzaInOrder.some((item, i) => {
                if (item.title === title) {
                    index = i;
                    return true;
                }
                return false;
            })
        ) {
            if (pizzaInOrder[index].count) {
                setPizzaCount(pizzaInOrder[index].count);
            }
        } else {
            setPizzaCount(0);
        }
    }, [pizzaInOrder, title]);

    const orderButton = () => {
        if (pizzaCount && pizzaCount >= 1) {
            return (
                <div className="pizza__btn-not-null">
                    <input
                        type="button"
                        className="pizza__btn-change"
                        value="-"
                        onClick={() => {
                            dispatch(deleteItemInCart({ title, price }));
                        }}
                    />
                    <span className="pizza__count">{pizzaCount}</span>
                    <input
                        type="button"
                        className="pizza__btn-change"
                        value="+"
                        onClick={() => {
                            dispatch(addItemInCart({
                                title, description, price, img, _id,
                            }));
                        }}
                    />
                </div>
            );
        }
        return (
            <input
                type="button"
                className="pizza__btn-null"
                value="Выбрать"
                onClick={() => {
                    dispatch(addItemInCart({
                        title, description, price, img, _id,
                    }));
                }}
            />
        );
    };

    return (
        <li className="pizza__item">
            <div className="pizza__container">
                <img
                    loading="lazy"
                    src={img}
                    alt=""
                />
                <div className="pizza__description">
                    <span className="pizza__title">{title}</span>
                    <span className="pizza__span">{description}</span>
                </div>
                <div className="pizza__order">
                    <span className="pizza__price">
                        {price}
                        {' '}
                        руб.
                    </span>
                    {orderButton()}
                </div>
            </div>
        </li>
    );
};

export default PizzaItem;
