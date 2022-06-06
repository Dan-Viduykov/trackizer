import { UserState, AppActionsTypes, AppActions } from "../../types/user"

const defaultUserReducer: UserState = {
    name: '',
    mail: '',
    age: 0,
    img: '',
}

export const userReducer = (state = defaultUserReducer, action: AppActions): UserState => {
    switch (action.type) {
        case AppActionsTypes.CHANGE_FULLNAME:
            return {...state, name: action.payload}
        case AppActionsTypes.CHANGE_MAIL:
            return {...state, mail: action.payload}
        case AppActionsTypes.CHANGE_AGE:
            return {...state, age: action.payload}
        case AppActionsTypes.CHANGE_IMG:
            return {...state, img: action.payload}

        default: 
            return state
    }
}