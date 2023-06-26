import { memo, useMemo } from 'react';
import CartItem from '../CartItem/CartItem';
import { useAppSelector } from '../../../../shared/lib/hooks/hooks';
import './CartList.scss';

const CartList = memo(() => {
    const pizzas = useAppSelector((state) => state.cart.pizza);

    const cartBody = useMemo(() => (
        pizzas.map((item) => (
            <CartItem {...item} key={`${item.title}-cart`} />
        ))
    ), [pizzas]);

    return (
        <ul className="cart-list">
            {cartBody}
        </ul>
    );
});

export default CartList;
