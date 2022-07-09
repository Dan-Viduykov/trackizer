import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState, ICreditCard } from "../../modules/IUser"

const initialState: UserState = {
    name: 'John Doe',
    mail: 'j.doe@gmail.com',
    age: 32,
    img: '',
    creditCard: {
        type: 'master card',
        name: 'John Doe',
        number: 2202201672718968,
        date: '08/28'
    }
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        changeCard(state, action: PayloadAction<ICreditCard>) {
            state.creditCard = action.payload;
        }
    }
})

export default UserSlice.reducer;