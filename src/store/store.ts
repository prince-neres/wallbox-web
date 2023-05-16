import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import wallpapersReducer from "./wallpapers/wallpapersSlice";
import favoritesReducer from "./favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    user: userReducer,
    wallpapers: wallpapersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
