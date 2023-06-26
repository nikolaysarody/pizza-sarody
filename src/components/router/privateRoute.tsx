import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../shared/lib/hooks/hooks';

function PrivateRoute() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
