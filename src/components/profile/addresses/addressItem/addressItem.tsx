import React, {useState} from 'react';
import selector from '../../../../icons/selector.png';
import pushedSelector from '../../../../icons/pushed_selector.png';
import "./addressesItem.scss";
import {IAddress} from '../../../../models/address/models';

const AddressItem: React.FC<IAddress> = ({_id,street, byDefault, floor, house, entrance, apartment}) => {
    const [selectedItem, setSelectedItem] = useState<boolean>(byDefault);

    return (
        <li className="addresses__item-container">
            {selectedItem ? <img src={pushedSelector} alt='*'/> : <img src={selector} alt='*'/>}
            <span>ул. {street} | д. {house} | под. {entrance} | кв. {apartment} | эт. {floor}</span>
        </li>
    );
}

export default AddressItem;