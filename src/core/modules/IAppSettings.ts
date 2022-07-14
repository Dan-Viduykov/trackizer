import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IAppSettingsState {
    subscriptions: {
        sorting: {
            icon: IconDefinition,
            title: string,
            mods: 'date' | 'name'
        }
    }
    appearance: {
        theme: {
            icon: IconDefinition,
            title: string,
            mods: 'dark' | 'light'
        },
        fontSize: {
            icon: IconDefinition,
            title: string,
            mods: 12 | 14 | 16
        }
    }
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
