import React, {useEffect, useState} from 'react';
import './slider.scss';
import arrowLeft from './arrow_left.svg';
import arrowRight from './arrow_right.svg';
import navigationDotActive from './active_dot.svg';
import navigationDotNotActive from './not_active_dot.svg';
import PizzaService from "../services/pizzaService";

function Slider() {
    const pizzaService = new PizzaService();
    const [sliderItems, setSliderItems] = useState([]);
    const [modal, setModal] = useState(null);
    const [slideIndex, setSlide] = useState(0);
    const [offset, setOffset] = useState(0);
    const slidesField = React.createRef();
    const sliderWrapper = React.createRef();
    const [width, setWidth] = useState('');

    useEffect(() => {
        setSliderItems(pizzaService.getActions);
    }, [pizzaService.getActions]);

    useEffect(() => {
        slidesField.current.style.width = 100 * sliderItems.length + '%';
    }, [slidesField, sliderItems]);

    useEffect(() => {
        setWidth(window.getComputedStyle(sliderWrapper.current).width);
    }, [sliderWrapper]);

    useEffect(() => {
        setTransform(offset);
    }, [offset]);

    const setTransform = (offset) => {
        slidesField.current.style.transform = `translateX(-${offset}px)`;
    }

    const showModal = (title, description, text) => {
        // setModal(
        //     <div className='slider__modal'>
        //         <span>This is modal</span>
        //     </div>
        // );
        console.log(width, offset);
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
        <div className={'slider'}>
            <div className='slider__navigation'>
                <img src={arrowLeft} alt='previous'
                     className='slider__arrow-left'
                     onClick={() => {
                         if (offset === 0) {
                             setOffset(+width.slice(0, width.length - 2) * (sliderItems.length - 1));
                         } else {
                             setOffset(offset - +width.slice(0, width.length - 2));
                         }

                         if (slideIndex === 0) {
                             setSlide(sliderItems.length - 1);
                         } else {
                             setSlide(slideIndex - 1);
                         }
                     }}
                />
                <div className='slider__navigation-dot'>
                    {sliderItems.map((item, index) => {
                        if (slideIndex === index) {
                            return <img src={navigationDotActive} alt='active-dot' key={item.key + index}
                                        className='slider__dot'
                                        onClick={() => {
                                            setSlide(index);
                                            setOffset(+width.slice(0, width.length - 2) * index);
                                            slidesField.current.style.transform = `translateX(-${offset}px)`;
                                        }}/>;
                        }
                        return <img src={navigationDotNotActive} alt='dot' key={item.key + index}
                                    className='slider__dot'
                                    onClick={() => {
                                        setSlide(index);
                                        setOffset(+width.slice(0, width.length - 2) * index);
                                        slidesField.current.style.transform = `translateX(-${offset}px)`;
                                    }}/>;
                    })}
                </div>
                <img src={arrowRight} alt='next'
                     className='slider__arrow-right'
                     onClick={() => {
                         if (offset === +width.slice(0, width.length - 2) * (sliderItems.length - 1)) {
                             setOffset(0);
                         } else {
                             setOffset(offset + +width.slice(0, width.length - 2));
                         }

                         if (slideIndex === sliderItems.length - 1) {
                             setSlide(0);
                         } else {
                             setSlide(slideIndex + 1);
                         }
                     }}/>
            </div>
            <div className='slider__wrapper' ref={sliderWrapper}>
                <div className='slider__inner' ref={slidesField}>
                    {sliderItems.map((item) => {
                        return sliderItem(item);
                    })}
                </div>
            </div>
        </div>
    );
}

export default Slider;