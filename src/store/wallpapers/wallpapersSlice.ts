import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginatedResponse, WallpapersType } from "../../types";

const getInitialWallpapersState = (): WallpapersType => {
  return {
    response: {
      wallpapers: [],
    },
    error: "",
    loading: false,
  };
};

const wallpapersSlice = createSlice({
  name: "wallpapers",
  initialState: getInitialWallpapersState(),
  reducers: {
    wallpapersRequest: (state) => {
      state.loading = true;
    },
    wallpapersRequestSuccess: (
      state,
      action: PayloadAction<PaginatedResponse>
    ) => {
      state.error = "";
      state.loading = false;
      state.response = action.payload;
    },
    wallpapersRequestFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  wallpapersRequest,
  wallpapersRequestSuccess,
  wallpapersRequestFail,
} = wallpapersSlice.actions;
export default wallpapersSlice.reducer;
