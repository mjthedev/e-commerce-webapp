import { createSlice } from "@reduxjs/toolkit";

// import { User } from "../../types/userType";

let initialState = {
    values: {
        firstname: '',
        lastname: '',
        username: '',
        email: ''
    },
    isLoggedIn: false
}

   

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            // logic here

            // state.values.firstname = action.payload.first_name;
            // state.values.lastname = action.payload.last_name;
            // state.values.username = action.payload.username;
            // state.values.email = action.payload.email;
            state.values = action.payload; 
        },
        loginUser: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false; 
            }
//        deleteUserData: (state) => {
            // logic here
            // state.values.firstname = '', 
            // state.values.lastname = '', 
            // state.values.username = '',
            // state.values.email = '' 
 //       }
    }
});

export const selectAllUsers = (state: any) => state.user;
export const { updateUserData, loginUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
