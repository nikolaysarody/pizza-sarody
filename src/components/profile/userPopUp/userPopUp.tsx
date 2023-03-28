import React, {useEffect, useState} from 'react';
import userImg from '../../../icons/user.svg';
import {useAppSelector} from '../../../hook';
import UserAuth from './userAuth/userAuth';
import './userPopUp.scss';
import UserMenu from './userMenu/userMenu';

const UserPopUp: React.FC = () => {
    const user = useAppSelector(state => state.auth.user);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const [popUpSwitch, setPopUpSwitch] = useState<boolean>(false);

    useEffect(() => {
        if (isAuth) {
            setPopUpSwitch(prev => !prev);
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
                <span className="popup__user-login">{user.email}</span>
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