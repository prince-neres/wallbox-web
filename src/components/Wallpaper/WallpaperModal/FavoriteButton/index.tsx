import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import { HeartIcon } from "@heroicons/react/24/solid";
import {
  reqAddFavorite,
  reqRemoveFavorite,
} from "../../../../store/favorites/favoritesApi";

export default function FavoriteButton({
  wallpaper_id,
}: {
  wallpaper_id: number;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(wallpaper_id);

  return (
    <span
      onClick={async () => {
        if (isFavorite) {
          await dispatch(reqRemoveFavorite(wallpaper_id));
        } else {
          await dispatch(reqAddFavorite(wallpaper_id));
        }
      }}
      className="flex flex-col justify-center items-center cursor-pointer hover:text-white duration-200"
    >
      <HeartIcon className={`w-5 ${isFavorite ? "text-red-500" : ""}`} />
      <p>{isFavorite ? "Desfavoritar" : "Favoritar"}</p>
    </span>
  );
}
