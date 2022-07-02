import { ISub } from './../../modules/IApp';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from "../../modules/IApp"

const initialState: AppState = {
    subscriptions: [
        {
            name: 'Spotify',
            description: 'Music app',
            category: 'Enterteintment',
            firstPayment: `${new Date('8 1 2022').getMonth() + 1}.${new Date('8 1 2022').getDate()}.${new Date('8 1 2022').getFullYear()}`,
            currency: 'USD ($)',
            price: 5.99,
        },
        {
            name: 'Microsoft OneDrive',
            description: 'Cloud',
            category: 'cloud',
            firstPayment: `${new Date('8 1 2022').getMonth() + 1}.${new Date('8 1 2022').getDate()}.${new Date('8 1 2022').getFullYear()}`,
            currency: 'USD ($)',
            price: 25.99,
        },
        {
            name: 'YouTube Premium',
            description: 'Video app',
            category: 'Enterteintment',
            firstPayment: `${new Date('8 1 2022').getDate()} ${new Date('8 1 2022').getMonth()} ${new Date('8 1 2022').getFullYear()}`,
            currency: 'USD ($)',
            price: 15.99,
        },
        {
            name: 'Spotify',
            description: 'Music app',
            category: 'Enterteintment',
            firstPayment: `${new Date('8 1 2022').getMonth() + 1}.${new Date('8 1 2022').getDate()}.${new Date('8 1 2022').getFullYear()}`,
            currency: 'USD ($)',
            price: 5.99,
        },
        {
            name: 'Microsoft OneDrive',
            description: 'Cloud',
            category: 'cloud',
            firstPayment: `${new Date('8 1 2022').getMonth() + 1}.${new Date('8 1 2022').getDate()}.${new Date('8 1 2022').getFullYear()}`,
            currency: 'USD ($)',
            price: 25.99,
        },
        {
            name: 'YouTube Premium',
            description: 'Video app',
            category: 'Enterteintment',
            firstPayment: `${new Date('8 1 2022').getDate()} ${new Date('8 1 2022').getMonth()} ${new Date('8 1 2022').getFullYear()}`,
            currency: 'USD ($)',
            price: 15.99,
        }
    ],
    moneyLimit: 1800,
    moneySpent: 1200,
    logoMode: 'imgs'
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addSub(state, action: PayloadAction<ISub>) {
            state.subscriptions = Object.assign({}, state.subscriptions, action.payload);
        },
        changeMode(state, action: PayloadAction<'imgs' | 'dates'>) {
            state.logoMode = action.payload;
        }
    }
})

export default AppSlice.reducer;