import CartItem from '../cartItem/cartItem';
import { useAppSelector } from '../../../hook';
import './cartList.scss';

const CartList = () => {
    const pizzas = useAppSelector((state) => state.cart.pizza);

    return (
        <ul className="cart-list">
            {pizzas.map((item) => (
                <CartItem {...item} key={`${item.title}-cart`} />
            ))}
        </ul>
    );
};

export default CartList;
