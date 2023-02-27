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
    _id: string;
    login: string;
}

export interface AuthResponse extends IUser{
    access_token: string;
}


// export interface ServerResponse<T> {
//     count: number;
//     next: number;
//     previous: number;
//     results: T[]
// }