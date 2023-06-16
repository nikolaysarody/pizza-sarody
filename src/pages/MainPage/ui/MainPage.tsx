import React from 'react';
import Slider from '../../../components/slider/slider';
import Pizza from '../../../components/pizza/pizza';

const MainPage = () => {
    return (
        <div className="app__content-center">
            <Slider />
            <Pizza />
        </div>
    );
};

export default MainPage;
