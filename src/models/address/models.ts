export interface IAddress {
    _id?: string;
    street: string;
    house: string;
    entrance: number;
    apartment: number;
    floor: number;
    byDefault: boolean;
}

export interface AddressResponse extends IAddress {
    userId: string;
}
