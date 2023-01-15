import React, {useState} from "react";
import {addItemInOrder, deleteItemInOrder} from "../../../store/orderSlice";
// import {deleteStore, updateStore} from "../../../actions";
import {useSelector, useDispatch} from 'react-redux';
import Spinner from "../../spinner/spinner";

import './pizzaItem.scss';

function PizzaItem({title, description, price, img, id}) {
    const [imageStatus, setImageStatus] = useState(false);
    const pizzaCount = useSelector(state => state.order.filter((item) => item.id === id).length);
    const dispatch = useDispatch();

    const load = () => {
        if(!imageStatus){
            return (
                <Spinner/>
            );
        }
    };

    const orderButton = () => {
        if (pizzaCount >= 1) {
            return (
                <div className='pizza__btn-not-null'>
                    <input type='button'
                           className='pizza__btn-dec'
                           value='-'
                           onClick={() => {
                               dispatch(deleteItemInOrder(id))
                           }}/>
                    <span className='pizza__count'>{pizzaCount}</span>
                    <input type='button'
                           className='pizza__btn-inc'
                           value='+'
                           onClick={() => {
                               dispatch(addItemInOrder({title, description, price, img, id}))
                           }}/>
                </div>
            );
        }
        return <input type='button'
                      className='pizza__btn-null'
                      value='Выбрать'
                      onClick={() => {
                          dispatch(addItemInOrder({title, description, price, img, id}));
                      }}/>;
    };

    return (
        <li className='pizza__item'>
            <div className='pizza__container'>
                {load()}
                <img src={img} alt='pizza' onLoad={() => setImageStatus(true)}/>
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