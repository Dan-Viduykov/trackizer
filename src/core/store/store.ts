import { appReducer } from "./reducers/appReducer";
import { userReducer } from "./reducers/userReducer";
import { settingsReducer } from "./reducers/settingsReducer";

const configureStore = require('redux-mock-store').default();

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
        settings: settingsReducer
    }
})