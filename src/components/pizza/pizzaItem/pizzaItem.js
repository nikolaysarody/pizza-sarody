import React from "react";
import {deleteStore, updateStore} from "../../../actions";
import {useSelector, useDispatch} from 'react-redux';
import './pizzaItem.scss';

function PizzaItem({title, description, price, img, id}) {
    const pizzaCount = useSelector(state => state.filter((item) => item.id === id).length);
    const dispatch = useDispatch();

    const orderButton = () => {
        if (pizzaCount >= 1) {
            return (
                <div className='pizza__btn-not-null'>
                    <input type='button'
                           className='pizza__btn-dec'
                           value='-'
                           onClick={() => {
                               dispatch(deleteStore(id))
                           }}/>
                    <span className='pizza__count'>{pizzaCount}</span>
                    <input type='button'
                           className='pizza__btn-inc'
                           value='+'
                           onClick={() => {
                               dispatch(updateStore({title, description, price, img, id}))
                           }}/>
                </div>
            );
        }
        return <input type='button'
                      className='pizza__btn-null'
                      value='Выбрать'
                      onClick={() => {
                          dispatch(updateStore({title, description, price, img, id}));
                      }}/>;
    };

    return (
        <div className='pizza__item' key={id}>
            <div className='pizza__container'>
                <img src={img} alt='pizza'/>
                <div className='pizza__description'>
                    <span className="pizza__title">{title}</span>
                    <span className="pizza__span">{description}</span>
                </div>
                <div className='pizza__order'>
                    <span className='pizza__price'>от {price} руб.</span>
                    {orderButton()}
                </div>
            </div>
        </div>
    );
}

export default PizzaItem;