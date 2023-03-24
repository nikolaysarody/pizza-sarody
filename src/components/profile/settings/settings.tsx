import React from 'react';
import {useAppDispatch} from '../../../hook';
import ProfileNav from '../profileNav/profileNav';
import {Pages} from '../../../models/models';
import './settings.scss';

const Settings: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="settings">
            <ProfileNav page={Pages.Settings}/>
            <div className="settings__container">
                <h1>Личные данные</h1>
                <form>
                    <label>
                        Логин
                        <input type="text"/>
                    </label>
                    <label>
                        Старый пароль
                        <input type="text"/>
                    </label>
                    <label>
                        Новый пароль
                        <input type="text"/>
                    </label>
                    <input type="submit" value="Сохранить"/>
                </form>
            </div>
        </div>
    )
}

export default Settings;