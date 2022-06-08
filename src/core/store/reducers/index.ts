import { userReducer } from './userReducer';
import { settingsReducer } from './settingsReducer';
import { appReducer } from './appReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    app: appReducer,
    settings: settingsReducer,
    user: userReducer
})