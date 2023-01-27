import React from 'react';
import Slider from "../slider/slider";
import Pizza from "../pizza/pizza";
import './mainPage.scss';

function MainPage() {
    return (
        <div className='app__content-center'>
            <Slider />
            <Pizza />
        </div>
    );
}

export default MainPage;