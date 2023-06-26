import { useEffect, useRef, useState } from 'react';
import arrowLeft from '../../shared/assets/icons/arrow_left.svg';
import arrowRight from '../../shared/assets/icons/arrow_right.svg';
import navigationDotActive from '../../shared/assets/icons/active_dot.svg';
import navigationDotNotActive from '../../shared/assets/icons/not_active_dot.svg';
import { useAppSelector } from '../../shared/lib/hooks/hooks';
import SliderModal from './sliderModal/sliderModal';
import SliderItem from './sliderItem/sliderItem';
import './slider.scss';

const Slider = () => {
    const sliderItems = useAppSelector((state) => state.action.action);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [slideIndex, setSlide] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const slidesField = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<string>('');

    useEffect(() => {
        if (slidesField.current != null) {
            slidesField.current.style.width = `${100 * sliderItems.length}%`;
        }
    }, [slidesField, sliderItems]);

    useEffect(() => {
        if (sliderWrapper.current != null) {
            setWidth(window.getComputedStyle(sliderWrapper.current).width);
        }
    }, [sliderWrapper]);

    useEffect(() => {
        if (slidesField.current != null) {
            slidesField.current.style.transform = `translateX(-${offset}px)`;
        }
    }, [offset]);

    return (
        <div className="slider">
            {modalVisible ? (
                <SliderModal
                    {...sliderItems[slideIndex]}
                    onClose={() => {
                        setModalVisible(false);
                    }}
                />
            ) : null}
            <div className="slider__navigation">
                <button
                    type="button"
                    className="slider__arrow-left-wrapper"
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
                >
                    <img src={arrowLeft} alt="previous" className="slider__arrow-left" />
                </button>
                <div className="slider__navigation-dot">
                    {sliderItems.map((item, index) => {
                        if (slideIndex === index) {
                            return (
                                <button
                                    type="button"
                                    className="slider__dot"
                                    onClick={() => {
                                        setSlide(index);
                                        setOffset(+width.slice(0, width.length - 2) * index);
                                        if (slidesField.current != null) {
                                            slidesField.current.style.transform = `translateX(-${offset}px)`;
                                        }
                                    }}
                                    key={`${item.title}${item.description}`}
                                >
                                    <img src={navigationDotActive} alt="active-dot" />
                                </button>
                            );
                        }
                        return (
                            <button
                                type="button"
                                className="slider__dot"
                                onClick={() => {
                                    setSlide(index);
                                    setOffset(+width.slice(0, width.length - 2) * index);
                                    if (slidesField.current != null) {
                                        slidesField.current.style.transform = `translateX(-${offset}px)`;
                                    }
                                }}
                                key={`${item.title}${item.description}`}
                            >
                                <img src={navigationDotNotActive} alt="dot" />
                            </button>
                        );
                    })}
                </div>
                <button
                    type="button"
                    className="slider__arrow-right-wrapper"
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
                    }}
                >
                    <img src={arrowRight} alt="next" className="slider__arrow-right" />
                </button>
            </div>
            <div className="slider__wrapper" ref={sliderWrapper}>
                <div className="slider__inner" ref={slidesField}>
                    {sliderItems.map((item) => (
                        <SliderItem
                            {...item}
                            visible={() => {
                                setModalVisible(true);
                            }}
                            key={item.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
