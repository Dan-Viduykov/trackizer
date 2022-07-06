export interface UserState {
    name: string;
    mail: string;
    age: number;
    img: string;
    creditCard: [ICreditCard]
}

export interface ICreditCard {
    type: string;
    name: string;
    number: number;
    date: string;
}

export enum AppActionsTypes {
    CHANGE_FULLNAME = 'CHANGE_FULLNAME',
    CHANGE_MAIL = 'CHANGE_MAIL',
    CHANGE_AGE = 'CHANGE_AGE',
    CHANGE_IMG = 'CHANGE_IMG',
}

interface ChangeFullname {
    type: AppActionsTypes.CHANGE_FULLNAME;
    payload: string;
}
interface ChangeMail {
    type: AppActionsTypes.CHANGE_MAIL;
    payload: string;
}
interface ChangeAge {
    type: AppActionsTypes.CHANGE_AGE;
    payload: number;
}
interface ChangeImg {
    type: AppActionsTypes.CHANGE_IMG;
    payload: string;
}

export type AppActions = 
    ChangeFullname |
    ChangeMail |
    ChangeAge |
    ChangeImg