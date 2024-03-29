import {
    memo, useEffect, useMemo, useState,
} from 'react';
import userImg from '../../../../shared/assets/icons/user.svg';
import { fetchAddresses } from '../../../Addresses/model/action/addressAction';
import { fetchOrders } from '../../../../entities/Orders/model/action/orderActions';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/hooks/hooks';
import UserAuth from '../UserAuth/UserAuth';
import UserMenu from '../UserMenu/UserMenu';
import './UserPopUp.scss';

export const UserPopUp = memo(() => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.item);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const [popUpSwitch, setPopUpSwitch] = useState<boolean>(false);

    const popUp = useMemo(() => {
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
    }, [isAuth, popUpSwitch]);

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
                <img className="popup__img" src={userImg} alt="user" width="22" height="22" />
                <span className="popup__user-login">{user.username}</span>
            </button>
            {popUp}
        </div>
    );
});
