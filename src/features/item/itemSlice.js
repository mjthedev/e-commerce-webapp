import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    item: {
        id: null,
        sku: null,
        brand: null,
        details: null,
        description: null,
        item: null,
        img: null,
        price: null,
        size: null,
        color: null,
    }
}

   

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        updateItemData: (state, action) => {
            // logic here
            // state.item = action.payload; 

            // console.log(action.payload)
            return {
                ...state,
                item: action.payload
              }
        },
        setItem: (state, action) => {
            state.item = action.payload
        },
        findItem: (state) => {
            return state.item
        },
        destroyItem: (state) => {
            state.item = {}
            }
    }
});

export const selectAllUsers = (state) => state.item;
export const {updateItemData, setItem, findItem, destroyItem} = itemSlice.actions;

export default itemSlice.reducer;
