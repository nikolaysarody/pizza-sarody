export interface IUser {
    id: string;
    email: string;
    username: string;
}

export interface IUserPopUp {
    popUpSwitch: () => void
}

export enum Pages {
    Settings = 'settings',
    Orders = 'orders',
    Addresses = 'addresses'
}