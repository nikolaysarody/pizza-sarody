import React, {useEffect, useState} from 'react';
import './slider.scss';
import arrowLeft from './arrow_left.svg';
import arrowRight from './arrow_right.svg';
import navigationDotActive from './active_dot.svg';
import navigationDotNotActive from './not_active_dot.svg';

function Slider(props) {
    const sliderItems = [
        {
            title: '2 по цене 1',
            description: 'Пепперони x2',
            text: 'Вводите промокод ПЕПЕ для выгодной покупки двух пепперони по цене одной.',
            clickable: true,
            img: '/images/Pizza/action_1.jpg',
            key: 'dwqdqwd'
        },
        {
            title: 'Новинка',
            description: 'Пицца Красный Тигр',
            clickable: false,
            img: '/images/Pizza/action_1.jpg',
            key: 'gegre'
        }
    ];
    const [modal, setModal] = useState(null);
    const [selectedSlide, setSlide] = useState(0);


    const showModal = (title, description, text) => {
        setModal(
            <div className='slider__modal'>
                <span>This is modal</span>
            </div>
        );
    };

    const sliderItem = ({title, description, text = '', clickable, img, key}) => {
        let className = 'slider__item';
        if (clickable) {
            className += ' clickable';
        }
        return (
            <div className={className} key={key} onClick={clickable ? () => showModal(title, description, text) : null}>
                <div className='slider__slide'>
                    <img src={img} alt='img' className='slider__banner'/>
                    <img src={arrowLeft} alt='previous' className='slider__arrow-left'/>
                    <span className='slider__title'>{title}</span>
                    <span className='slider__description'>{description}</span>
                    <div className='slider__navigation'>
                        {sliderItems.map((item, index) => {
                            if (selectedSlide === index) {
                                return <img src={navigationDotActive} alt='active-dot' key={item.key + index}
                                            className='slider__dot'/>;
                            }
                            return <img src={navigationDotNotActive} alt='dot' key={item.key + index}
                                        className='slider__dot'/>;
                        })}
                    </div>
                    <img src={arrowRight} alt='next' className='slider__arrow-right'/>
                </div>
            </div>
        );
    };

    return (
        <div className={'slider ' + props.classNames}>
            {modal}
            {sliderItems.map((item) => {
                return sliderItem(item);
            })}
        </div>
    );
}

export default Slider;