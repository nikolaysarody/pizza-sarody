import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../hook';
import fetchPizza from '../store/actions/pizzaActions';
import fetchAction from '../store/actions/actionActions';
import { checkAuth } from '../store/actions/authActions';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import PrivateRoute from '../components/router/privateRoute';
import { initCart } from '../store/slices/cartSlice';
import { SettingsPage } from '../pages/SettingsPage';
import { OrdersPage } from '../pages/OrdersPage';
import { AddressesPage } from '../pages/AdressesPage';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import './styles/index.scss';

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
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/orders" element={<OrdersPage />} />
                            <Route path="/addresses" element={<AddressesPage />} />
                        </Route>
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
