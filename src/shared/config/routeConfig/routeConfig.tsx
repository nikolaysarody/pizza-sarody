import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { SettingsPage } from '../../../pages/SettingsPage';
import { OrdersPage } from '../../../pages/OrdersPage';
import { AddressesPage } from '../../../pages/AdressesPage';
import { CheckoutPage } from '../../../pages/CheckoutPage';
import { AboutPage } from '../../../pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    ORDERS = 'orders',
    ADDRESSES = 'addresses',
    CHECKOUT = 'checkout',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.ORDERS]: '/addresses',
    [AppRoutes.ADDRESSES]: '/addresses',
    [AppRoutes.CHECKOUT]: '/checkout',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },
    [AppRoutes.ORDERS]: {
        path: RoutePath.orders,
        element: <OrdersPage />,
    },
    [AppRoutes.ADDRESSES]: {
        path: RoutePath.addresses,
        element: <AddressesPage />,
    },
    [AppRoutes.CHECKOUT]: {
        path: RoutePath.checkout,
        element: <CheckoutPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
