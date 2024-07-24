import { configureStore } from "@reduxjs/toolkit";
import trashReducer from "./trashSlice";
// import favoriteReducer from "./FavoriteSlice"
import newnotesReducer from "./FavoriteSlice"

const appStore = configureStore({
    reducer: {
        trash: trashReducer,
        newNotes: newnotesReducer,
    }
})

export default appStore;