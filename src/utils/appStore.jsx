import { configureStore } from "@reduxjs/toolkit";
import trashReducer from "./trashSlice";
import favoriteReducer from "./FavoriteSlice"

const appStore = configureStore({
    reducer: {
        trash: trashReducer,
        favorite: favoriteReducer,

    }
})

export default appStore;