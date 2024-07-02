import { createSlice } from "@reduxjs/toolkit";

const trashSlice = createSlice({
  name: "trash",
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
    clearTrash: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearTrash } = cartSlice.actions;

export default trashSlice.reducer;  // here we export one reducer