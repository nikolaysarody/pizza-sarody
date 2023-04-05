import React from "react";

type ItemType = {
    title: string;
    description: string;
    img: string;
    _id: string;
    text?: string;
    clickable: boolean;
    visible: () => void;
}

const SliderItem: React.FC<ItemType> = ({title, description, text, clickable, img, _id, visible}) => {
    let className = 'slider__item';
    if (clickable) {
        className += ' clickable';
    }
    return (
        <div className={className} key={_id} onClick={
            () => {
                if (clickable) {
                    visible();
                }
            }
        }>
            <div className='slider__text'>
                <span className='slider__title'>{title}</span>
                <span className='slider__description'>{description}</span>
            </div>
            <div className='slider__banner'>
                <img src={img} alt={description}/>
                <div className='slider__banner-img-filter'></div>
            </div>
        </div>
    );
};

export default SliderItem;