export interface SettingsState {
    sorting: string;
    currency: string;
    appIconSize: number;
    theme: string;
    fontSize: number;
}

export enum SettingsActionsTypes {
    CHANGE_SORTING = 'CHANGE_SORTING',
    CHANGE_CURRENCY = 'CHANGE_CURRENCY',
    CHANGE_ICON_SIZE = 'CHANGE_ICON_SIZE',
    CHANGE_THEME = 'CHANGE_THEME',
    CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE',
}

interface ChangeSortingAction {
    type: SettingsActionsTypes.CHANGE_SORTING;
    payload: string;
}
interface ChangeCurrencyAction {
    type: SettingsActionsTypes.CHANGE_CURRENCY;
    payload: string;
}
interface ChangeIconSizeAction {
    type: SettingsActionsTypes.CHANGE_ICON_SIZE;
    payload: number;
}
interface ChangeThemeAction {
    type: SettingsActionsTypes.CHANGE_THEME;
    payload: string;
}
interface ChangeFontSizeAction {
    type: SettingsActionsTypes.CHANGE_FONT_SIZE;
    payload: number;
}

export type SettingsActions = 
    ChangeSortingAction |
    ChangeCurrencyAction |
    ChangeIconSizeAction |
    ChangeThemeAction |
    ChangeFontSizeAction;
