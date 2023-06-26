import { memo } from 'react';
import { useAppDispatch } from '../../../../shared/lib/hooks/hooks';
import trash from '../../../../shared/assets/icons/trash.svg';
import { type IPizza } from '../../../Pizza/model/types/pizza';
import { addItemInCart, deleteItemInCart, removeItemInCart } from '../../model/slice/cartSlice';
import './CartItem.scss';

const CartItem = memo((props: IPizza) => {
    const {
        title,
        description,
        price,
        img,
        _id,
        count,
        isPromo,
    } = props;
    const dispatch = useAppDispatch();

    return (
        <li className="cart-item">
            <div className="cart-item__container">
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
                                dispatch(addItemInCart({
                                    title, description, price, img, _id,
                                }));
                            }}
                        />
                    </div>
                ) : (
                    <>
                        <span className="cart-item__count">{count}</span>
                        <span className="cart-item__count">Акция</span>
                    </>
                )}
                {!isPromo && (
                    <button
                        type="button"
                        className="cart-item__btn-del"
                        onClick={() => {
                            dispatch(removeItemInCart(title));
                        }}
                    >
                        <img src={trash} alt="delete" />
                    </button>
                )}
            </div>
        </li>
    );
});

export default CartItem;
