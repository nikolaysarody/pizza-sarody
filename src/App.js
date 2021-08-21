import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from "./components/slider/slider";
import Pizza from "./components/pizza/pizza";

function App() {
    return (
        <div className='app'>
            <div className='app__body'>
                <Header />
                <div className='app__content'>
                    <Slider />
                    <Pizza />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
