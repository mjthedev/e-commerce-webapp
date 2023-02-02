import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice.js';
import itemReducer from '../features/item/itemSlice.js'

export const store = configureStore({
    reducer: {
        user: userReducer,
        item: itemReducer
    },
});

