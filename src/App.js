import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/pages/mainPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutPage from "./components/pages/aboutPage";

function App() {
    return (
        <Router>
            <div className='app'>
                <div className='app__body'>
                    <Header />
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
