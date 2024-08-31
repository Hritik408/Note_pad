import { configureStore } from "@reduxjs/toolkit";
import trashducer from "./trashSlice";
// import favoriteReducer from "./FavoriteSlice"
import savedReducer from "./savedSlice";
import FavoriteSlice from "./FavoriteSlice";
import tempSlice from "./tempSlice";
// import savedSlice from "./savedSlice";

const appStore = configureStore({
    reducer: {
        trash: trashducer,  
        saved: savedReducer,
        favorite: FavoriteSlice,
        temp: tempSlice,
    }
})

export default appStore;