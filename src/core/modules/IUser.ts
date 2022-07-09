export interface UserState {
    name: string;
    mail: string;
    img: string;
    creditCard?: ICreditCard
}

export interface ICreditCard {
    type: string;
    nameCard: string;
    number: number;
    date: string;
}