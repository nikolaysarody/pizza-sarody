import { type IPizza } from '../../../Pizza/model/types/pizza';
import { type IAddress } from '../../../../widgets/Addresses/model/types/address';

export enum OrderPaymentStatus {
    Paid = 'Оплачен',
    NotPaid = 'Не оплачен',
}

export enum OrderStatus {
    Delivered = 'Доставляется',
    Done = 'Готов',
    Cooking = 'Готовится',
    Waited = 'Ожидает оплаты',
    Canceled = 'Отменен',
}

export enum OrderPaymentOption {
    Site = 'Онлайн на сайте',
    Courier = 'Картой курьеру',
    Cash = 'Наличными курьеру',
}

export interface IOrder {
    paymentStatus: OrderPaymentStatus;
    paymentOption: OrderPaymentOption;
    orderStatus: OrderStatus;
    cost: number;
    pizzas: IPizza[];
}

export interface OrderResponse extends IOrder {
    _id: string;
    orderNumber: number;
    address: IAddress;
    userId: string;
}

export interface IPromo {
    title: string;
    description: string;
    discount: number;
    items: IPizza[];
    img: string;
    expire?: Date;
}
