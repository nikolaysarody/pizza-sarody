import React, {useState} from 'react';
import userImg from '../../header/user.svg';
import {useAppDispatch, useAppSelector} from '../../../hook';
import Auth from '../auth/auth';
import '../profile.scss';
import UserMenu from '../userMenu/userMenu';

const UserPopUp: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const [popUpSwitch, setPopUpSwitch] = useState<boolean>(false);

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
            {popUpSwitch ? isAuth ? <UserMenu/> : <Auth/> : null}
        </div>
    )
}

export default UserPopUp;