import { combineReducers } from 'redux';

import { appReducer } from './reducers/appReducer';
import { userReducer } from './reducers/userReducer';
import { settingsReducer } from './reducers/settingsReducer';

export const store = combineReducers({app: appReducer, settings: settingsReducer, user: userReducer})