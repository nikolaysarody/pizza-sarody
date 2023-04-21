import React from 'react';
import exitButton from '../../../icons/exit.svg';
import blackExitButton from '../../../icons/close_black.png';
import {createPortal} from 'react-dom';
import {useAppSelector} from '../../../hook';
import {IPromo} from '../../../models/order/models';
import './promoModal.scss';
import pizzaImg from '../../../icons/accept_order.png';

interface PromoModalProps extends IPromo {
    visible: boolean,
    onClose: () => void,
}

const PromoModal: React.FC<PromoModalProps> = ({
                                                   visible,
                                                   onClose,
                                                   title = '',
                                                   img= '',
                                                   expire,
                                                   items,
                                                   discount,
                                                   description= ''
                                               }) => {
    const modalPortal = document.getElementById('modal');
    const error = useAppSelector(state => state.promo.error);

    if (visible) {
        return modalPortal ? createPortal(
            <div className="promo-modal" onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}> {error === '' ?
                <div className="promo-modal__wrapper">
                    <div className="promo-modal__top">
                        <img className="promo-modal__top-img" src={img} alt={title}/>
                        <div className="promo-modal__top-img-filter"></div>
                        <img className="promo-modal__top-exit-btn" src={exitButton}
                             alt="exit"
                             onClick={onClose}
                        />
                        <span className="promo-modal__top-title">Промокод</span>
                        <span className='slider-modal__top-description'>{title.toUpperCase()}</span>
                    </div>
                    <div className="promo-modal__down">
                        <span className="promo-modal__down-text">{description}</span>
                    </div>
                </div> :
                <div className="promo-modal__wrapper">
                    <img className="promo-modal__top-exit-btn" src={blackExitButton}
                         alt="exit"
                         onClick={() => {
                             onClose();
                         }}
                    />
                    <div className="promo-modal__container">
                        <img className="promo-modal__container-img" src={pizzaImg} alt={title}/>
                        <span className="promo-modal__container-title">{error}</span>
                    </div>
                </div>}
            </div>
            , modalPortal
        ) : null;
    } else {
        return null;
    }
}

export default PromoModal;