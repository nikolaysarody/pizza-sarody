import React from 'react';
import selector from '../../../../icons/selector.png';
import pushedSelector from '../../../../icons/pushed_selector.png';
import './addressesItem.scss';
import {IAddress} from '../../../../models/address/models';
import trash from '../../../../icons/trash.svg';
import {useAppDispatch} from '../../../../hook';
import {deleteAddress} from '../../../../store/actions/addressAction';

const AddressItem: React.FC<IAddress> = ({
                                             _id,
                                             street,
                                             byDefault,
                                             floor,
                                             house,
                                             entrance,
                                             apartment
                                         }) => {
    const dispatch = useAppDispatch();

    return (
        <li className="addresses__item-container">
            {byDefault ? <img className="addresses__selector" src={pushedSelector} alt="*"/> :
                <img className="addresses__selector" src={selector} alt="*"/>}
            <span>ул. {street} | д. {house} | под. {entrance} | кв. {apartment} | эт. {floor}</span>
            <img className="addresses__trash"
                 src={trash}
                 alt="Delete"
                 onClick={() => {
                     if (_id) {
                         dispatch(deleteAddress(_id));
                     }
                 }}/>
        </li>
    );
}

export default AddressItem;