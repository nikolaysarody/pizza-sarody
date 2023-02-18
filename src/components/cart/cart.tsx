import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../hook';
import './cart.scss';
import cartImg from './cart.svg';
import CartMenu from './cartMenu/cartMenu';

const Cart: React.FC = () => {
    const pizzas = useAppSelector(state => state.order.pizza);
    const [count, setCount] = useState(0);
    const [cartToggle, setCartToggle] = useState(false);

    useEffect(() => {
        let count = 0;
        pizzas.forEach((item) => {
            if(item.count){
                count += item.count;
            }
        });
        setCount(count);
    }, [pizzas]);

    const cartCounter = () => {
        if (count) {
            return (
                <div className='cart__counter'>
                    <span>{count}</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='cart'>
            <div className='cart__container' onClick={() => setCartToggle(!cartToggle)}>
                <img src={cartImg} alt='cart' width='24' height='24'/>
                {cartCounter()}
            </div>
            <CartMenu toggle={cartToggle}/>
        </div>
    );
}

export default Cart;
