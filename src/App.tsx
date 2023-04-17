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
import PrivateRoute from './components/router/privateRoute';
import {initCart} from './store/slices/orderSlice';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            dispatch(checkAuth());
            if (localStorage.getItem('pizza') &&
                localStorage.getItem('cartId') === localStorage.getItem('userId')) {
                dispatch(initCart());
            }
        }
        if (localStorage.getItem('cartId') === 'no-user') {
            dispatch(initCart());
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
                        <Route element={<PrivateRoute/>}>
                            <Route path="/settings" element={<SettingsPage/>}/>
                            <Route path="/orders" element={<OrdersPage/>}/>
                            <Route path="/addresses" element={<AddressesPage/>}/>
                            <Route path="/checkout" element={<CheckoutPage/>}/>
                        </Route>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
