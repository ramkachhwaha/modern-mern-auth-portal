import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        loggedUser: {},
        status: false
    },
    reducers: {
        SET_USER: (state, action) => {
            state.loggedUser = action.payload
            state.status = true;
        }
    }
});

export default userSlice.reducer;