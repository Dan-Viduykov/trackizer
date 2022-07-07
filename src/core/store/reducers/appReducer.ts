import { ISub } from './../../modules/IApp';
import { AppState } from "../../modules/IApp";

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Placeholder from "../../../assets/img/placeholder.jpg";

const uniqid = require('uniqid'); 

const initialState: AppState = {
    subscriptions: [
        {
            name: 'Spotify',
            description: 'Music app',
            category: 'Enterteintment',
            datePayment: `${new Date().getMonth() + 1}.${new Date().getDate()}.${new Date().getFullYear()}`,
            image: Placeholder,
            currency: 'USD ($)',
            price: 5.99,
            id: uniqid(),
        },
        {
            name: 'Microsoft OneDrive',
            description: 'Cloud',
            category: 'cloud',
            datePayment: `${new Date().getMonth() + 1}.${new Date().getDate()}.${new Date().getFullYear()}`,
            image: Placeholder,
            currency: 'USD ($)',
            price: 25.99,
            id: uniqid(),
        },
        {
            name: 'YouTube Premium',
            description: 'Video app',
            category: 'Enterteintment',
            datePayment: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`,
            image: Placeholder,
            currency: 'USD ($)',
            price: 15.99,
            id: uniqid(),
        },
    ],
    moneyLimit: 1800,
    moneySpent: 1200,
    logoMode: 'imgs'
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addSubscription(state, action: PayloadAction<ISub>) {
            state.subscriptions = [...state.subscriptions, action.payload];
        },
        deleteSubscription(state, action: PayloadAction<string>) {
            state.subscriptions = state.subscriptions.filter(sub => sub.id !== action.payload);
            console.log(state.subscriptions);
        },
        changeMode(state, action: PayloadAction<'imgs' | 'dates'>) {
            state.logoMode = action.payload;
        }
    }
})

export default AppSlice.reducer;