import React, {useState} from 'react';
import {useAppDispatch} from '../../../hook';
import {Pages} from '../../../models/models';
import ProfileNav from '../profileNav/profileNav';

const Addresses: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <ProfileNav page={Pages.Addresses}/>
        </div>
    )
}

export default Addresses;