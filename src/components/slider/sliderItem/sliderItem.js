import React, {useEffect, useState} from "react";
import './sliderItem.scss';

function SliderItem({title, description, text = '', clickable, img, id}) {
    const [className, setClassName] = useState('slider__item');

    useEffect(() => {
        if (clickable) {
            setClassName(prev => prev + ' clickable');
        }
    },[])

    const showModal = (title, description, text) => {
        // setModal(
        //     <div className='slider__modal'>
        //         <span>This is modal</span>
        //     </div>
        // );
        // console.log(width, offset);
    };

    return (
        <div className={className} key={id} onClick={clickable ? () => showModal(title, description, text) : null}>
            <div className='slider__text'>
                <span className='slider__title'>{title}</span>
                <span className='slider__description'>{description}</span>
            </div>
            <div className='slider__banner'>
                <img src={img} alt={description}/>
            </div>
        </div>
    );
}

export default SliderItem;