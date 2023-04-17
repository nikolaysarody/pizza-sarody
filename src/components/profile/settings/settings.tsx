import React from 'react';
import ProfileNav from '../profileNav/profileNav';
import './settings.scss';
import {Pages} from '../../../models/user/models';

const Settings: React.FC = () => {
    return (
        <div className="settings">
            <ProfileNav page={Pages.Settings}/>
            <div className="settings__container-form">
                <h1>Личные данные</h1>
                <form>
                    <label>
                        Логин
                        <input type="text"/>
                    </label>
                    <input type="submit" value="Сохранить"/>
                </form>
            </div>
        </div>
    )
}

export default Settings;