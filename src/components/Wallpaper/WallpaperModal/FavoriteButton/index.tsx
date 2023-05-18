import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import { HeartIcon } from "@heroicons/react/24/solid";
import {
  reqAddFavorite,
  reqRemoveFavorite,
} from "../../../../store/favorites/favoritesApi";
import { useNavigate } from "react-router-dom";

export default function FavoriteButton({
  wallpaper_id,
}: {
  wallpaper_id: number;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const { userInfo } = useSelector((state: RootState) => state.user);
  const isFavorite = favorites.includes(wallpaper_id);

  const toggleFavorite = async () => {
    if (userInfo?.token) {
      if (isFavorite) {
        await dispatch(reqRemoveFavorite(wallpaper_id));
      } else {
        await dispatch(reqAddFavorite(wallpaper_id));
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <span
      onClick={toggleFavorite}
      className="flex flex-col justify-center items-center cursor-pointer hover:text-white duration-200"
    >
      <HeartIcon className={`w-5 ${isFavorite ? "text-red-500" : ""}`} />
      <p>{isFavorite ? "Desfavoritar" : "Favoritar"}</p>
    </span>
  );
}
