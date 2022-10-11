import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
});
