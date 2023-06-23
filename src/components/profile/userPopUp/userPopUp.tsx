import { useEffect, useState } from 'react';
import { fetchAddresses } from '../../../store/actions/addressAction';
import { fetchOrders } from '../../../store/actions/orderActions';
import { useAppDispatch, useAppSelector } from '../../../hook';
import UserAuth from './userAuth/userAuth';
import UserMenu from './userMenu/userMenu';
// import UserImg from '../../../shared/assets/icons/user.svg';
import './userPopUp.scss';

const UserPopUp = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.item);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const [popUpSwitch, setPopUpSwitch] = useState<boolean>(false);

    const popUp = () => {
        if (popUpSwitch) {
            if (isAuth) {
                return (
                    <>
                        <button
                            type="button"
                            aria-label="close"
                            className="popup__outside-wrapper"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    setPopUpSwitch((prev) => !prev);
                                }
                            }}
                        />
                        <UserMenu popUpSwitch={() => setPopUpSwitch((prev) => !prev)} />
                    </>
                );
            }
            return (
                <>
                    <button
                        type="button"
                        aria-label="close"
                        className="popup__outside-wrapper"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setPopUpSwitch((prev) => !prev);
                            }
                        }}
                    />
                    <UserAuth />
                </>
            );
        }
        return null;
    };

    useEffect(() => {
        if (isAuth) {
            setPopUpSwitch(false);
            dispatch(fetchAddresses());
            dispatch(fetchOrders());
        }
    }, [dispatch, isAuth]);

    return (
        <div className="popup">
            <button
                type="button"
                className="popup__wrapper"
                onClick={() => {
                    setPopUpSwitch((prev) => !prev);
                }}
            >
                {/* <UserImg className="popup__img" width="22" height="22" /> */}
                <span className="popup__user-login">{user.username}</span>
            </button>
            {popUp()}
        </div>
    );
};

export default UserPopUp;
