import { memo } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../../../shared/assets/icons/cart_menu.svg';
import CartList from '../CartList/CartList';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import { clearAllCart, removePromoFromCart } from '../../model/slice/cartSlice';
import trash from '../../../../shared/assets/icons/trash.svg';
import './CartMenu.scss';

interface CartMenuProps {
    setToggle: () => void;
}

const CartMenu = memo(({ setToggle }: CartMenuProps) => {
    const dispatch = useAppDispatch();
    const pizzaInCart = useAppSelector((state) => state.cart.pizza);
    const {
        title,
        items,
        discount,
        description,
    } = useAppSelector((state) => state.cart.promo);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);

    const price = (): number => {
        if (discount) {
            if (items && items.length > 0) {
                return totalPrice;
            }
            return +((totalPrice / 100) * discount).toFixed(2);
        }
        return totalPrice;
    };

    if (pizzaInCart.length > 0) {
        return (
            <div className="cart__menu">
                <div className="cart__item">
                    <div className="cart__top">
                        <span className="label">Пицца</span>
                        <input
                            className="btn-clear"
                            type="button"
                            value="Очистить корзину"
                            onClick={() => dispatch(clearAllCart())}
                        />
                    </div>
                    <div className="cart__content">
                        <CartList />
                    </div>
                    {title ? (
                        <div className="cart__down--promo">
                            <div className="cart__down--promo-column">
                                <span className="cart__down--promo--price">
                                    Промокод:
                                    {title.toUpperCase()}
                                </span>
                                {items.length === 0 ? (
                                    <span className="cart__down--promo--price">
                                        Скидка: -
                                        {discount}
                                        %
                                    </span>
                                ) : (
                                    <span className="cart__down--promo--price">
                                        Описание:
                                        {description}
                                    </span>
                                )}
                            </div>
                            <button
                                type="button"
                                className="cart-item__btn-del"
                                onClick={() => {
                                    dispatch(removePromoFromCart());
                                }}
                            >
                                <img src={trash} alt="delete" />
                            </button>
                        </div>
                    ) : null}
                    <div className="cart__down">
                        <div className="cart__down-wrapper">
                            <span className="price">Сумма:</span>
                            <span className="price-bold">{price()}</span>
                            <span className="price">рублей</span>
                        </div>
                        <Link
                            to="/checkout"
                            className="cart__order"
                            onClick={() => {
                                setToggle();
                            }}
                        >
                            Оформить заказ
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="cart__menu empty">
            <div className="cart__item-empty">
                <img src={cartImg} alt="cart" width="42" height="42" />
                <span>Корзина пустая</span>
            </div>
        </div>
    );
});

export default CartMenu;
