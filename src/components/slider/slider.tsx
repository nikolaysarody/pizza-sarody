import React, {useEffect, useRef, useState} from 'react';
import './slider.scss';
import arrowLeft from '../../icons/arrow_left.svg';
import arrowRight from '../../icons/arrow_right.svg';
import navigationDotActive from '../../icons/active_dot.svg';
import navigationDotNotActive from '../../icons/not_active_dot.svg';
import SliderModal from "./sliderModal/sliderModal";
import SliderItem from "./sliderItem/sliderItem";
import {useAppSelector} from '../../hook';

const Slider: React.FC = () => {
    const sliderItems = useAppSelector(state => state.action.action);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [slideIndex, setSlide] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const slidesField = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<string>('');

    useEffect(() => {
        if (slidesField.current) {
            slidesField.current.style.width = 100 * sliderItems.length + '%';
        }
    }, [slidesField, sliderItems]);

    useEffect(() => {
        if (sliderWrapper.current) {
            setWidth(window.getComputedStyle(sliderWrapper.current).width);
        }
    }, [sliderWrapper]);

    useEffect(() => {
        if (slidesField.current) {
            slidesField.current.style.transform = `translateX(-${offset}px)`;
        }
    }, [offset]);

    return (
        <div className='slider'>
            <SliderModal {...sliderItems[slideIndex]} visible={modalVisible} onClose={() => setModalVisible(false)}/>
            <div className='slider__navigation'>
                <div className='slider__arrow-left-wrapper'
                     onClick={() => {
                         offset === 0 ? setOffset(+width.slice(0, width.length - 2) * (sliderItems.length - 1)) : setOffset(offset - +width.slice(0, width.length - 2));
                         slideIndex === 0 ? setSlide(sliderItems.length - 1) : setSlide(slideIndex - 1);
                     }}>
                    <img src={arrowLeft} alt='previous' className='slider__arrow-left'/>
                </div>
                <div className='slider__navigation-dot'>
                    {sliderItems.map((item, index) => {
                        if (slideIndex === index) {
                            return <img src={navigationDotActive} alt='active-dot' key={item._id + index}
                                        className='slider__dot'
                                        onClick={() => {
                                            setSlide(index);
                                            setOffset(+width.slice(0, width.length - 2) * index);
                                            if (slidesField.current) {
                                                slidesField.current.style.transform = `translateX(-${offset}px)`;
                                            }
                                        }}/>;
                        }
                        return <img src={navigationDotNotActive} alt='dot' key={item._id + index}
                                    className='slider__dot'
                                    onClick={() => {
                                        setSlide(index);
                                        setOffset(+width.slice(0, width.length - 2) * index);
                                        if (slidesField.current) {
                                            slidesField.current.style.transform = `translateX(-${offset}px)`;
                                        }
                                    }}/>;
                    })}
                </div>
                <div className='slider__arrow-right-wrapper'
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
                     }}>
                    <img src={arrowRight} alt='next'
                         className='slider__arrow-right'
                    />
                </div>

            </div>
            <div className='slider__wrapper' ref={sliderWrapper}>
                <div className='slider__inner' ref={slidesField}>
                    {sliderItems.map((item) => <SliderItem {...item} visible = {() => setModalVisible(true)} key={item._id}/>)}
                </div>
            </div>
        </div>
    );
}

export default Slider;