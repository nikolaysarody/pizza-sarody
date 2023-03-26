import React, {useState} from 'react';
import {IAddress} from '../../../../models/models';
import selector from './selector.png';
import pushedSelector from './pushed_selector.png'

const AddressItem: React.FC<IAddress> = ({id,street, byDefault, floor, house, entrance, apartment}) => {
    const [selectedItem, setSelectedItem] = useState<boolean>(byDefault);

    return (
        <li className="addresses__item-container">
            {selectedItem ? <img src={pushedSelector} alt='*'/> : <img src={selector} alt='*'/>}
            <span>ул. {street} | д. {house} | под. {entrance} | кв. {apartment} | эт. {floor}</span>
        </li>
    );
}

export default AddressItem;