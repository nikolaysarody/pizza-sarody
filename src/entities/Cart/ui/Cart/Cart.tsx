import {
    useCallback,
    useEffect,
    useState,
} from 'react';
import { useAppSelector } from '../../../../shared/lib/hooks/hooks';
import cartImg from '../../../../shared/assets/icons/cart.svg';
import CartMenu from '../CartMenu/CartMenu';
import './Cart.scss';

export const Cart = () => {
    const pizzas = useAppSelector((state) => state.cart.pizza);
    const [count, setCount] = useState(0);
    const [cartToggle, setCartToggle] = useState(false);

    const toggleHandler = useCallback(() => {
        setCartToggle((prev) => !prev);
    }, []);

    useEffect(() => {
        setCount(0);
        if (Array.isArray(pizzas)) {
            pizzas.forEach((item) => {
                setCount((prev) => prev + (item.count || 0));
            });
        }
    }, [pizzas]);

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
                {count > 0 && (
                    <div className="cart__counter">
                        <span>{count}</span>
                    </div>
                )}
            </button>
            {cartToggle && (
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
            )}
            {cartToggle && (
                <CartMenu
                    setToggle={toggleHandler}
                />
            )}
        </div>
    );
};
