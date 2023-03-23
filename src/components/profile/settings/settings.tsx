import React from 'react';
import {useAppDispatch} from '../../../hook';
import ProfileNav from '../profileNav/profileNav';
import {Pages} from '../../../models/models';

const Settings: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <ProfileNav page={Pages.Settings}/>
        </div>
    )
}

export default Settings;