import { AppDispatch } from "../store";
import { addFavorites, removeFavorite, addFavorite } from "./favoritesSlice";
import api from "../../api/api";
import { updateWallpaperFavoriteCount } from "../wallpapers/wallpapersSlice";

export const getFavorites = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.get("/wallpaper/user_favorites_ids");
    dispatch(addFavorites(data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }
};

export const reqAddFavorite =
  (wallpaper_id: number) => async (dispatch: AppDispatch) => {
    try {
      await api.post(`/wallpaper/${wallpaper_id}/favorite`);
      dispatch(addFavorite(wallpaper_id));
      dispatch(
        updateWallpaperFavoriteCount({ id: wallpaper_id, isFavorite: true })
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };

export const reqRemoveFavorite =
  (wallpaper_id: number) => async (dispatch: AppDispatch) => {
    try {
      await api.delete(`/wallpaper/${wallpaper_id}/disfavor`);
      dispatch(removeFavorite(wallpaper_id));
      dispatch(
        updateWallpaperFavoriteCount({ id: wallpaper_id, isFavorite: false })
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };
