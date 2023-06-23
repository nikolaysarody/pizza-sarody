import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hook';
import './cart.scss';
import cartImg from '../../icons/cart.svg';
import CartMenu from './cartMenu/cartMenu';

const Cart = () => {
    const pizzas = useAppSelector((state) => state.cart.pizza);
    const [count, setCount] = useState(0);
    const [cartToggle, setCartToggle] = useState(false);

    useEffect(() => {
        setCount(0);
        pizzas.forEach((item) => {
            setCount((prev) => prev + (item.count || 0));
        });
    }, [pizzas]);

    const cartCounter = () => {
        return count ? (
            <div className="cart__counter">
                <span>{count}</span>
            </div>
        ) : null;
    };

    return (
        <div className="cart">
            <button
                type="button"
                className="cart__container"
                onClick={() => {
                    setCartToggle((prev) => !prev);
                }}
            >
                <img src={cartImg} alt="cart" width="24" height="24" />
                {cartCounter()}
            </button>
            {cartToggle ? (
                <button
                    type="button"
                    className="cart__outside-wrapper"
                    aria-label="close"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setCartToggle((prev) => !prev);
                        }
                    }}
                />
            ) : null}
            {cartToggle ? (
                <CartMenu
                    setToggle={() => {
                        setCartToggle((prev) => !prev);
                    }}
                />
            ) : null}
        </div>
    );
};

export default Cart;
