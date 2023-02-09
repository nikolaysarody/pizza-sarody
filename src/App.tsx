import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/pages/mainPage';
import AboutPage from "./components/pages/aboutPage";

import './App.scss';
import {getPizza} from "./store/pizzaSlice";
import {useAppDispatch} from "./hook";


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPizza());
    }, []);

    return (
        <Router>
            <div className='app'>
                <div className='app__body'>
                    <Header/>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
