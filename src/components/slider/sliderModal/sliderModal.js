import React, {useEffect, useState} from 'react';
import exitButton from './exit.svg';
import './sliderModal.scss';
import {createPortal} from "react-dom";

function SliderModal({title, description, img, text, visible, onClose}) {
    const modalPortal = document.getElementById('modal');

    if (visible) {
        return createPortal(
            <div className='modal' onClick={(e) => {
                if(e.target === e.currentTarget){
                    return onClose();
                }
            }}>
                <div className='modal__wrapper'>
                    <div className='modal__top'>
                        <img className='modal__top-img' src={img} alt={title}/>
                        <div className='modal__top-img-filter'></div>
                        <img className='modal__top-exit-btn' src={exitButton}
                             alt='exit'
                             onClick={onClose}
                        />
                        <span className='modal__top-title'>{title}</span>
                        <span className='modal__top-description'>{description}</span>
                    </div>
                    <div className='modal__down'>
                        <span className='modal__down-text'>{text}</span>
                    </div>
                </div>
            </div>, modalPortal
        );
    } else {
        return null;
    }
}

export default SliderModal;