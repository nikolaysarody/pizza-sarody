import { memo, useEffect, useState } from 'react';

interface ItemType {
    title: string;
    description: string;
    img: string;
    _id: string;
    clickable: boolean;
    visible: () => void;
}

const SliderItem = memo((props: ItemType) => {
    const {
        title,
        description,
        clickable,
        img,
        _id,
        visible,
    } = props;
    const [classNames, setClassNames] = useState<string>('slider__item');

    useEffect(() => {
        if (clickable) {
            setClassNames((prev) => `${prev} clickable`);
        }
    }, [clickable]);

    return (
        <button
            type="button"
            className={classNames}
            key={_id}
            onClick={() => {
                if (clickable) {
                    visible();
                }
            }}
        >
            <div className="slider__text">
                <span className="slider__title">{title}</span>
                <span className="slider__description">{description}</span>
            </div>
            <div className="slider__banner">
                <img src={img} alt={description} />
                <div className="slider__banner-img-filter" />
            </div>
        </button>
    );
});

export default SliderItem;
