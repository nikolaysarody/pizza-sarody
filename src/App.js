import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from "./components/slider/slider";

function App() {
    return (
        <div className='app'>
            <div className='app__body'>
                <Header />
                <Slider classNames='slider__page'/>
                <Footer />
            </div>
        </div>
    );
}

export default App;
