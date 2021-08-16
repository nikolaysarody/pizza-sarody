import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className='app'>
            <div className='app__body'>
                <Header />

                <Footer />
            </div>
        </div>
    );
}

export default App;
