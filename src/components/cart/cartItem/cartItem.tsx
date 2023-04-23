import React from "react";
import {useAppDispatch} from '../../../hook';
import './cartItem.scss';
import trash from '../../../icons/trash.svg';
import {IPizza} from '../../../models/pizza/models';
import {addItemInCart, deleteItemInCart, removeItemInCart} from '../../../store/slices/cartSlice';

const CartItem: React.FC<IPizza> = ({title, description, price, img, _id, count}) => {
    const dispatch = useAppDispatch();

    return (
        <li className='cart-item'>
            <div className='cart-item__container'>
                {/*{load()}*/}
                {/*<img className='cart-item__img' src={img} alt='pizza' onLoad={() => setImageStatus(true)}/>*/}
                <img className='cart-item__img' src={img} alt='pizza'/>
                <span className='cart-item__price-title'>{title}</span>
                <div>
                    <span className='cart-item__price'>{price * count!}</span>
                    <span className='cart-item__price-title'> рублей</span>
                </div>
                <div className='cart-item__btn-count'>
                    <input type='button'
                           className='cart-item__btn-change'
                           value='-'
                           onClick={() => {
                               dispatch(deleteItemInCart({_id, price}));
                           }}/>
                    <span className='cart-item__count'>{count}</span>
                    <input type='button'
                           className='cart-item__btn-change'
                           value='+'
                           onClick={() => {
                               dispatch(addItemInCart({title, description, price, img, _id}));
                           }}/>
                </div>
                <img className='cart-item__btn-del'
                     src={trash}
                     alt='delete'
                     onClick={() => {
                         dispatch(removeItemInCart(_id))
                     }}/>
            </div>
        </li>
    );
}

export default CartItem;

