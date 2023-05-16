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
    updateWallpaperFavoriteCount: (
      state,
      action: PayloadAction<{ id: number; isFavorite: boolean }>
    ) => {
      const { id, isFavorite } = action.payload;
      const wallpaperIndex = state.response.wallpapers.findIndex(
        (wallpaper) => wallpaper.id === id
      );
      if (wallpaperIndex !== -1) {
        const wallpaper = state.response.wallpapers[wallpaperIndex];
        if (isFavorite) {
          wallpaper.favorite_count++;
        } else {
          wallpaper.favorite_count--;
        }
      }
    },
    updateWallpaperDownloadsCount: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const wallpaperIndex = state.response.wallpapers.findIndex(
        (wallpaper) => wallpaper.id === id
      );
      if (wallpaperIndex !== -1) {
        const wallpaper = state.response.wallpapers[wallpaperIndex];
        wallpaper.downloads++;
      }
    },
  },
});

export const {
  wallpapersRequest,
  wallpapersRequestSuccess,
  wallpapersRequestFail,
  updateWallpaperFavoriteCount,
  updateWallpaperDownloadsCount,
} = wallpapersSlice.actions;
export default wallpapersSlice.reducer;
