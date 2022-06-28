import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';
import appSettingsReducer from './reducers/AppSettingsReducer';

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    userReducer,
    appReducer,
    appSettingsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];