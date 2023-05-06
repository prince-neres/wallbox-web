import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import wallpapersReducer from "./wallpapers/wallpapersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    wallpapers: wallpapersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
