import React from 'react';
import exitButton from './exit.svg';
import './sliderModal.scss';
import {createPortal} from "react-dom";

interface SliderModalProps {
    title: string;
    description: string;
    img: string;
    text: string;
    visible: boolean;
    onClose: () => void;
}

const SliderModal: React.FC<SliderModalProps> = ({title, description, img, text, visible, onClose}) => {
    // const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);
    const modalPortal = document.getElementById('modal');

    // useEffect(() => {
    //     if(document.getElementById('modal')){
    //         setModalPortal(document.getElementById('modal'));
    //     }
    // }, []);

    if (visible) {
        return modalPortal ? createPortal(
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
        ) : null
    } else {
        return null;
    }
}

export default SliderModal;