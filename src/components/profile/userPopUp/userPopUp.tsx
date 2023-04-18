import React, {useEffect, useState} from 'react';
import userImg from '../../../icons/user.svg';
import {useAppDispatch, useAppSelector} from '../../../hook';
import UserAuth from './userAuth/userAuth';
import './userPopUp.scss';
import UserMenu from './userMenu/userMenu';
import {fetchAddresses} from '../../../store/actions/addressAction';
import {fetchOrders} from '../../../store/actions/orderActions';

const UserPopUp: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.item);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const [popUpSwitch, setPopUpSwitch] = useState<boolean>(false);

    useEffect(() => {
        if (isAuth) {
            setPopUpSwitch(false);
            dispatch(fetchAddresses());
            dispatch(fetchOrders());
        }
    }, [isAuth]);

    return (
        <div className="popup">
            <div className="popup__wrapper"
                 onClick={() => setPopUpSwitch(prev => !prev)}>
                <img className="popup__img"
                     src={userImg}
                     alt="user"
                     width="22"
                     height="22"
                />
                <span className="popup__user-login">{user.username}</span>
            </div>
            {popUpSwitch ? <div className="popup__outside-wrapper" onClick={(e) => {
                if(e.target === e.currentTarget){
                    setPopUpSwitch(prev => !prev);
                }
            }}></div> : null}
            {popUpSwitch ? isAuth ? <UserMenu popUpSwitch={() => setPopUpSwitch(prev => !prev)}/> : <UserAuth/> : null}
        </div>
    )
}

export default UserPopUp;