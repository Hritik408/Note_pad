import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const newnotesSlice = createSlice({
  name: "newNotes",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const newItem = {text: action.payload, id: uuidv4()};
      state.items.push(newItem);
      },
    removeItem: (state, action) => {
     state.items = state.items.filter(item => item.id !== action.payload.id);

    },
    clearTrash: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearTrash } = newnotesSlice.actions;

export default newnotesSlice.reducer;  // here we export one reducer