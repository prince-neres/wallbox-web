import { AppDispatch } from "../store";
import {
  updateWallpaperDownloadsCount,
  wallpapersRequest,
  wallpapersRequestFail,
  wallpapersRequestSuccess,
} from "./wallpapersSlice";
import api from "../../api/api";

export const getWallpapers =
  (publics: boolean, query: string, page: string | undefined) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(wallpapersRequest());
      const { data } = await api.get(
        query
          ? `/${publics ? "wallpapers" : "user-wallpapers"}?query=${query}`
          : `/${publics ? "wallpapers" : "user-wallpapers"}?page=${page || 1}`
      );
      dispatch(wallpapersRequestSuccess(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(wallpapersRequestFail(error.response.data.message));
    }
  };

export const AddDownloadToWallpaper =
  (wallpaper_id: number) => async (dispatch: AppDispatch) => {
    try {
      await api.post(`/wallpaper/${wallpaper_id}/downloads`);
      dispatch(updateWallpaperDownloadsCount(wallpaper_id));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(wallpapersRequestFail(error.response.data.message));
    }
  };
