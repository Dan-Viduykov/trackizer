import { AppState, AppActionsTypes, AppActions } from "../../types/app"

const defaultAppReducer: AppState = {
    subscriptions: []
}

export const appReducer = (state = defaultAppReducer, action: AppActions): AppState => {
    switch (action.type) {
        case AppActionsTypes.ADD_SUBS:
            return {...state}
        case AppActionsTypes.DELETE_SUBS:
            return {...state}

        default: 
            return state
    }
}