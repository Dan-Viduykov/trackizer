import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState, ICreditCard } from "../../modules/IUser"

const initialState: UserState = {
    name: 'John Doe',
    mail: 'j.doe@gmail.com',
    img: '',
    creditCard: {
        type: 'master card',
        nameCard: 'John Doe',
        number: 2202201672718968,
        date: '08/28'
    }
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeCard(state, action: PayloadAction<ICreditCard>) {
            state.creditCard = action.payload;
        },
        changeUser(state, action: PayloadAction<UserState>) {
            state = { ...state, ...action.payload };
        }
    }
})

export default UserSlice.reducer;