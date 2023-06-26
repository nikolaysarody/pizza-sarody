export interface IAction {
    _id: string;
    title: string;
    description: string;
    img: string;
    text?: string;
    clickable: boolean;
}
