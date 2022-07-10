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
            const { name, img, mail } = action.payload;
            state.img = img;
            state.name = name;
            state.mail = mail;
        }
    }
})

export default UserSlice.reducer;