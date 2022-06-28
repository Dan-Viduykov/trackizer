export interface IAppSettingsState {
    sorting: string;
    theme: string;
    fontSize: number;
}

export enum AppSettingsActionsTypes {
    CHANGE_SORTING = 'CHANGE_SORTING',
    CHANGE_THEME = 'CHANGE_THEME',
    CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE',
}

interface ChangeSortingAction {
    type: AppSettingsActionsTypes.CHANGE_SORTING;
    payload: string;
}
interface ChangeThemeAction {
    type: AppSettingsActionsTypes.CHANGE_THEME;
    payload: string;
}
interface ChangeFontSizeAction {
    type: AppSettingsActionsTypes.CHANGE_FONT_SIZE;
    payload: number;
}

export type AppSettingsActions = 
    ChangeSortingAction |
    ChangeThemeAction |
    ChangeFontSizeAction;
