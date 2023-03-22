import React, {useState} from 'react';
import userImg from '../../header/user.svg';
import {useAppDispatch, useAppSelector} from '../../../hook';
import UserAuth from '../userAuth/userAuth';
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
            {popUpSwitch ? <div className="popup__outside-wrapper" onClick={(e) => {
                if(e.target === e.currentTarget){
                    setPopUpSwitch(prev => !prev);
                }
            }}></div> : null}
            {popUpSwitch ? isAuth ? <UserMenu/> : <UserAuth/> : null}
        </div>
    )
}

export default UserPopUp;