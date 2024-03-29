export interface IUser {
    id: string;
    email: string;
    username: string;
}

export enum Pages {
    Settings = 'settings',
    Orders = 'orders',
    Addresses = 'addresses',
}
