import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState } from "../../modules/IUser"

const initialState: UserState = {
    name: 'John Doe',
    mail: 'j.doe@gmail.com',
    age: 32,
    img: '',
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName(state, action: PayloadAction<string>) {
            state.name = action.payload
        }
    }
})

export default UserSlice.reducer;