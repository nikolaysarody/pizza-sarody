import React from 'react';
import { useAppDispatch } from '../../../hook';
import './cartItem.scss';
import trash from '../../../icons/trash.svg';
import { type IPizza } from '../../../models/pizza/models';
import { addItemInCart, deleteItemInCart, removeItemInCart } from '../../../store/slices/cartSlice';

function CartItem({ title, description, price, img, _id, count, isPromo }: IPizza): JSX.Element {
    const dispatch = useAppDispatch();

    return (
        <li className="cart-item">
            <div className="cart-item__container">
                {/* {load()} */}
                {/* <img className='cart-item__img' src={img} alt='pizza' onLoad={() => setImageStatus(true)}/> */}
                <img className="cart-item__img" src={img} alt="pizza" />
                <span className="cart-item__price-title">{title}</span>
                <div>
                    <span className="cart-item__price">{price * (count || 1)}</span>
                    <span className="cart-item__price-title"> рублей</span>
                </div>
                {!isPromo ? (
                    <div className="cart-item__btn-count">
                        <input
                            type="button"
                            className="cart-item__btn-change"
                            value="-"
                            onClick={() => {
                                dispatch(deleteItemInCart({ title, price }));
                            }}
                        />
                        <span className="cart-item__count">{count}</span>
                        <input
                            type="button"
                            className="cart-item__btn-change"
                            value="+"
                            onClick={() => {
                                dispatch(addItemInCart({ title, description, price, img, _id }));
                            }}
                        />
                    </div>
                ) : (
                    <>
                        <span className="cart-item__count">{count}</span>
                        <span className="cart-item__count">Акция</span>
                    </>
                )}
                {!isPromo ? (
                    <button
                        type="button"
                        className="cart-item__btn-del"
                        onClick={() => {
                            dispatch(removeItemInCart(title));
                        }}
                    >
                        <img src={trash} alt="delete" />
                    </button>
                ) : null}
            </div>
        </li>
    );
}

export default CartItem;
