import { AppDispatch } from "../store";
import {
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
          ? `/${
              publics ? "wallpapers" : "user-wallpapers"
            }?query=${query}&page=${page || 1}`
          : `/${publics ? "wallpapers" : "user-wallpapers"}?page=${page || 1}`
      );
      dispatch(wallpapersRequestSuccess(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(wallpapersRequestFail(error.response.data.message));
    }
  };
