export interface IUser {
    id: string;
    email: string;
}

export interface IUserPopUp {
    popUpSwitch: () => void
}

export enum Pages {
    Settings = 'settings',
    Orders = 'orders',
    Addresses = 'addresses'
}