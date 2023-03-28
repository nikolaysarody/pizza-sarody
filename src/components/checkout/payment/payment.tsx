import React from 'react';
import pushedSelector from '../../../icons/pushed_selector.png';
import selector from '../../../icons/selector.png';
import {OrderPaymentOption} from '../../../models/order/models';
import "./payment.scss";

interface IPayment {
    selectedItem: boolean;
    paymentOption: OrderPaymentOption
}

const PaymentOption: React.FC<IPayment> = ({selectedItem, paymentOption}) => {

    return (
        <div className="payment">
            {selectedItem ? <img src={pushedSelector} alt='*'/> : <img src={selector} alt='*'/>}
            <span>{paymentOption}</span>
        </div>
    );
}

export default PaymentOption;