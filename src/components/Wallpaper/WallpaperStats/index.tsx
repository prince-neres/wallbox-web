import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface WallpaperStatsProps {
  wallpaper_id: number;
  downloads: number;
  favorite_count: number;
}

export default function WallpaperStats({
  wallpaper_id,
  downloads,
  favorite_count,
}: WallpaperStatsProps) {
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(wallpaper_id);

  return (
    <div className="flex gap-3 z-50">
      <span className="flex flex-col items-center justify-center">
        <ArrowDownTrayIcon className="w-6" />
        <p>{downloads}</p>
      </span>
      <span className="flex flex-col items-center justify-center">
        <HeartIcon className={`w-6 ${isFavorite ? "text-red-500" : ""}`} />
        <p>{favorite_count}</p>
      </span>
    </div>
  );
}
