export interface IPizza {
    _id: string;
    title: string;
    description: string;
    img: string;
    price: number;
    count?: number;
}

export interface IAction {
    _id: string;
    title: string;
    description: string;
    img: string;
    text?: string;
    clickable: boolean;
}

export interface IUser {
    // id: string;
    email: string;
}

export interface AuthResponse extends IUser{
    accessToken: string;
    refreshToken: string;
}

export enum Pages {
    Settings = 'settings',
    Orders = 'orders',
    Addresses = 'addresses'
}

export interface IUserPopUp {
    popUpSwitch: () => void
}

export interface IAddress {
    id: string;
    street: string;
    house: string;
    entrance: number;
    apartment: number;
    floor: number;
    byDefault: boolean
}