import { SettingsState, SettingsActions, SettingsActionsTypes } from "../../types/settings";

const defaultSettingsReducer: SettingsState = {
    sorting: 'date',
    currency: 'USD',
    appIconSize: 10,
    theme: 'Dark',
    fontSize: 14,
}

export const settingsReducer = (state = defaultSettingsReducer, action: SettingsActions): SettingsState => {
    switch (action.type) {
        case SettingsActionsTypes.CHANGE_SORTING:
            return {...state, sorting: action.payload};
        case SettingsActionsTypes.CHANGE_CURRENCY:
            return {...state, currency: action.payload};
        case SettingsActionsTypes.CHANGE_ICON_SIZE:
            return {...state, appIconSize: action.payload};
        case SettingsActionsTypes.CHANGE_THEME:
            return {...state, theme: action.payload};
        case SettingsActionsTypes.CHANGE_FONT_SIZE:
            return {...state, fontSize: action.payload};

        default: 
            return state
    }
}