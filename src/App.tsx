import React, {useEffect} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
import OrderingPage from './components/pages/orderingPage';

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
        <BrowserRouter>
            <div className="app">
                <div className="app__body">
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/profile/settings" component={SettingsPage}/>
                        <Route path="/profile/orders" component={OrdersPage}/>
                        <Route path="/profile/addresses" component={AddressesPage}/>
                        <Route path="/ordering" component={OrderingPage}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
