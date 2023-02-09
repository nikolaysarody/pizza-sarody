import React, {useState} from "react";
import {addItemInOrder, deleteItemInOrder, removeItemInOrder} from "../../../store/orderSlice";
import {useAppDispatch} from '../../../hook';
import './cartItem.scss';
import Spinner from "../../spinner/spinner";

interface CartItemProps {
    title: string;
    description: string;
    price: number;
    img: string;
    id: string;
    count: number;
}

const CartItem: React.FC<CartItemProps> = ({title, description, price, img, id, count}) => {
    const [imageStatus, setImageStatus] = useState(false);
    const dispatch = useAppDispatch();

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
                         dispatch(removeItemInOrder(id))
                     }}/>
            </div>
        </li>
    );
}

export default CartItem;

