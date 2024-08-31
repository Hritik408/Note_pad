import { createSlice } from "@reduxjs/toolkit";

const tempSlice = createSlice({
    name: "temp",
    initialState: {
        items: [],
    },
    reducers: {
        addtemp: (state, action) => {
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

export const { addtemp, removeItem, clearItem } = tempSlice.actions;

export default tempSlice.reducer;