import React from 'react';
import exitButton from '../../../icons/exit.svg';
import './sliderModal.scss';
import {createPortal} from "react-dom";

interface SliderModalProps {
    title: string;
    description: string;
    img: string;
    text?: string;
    visible: boolean;
    onClose: () => void;
}

const SliderModal: React.FC<SliderModalProps> = ({title, description, img, text, visible, onClose}) => {
    const modalPortal = document.getElementById('modal');

    if (visible) {
        return modalPortal ? createPortal(
            <div className='slider-modal' onClick={(e) => {
                if(e.target === e.currentTarget){
                    return onClose();
                }
            }}>
                <div className='slider-modal__wrapper'>
                    <div className='slider-modal__top'>
                        <img className='slider-modal__top-img' src={img} alt={title}/>
                        <div className='slider-modal__top-img-filter'></div>
                        <img className='slider-modal__top-exit-btn' src={exitButton}
                             alt='exit'
                             onClick={onClose}
                        />
                        <span className='slider-modal__top-title'>{title}</span>
                        <span className='slider-modal__top-description'>{description}</span>
                    </div>
                    <div className='slider-modal__down'>
                        <span className='slider-modal__down-text'>{text}</span>
                    </div>
                </div>
            </div>, modalPortal
        ) : null;
    } else {
        return null;
    }
}

export default SliderModal;