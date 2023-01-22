import React, {useEffect, useState} from "react";
import {addItemInOrder, deleteItemInOrder, removeItemInOrder} from "../../../store/orderSlice";
import {useSelector, useDispatch} from 'react-redux';
import './cartItem.scss';
// import trash from '%PUBLIC_URL%/icons/Trash/115789_trash_icon.svg';
import PizzaService from "../../services/pizzaService";
import {updatePizzas} from "../../../store/pizzaSlice";
import Spinner from "../../spinner/spinner";

function CartItem({title, description, price, img, id, count}) {
    const [imageStatus, setImageStatus] = useState(false);
    const dispatch = useDispatch();

    // const [pizzaItems, setPizzaItems] = useState([]);
    // const pizzasCount = useSelector(state => state.order.pizzasCount);
    // const pizzas = useSelector(state => state.order.pizzas);

    // const dispatch = useDispatch();

    // const pizzaService = new PizzaService();

    // useEffect(() => {
    //     console.log(pizzas);
    // }, [pizzas])

    // useEffect(() => {
    //     setPizzaItems(pizzaService.getPizza());
    // }, []);

    const load = () => {
        if (!imageStatus) {
            return (
                <Spinner/>
            );
        }
    }

    return (
        <li className='cart-item'>
            <div className='cart-item__container'>
                {load()}
                <img className='cart-item__img' src={img} alt='pizza' onLoad={() => setImageStatus(true)}/>
                <span className='cart-item__price-title'>{title}</span>
                <div>
                    <span className='cart-item__price'>{price * count}</span>
                    <span className='cart-item__price-title'> рублей</span>
                </div>
                <div className='cart-item__btn-count'>
                    <input type='button'
                           className='cart-item__btn-change'
                           value='-'
                           onClick={() => {
                               dispatch(deleteItemInOrder({id, price}));
                           }}/>
                    <span className='cart-item__count'>{count}</span>
                    <input type='button'
                           className='cart-item__btn-change'
                           value='+'
                           onClick={() => {
                               dispatch(addItemInOrder({title, description, price, img, id}));
                           }}/>
                </div>
                <img className='cart-item__btn-del'
                     src='/icons/Trash/115789_trash_icon.svg'
                     alt='delete'
                     onClick={() => {
                         dispatch(removeItemInOrder({id}))
                     }}/>
            </div>
        </li>
    );
}

export default CartItem;

