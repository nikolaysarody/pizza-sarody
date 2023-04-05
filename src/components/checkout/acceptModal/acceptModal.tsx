import React from 'react';
import exitButton from '../../../icons/exit.svg';
import './sliderModal.scss';
import {createPortal} from "react-dom";
import {redirect} from 'react-router-dom';
import pizzaImg from '../../../icons/accept_order.png';

interface AcceptModalProps {
    orderNumber: number;
    visible: boolean
}

const AcceptModal: React.FC<AcceptModalProps> = ({orderNumber, visible}) => {
    const modalPortal = document.getElementById('modal');

    if (visible) {
        return modalPortal ? createPortal(
            <div className='modal' onClick={(e) => {
                if(e.target === e.currentTarget){
                    return redirect("/orders");
                }
            }}>
                <div className='modal__wrapper'>
                    <img className='modal__top-img' src={pizzaImg} alt={orderNumber.toString()}/>
                    <img className='modal__top-exit-btn' src={exitButton}
                         alt='exit'
                         onClick={() => redirect("/orders")}
                    />
                    <span className='modal__top-title'>Заказ №{orderNumber} принят!</span>
                </div>
            </div>, modalPortal
        ) : null;
    } else {
        return null;
    }
}

export default AcceptModal;