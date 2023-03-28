import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useAppDispatch} from './hook';
import {fetchPizza} from './store/actions/pizzaActions';
import {fetchAction} from './store/actions/actionActions';
import {checkAuth} from './store/actions/authActions';
import SettingsPage from './components/pages/profile/settingsPage';
import OrdersPage from './components/pages/profile/ordersPage';
import AddressesPage from './components/pages/profile/addressesPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/pages/mainPage';
import AboutPage from './components/pages/aboutPage';
import './App.scss';
import CheckoutPage from './components/pages/checkoutPage';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('refreshToken')) {
            dispatch(checkAuth());
        }
        dispatch(fetchPizza());
        dispatch(fetchAction());
    }, []);

    return (
        <Router>
            <div className="app">
                <div className="app__body">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/profile/settings" element={<SettingsPage/>}/>
                        <Route path="/profile/orders" element={<OrdersPage/>}/>
                        <Route path="/profile/addresses" element={<AddressesPage/>}/>
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
