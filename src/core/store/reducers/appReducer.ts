import { ISub, AppState, ICategory } from './../../modules/IApp';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import Placeholder from "../../../assets/img/placeholder.jpg";

const uniqid = require('uniqid'); 

const initialState: AppState = {
    subscriptions: [
        {
            name: 'Spotify',
            description: 'Music app',
            category: 'Auto & Transport',
            datePayment: `${new Date().getMonth() + 1}.${new Date().getDate()}.${new Date().getFullYear()}`,
            image: Placeholder,
            currency: 'USD ($)',
            price: 5.99,
            id: uniqid(),
        },
        {
            name: 'Microsoft OneDrive',
            description: 'Auto & Transport',
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
            category: 'Auto & Transport',
            datePayment: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`,
            image: Placeholder,
            currency: 'USD ($)',
            price: 15.99,
            id: uniqid(),
        },
    ],
    categories: [
        {
            title: 'Auto & Transport',
            limit: 400,
            color: '',
            icon: ''
        },
    ],
    colors: ['#5E00F5', '#7722FF', '#924EFF', '#AD7BFF', '#C9A7FF', '#E4D3FF', '#FF7966', '#FFA699', '#FFD2CC', '#00FAD9', '#7DFFEE'],
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
        },
        changeMode(state, action: PayloadAction<'imgs' | 'dates'>) {
            state.logoMode = action.payload;
        },
        addCategory(state, action: PayloadAction<ICategory>) {
            state.categories = [...state.categories, action.payload]
        },
        deleteCategory(state, action: PayloadAction<string>) {
            state.categories = state.categories.filter(category => category.title !== action.payload);
        },
    }
})

export default AppSlice.reducer;