import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../hook';
import fetchPizza from '../store/actions/pizzaActions';
import fetchAction from '../store/actions/actionActions';
import { checkAuth } from '../store/actions/authActions';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { initCart } from '../store/slices/cartSlice';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            dispatch(checkAuth());
            if (localStorage.getItem('pizza') && localStorage.getItem('cartId') === localStorage.getItem('userId')) {
                dispatch(initCart());
            }
        }
        if (localStorage.getItem('cartId') === 'no-user') {
            dispatch(initCart());
        }
        dispatch(fetchPizza());
        dispatch(fetchAction());
    }, [dispatch]);

    return (
        <Router>
            <div className="app">
                <div className="app__body">
                    <Header />
                    <AppRouter />
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
