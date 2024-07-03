import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const trashSlice = createSlice({
  name: "trash",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {text:action.payload, id: uuidv4()};
      state.items.push(newItem);
      // console.log(items);
    },
    removeItem: (state, action) => {
      // state.items.pop();
     state.items = state.items.filter(item => item.id !== action.payload.id);

    },
    clearTrash: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearTrash } = trashSlice.actions;

export default trashSlice.reducer;  // here we export one reducer