export interface AppState {
    subscriptions: any[]
}

export enum AppActionsTypes {
    ADD_SUBS = 'ADD_SUBS',
    DELETE_SUBS = 'DELETE_SUBS',
}

interface AddSubAction {
    type: AppActionsTypes.ADD_SUBS;
    payload: string;
}
interface DeleteSubAction {
    type: AppActionsTypes.DELETE_SUBS;
    payload: string;
}

export type AppActions = 
    AddSubAction | 
    DeleteSubAction