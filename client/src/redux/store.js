import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/loggedSlice"

export default configureStore({
    reducer: {
        user: userSlice
    }
});