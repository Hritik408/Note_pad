import { configureStore } from "@reduxjs/toolkit";
import trashReducer from "./trashSlice";

const appStore = configureStore({
    reducer: {
        trash: trashReducer,
    }
})

export default appStore;