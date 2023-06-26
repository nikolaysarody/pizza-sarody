import CartItem from '../CartItem/CartItem';
import { useAppSelector } from '../../../../shared/lib/hooks/hooks';
import './CartList.scss';

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
