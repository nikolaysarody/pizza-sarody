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
    const [offset, setOffset] = useState(0);
    const [trasform, setTransform] = useState(null);
    // const [slidesField, setSlidesField] = useState(null);

    // useEffect(() => {
    //     const slidesField = document.querySelector('.slider__inner');
    // });
    //
    // slidesField.style.width = 100 * sliderItems.length + '%';

    // const slideWidth = window.getComputedStyle(document.querySelector('.slider__wrapper')).width;

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
                <div className='slider__text'>
                    <span className='slider__title'>{title}</span>
                    <span className='slider__description'>{description}</span>
                </div>
                <div className='slider__banner'>
                    <img src={img} alt={description}/>
                </div>
            </div>
        );
    };

    return (
        <div className={'slider ' + props.classNames}>
            <div className='slider__navigation'>
                <img src={arrowLeft} alt='previous'
                     className='slider__arrow-left'
                     // onClick={() => {
                     //     if (offset === 0) {
                     //         setOffset(+slideWidth.slice(0, slideWidth.length - 2) * (sliderItems.length - 1));
                     //     } else {
                     //         setOffset(offset - +slideWidth.slice(0, slideWidth.length - 2));
                     //     }
                     //
                     //     slidesField.style.transform = `translateX(-${offset}px)`;
                     // }}
                />
                <div className='slider__navigation-dot'>
                    {sliderItems.map((item, index) => {
                        if (selectedSlide === index) {
                            return <img src={navigationDotActive} alt='active-dot' key={item.key + index}
                                        className='slider__dot'/>;
                        }
                        return <img src={navigationDotNotActive} alt='dot' key={item.key + index}
                                    className='slider__dot'/>;
                    })}
                </div>
                <img src={arrowRight} alt='next'
                     className='slider__arrow-right'
                     // onClick={() => {
                     //     if (offset === +slideWidth.slice(0, slideWidth.length - 2) * (sliderItems.length - 1)) {
                     //         setOffset(0);
                     //     } else {
                     //         setOffset(offset + +slideWidth.slice(0, slideWidth.length - 2));
                     //     }
                     //
                     //     slidesField.style.transform = `translateX(-${offset}px)`;
                     // }}
                />
            </div>
            <div className='slider__wrapper'>
                <div className='slider__inner'>
                    {sliderItems.map((item) => {
                        return sliderItem(item);
                    })}
                </div>
            </div>
        </div>
    );
}

export default Slider;