import {useAppSelector} from '../../hook';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoute = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    return (
        isAuth ? <Outlet/> : <Navigate to="/"/>
    );
};

export default PrivateRoute;