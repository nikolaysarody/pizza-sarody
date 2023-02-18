import React, {useEffect, useState} from "react";
import {addItemInOrder, deleteItemInOrder} from "../../../store/slices/orderSlice";
import {useAppDispatch, useAppSelector} from "../../../hook";
import Spinner from "../../spinner/spinner";

import './pizzaItem.scss';
import {IPizza} from "../../../models/models";

// interface PizzaItemProps {
//     title: string;
//     description: string;
//     price: number;
//     img: string;
//     id: string;
// }

const PizzaItem: React.FC<Omit<IPizza, 'count'>> = ({title, description, price, img, _id}) => {
    const [imageStatus, setImageStatus] = useState(false);
    const [pizzaCount, setPizzaCount] = useState<number | undefined>(0);
    const pizzaInOrder = useAppSelector(state => state.order.pizza);

    useEffect(() => {
        let index = 0;
        if(pizzaInOrder.some((item, i) => {
            if(item._id === _id){
                index = i;
                return true;
            }
            return false;
        })){
            if(pizzaInOrder[index].count){
                setPizzaCount(pizzaInOrder[index].count);
            }
        } else {
            setPizzaCount(0);
        }
    }, [pizzaInOrder])

    const dispatch = useAppDispatch();

    const load = () => {
        if (!imageStatus) {
            return (
                <Spinner/>
            );
        }
    };

    const orderButton = () => {
        if (pizzaCount && pizzaCount >= 1) {
            return (
                <div className='pizza__btn-not-null'>
                    <input type='button'
                           className='pizza__btn-change'
                           value='-'
                           onClick={() => {
                               dispatch(deleteItemInOrder({_id, price}));
                               // setPizzaCount(prev => prev - 1);
                           }}/>
                    <span className='pizza__count'>{pizzaCount}</span>
                    <input type='button'
                           className='pizza__btn-change'
                           value='+'
                           onClick={() => {
                               dispatch(addItemInOrder({title, description, price, img, _id}));
                               // setPizzaCount(prev => prev + 1);
                           }}/>
                </div>
            );
        }
        return <input type='button'
                      className='pizza__btn-null'
                      value='Выбрать'
                      onClick={() => {
                          dispatch(addItemInOrder({title, description, price, img, _id}));
                          // setPizzaCount((prev) => prev + 1);
                      }}/>;
    };

    return (
        <li className='pizza__item'>
            <div className='pizza__container'>
                {load()}
                <img src={img} alt='...' onLoad={() => setImageStatus(true)}/>
                <div className='pizza__description'>
                    <span className="pizza__title">{title}</span>
                    <span className="pizza__span">{description}</span>
                </div>
                <div className='pizza__order'>
                    <span className='pizza__price'>{price} руб.</span>
                    {orderButton()}
                </div>
            </div>
        </li>
    );
}

export default PizzaItem;