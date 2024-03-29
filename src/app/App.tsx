import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../shared/lib/hooks/hooks';
import fetchPizza from '../entities/Pizza/model/action/pizzaActions';
import fetchAction from '../entities/Promo/model/action/actionActions';
import { checkAuth } from '../widgets/UserPopUp/model/action/authActions';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { SettingsPage } from '../pages/SettingsPage';
import { OrdersPage } from '../pages/OrdersPage';
import { AddressesPage } from '../pages/AddressesPage';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import PrivateRoute from './providers/router/privateRoute';
import { initCart } from '../entities/Cart/model/slice/cartSlice';
import { PageLoader } from '../widgets/PageLoader';
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
                    <Suspense fallback={<PageLoader />}>
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
                    </Suspense>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
