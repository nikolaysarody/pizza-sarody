import React, {useState} from "react";
import {addItemInOrder, deleteItemInOrder, removeItemInOrder} from "../../../store/slices/orderSlice";
import {useAppDispatch} from '../../../hook';
import './cartItem.scss';
// import Spinner from "../../spinner/spinner";
import {IPizza} from "../../../models/models";

// interface CartItemProps {
//     title: string;
//     description: string;
//     price: number;
//     img: string;
//     id: string;
//     count: number;
// }

const CartItem: React.FC<IPizza> = ({title, description, price, img, _id, count}) => {
    const [imageStatus, setImageStatus] = useState(false);
    const dispatch = useAppDispatch();

    // const load = () => {
    //     if (!imageStatus) {
    //         return (
    //             <Spinner width={57}/>
    //         );
    //     }
    // }

    return (
        <li className='cart-item'>
            <div className='cart-item__container'>
                {/*{load()}*/}
                <img className='cart-item__img' src={img} alt='pizza' onLoad={() => setImageStatus(true)}/>
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
                               dispatch(deleteItemInOrder({_id, price}));
                           }}/>
                    <span className='cart-item__count'>{count}</span>
                    <input type='button'
                           className='cart-item__btn-change'
                           value='+'
                           onClick={() => {
                               dispatch(addItemInOrder({title, description, price, img, _id}));
                           }}/>
                </div>
                <img className='cart-item__btn-del'
                     src='/icons/Trash/115789_trash_icon.svg'
                     alt='delete'
                     onClick={() => {
                         dispatch(removeItemInOrder(_id))
                     }}/>
            </div>
        </li>
    );
}

export default CartItem;

