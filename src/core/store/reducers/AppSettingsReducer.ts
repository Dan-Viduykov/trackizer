import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faSpellCheck, faSort } from '@fortawesome/free-solid-svg-icons';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IAppSettingsState } from "../../modules/IAppSettings";

const initialState: IAppSettingsState = {
    subscriptions: {
        sorting: {
            icon: faSort,
            title: 'Sorting',
            mods: 'date'
        },
    },
    appearance: {
        theme: {
            icon: faSun,
            title: 'Theme',
            mods: 'dark'
        },
        fontSize: {
            icon: faSpellCheck,
            title: 'Text size',
            mods: 14
        }
    }
}

export const AppSettingsSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        changeSorting(state, action: PayloadAction<'date' | 'name'>) {
            state.subscriptions.sorting.mods = action.payload
        }
    }
})

export default AppSettingsSlice.reducer