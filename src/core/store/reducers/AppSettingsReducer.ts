import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IAppSettingsState } from "../../modules/IAppSettings";

const initialState: IAppSettingsState = {
    sorting: 'date',
    theme: 'Dark',
    fontSize: 14,
}

export const AppSettingsSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        changeSorting(state, action: PayloadAction<string>) {
            state.sorting = action.payload
        }
    }
})

export default AppSettingsSlice.reducer