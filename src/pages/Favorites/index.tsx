import { useEffect, useState } from "react";
import { WallpaperType } from "../../types";
import api from "../../api/api";
import Wallpaper from "../../components/Wallpaper";
import Loader from "../../components/Loader";

export default function Favorites() {
  const [favoritesWallpapers, setFavoritesWallpapers] = useState<
    WallpaperType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await api.get("/wallpaper/user_favorites");
      setFavoritesWallpapers(data);
      setLoading(false);
    };

    fetch();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          {favoritesWallpapers.map((wallpaper) => (
            <Wallpaper
              id={wallpaper.id}
              is_public={true}
              image={wallpaper.image}
              title={wallpaper.title}
              description={wallpaper.description}
              date_created={wallpaper.date_created}
              date_updated={wallpaper.date_updated}
              favorite_count={wallpaper.favorite_count}
              downloads={wallpaper.downloads}
            />
          ))}
        </>
      )}
    </div>
  );
}
