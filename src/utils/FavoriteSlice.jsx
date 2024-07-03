 import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearItem: (state) => {
            return {items: []};
        }
    }
})

export const { addItem, removeItem, clearItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;