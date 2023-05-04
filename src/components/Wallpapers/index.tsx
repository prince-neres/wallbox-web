import { useEffect, useState } from "react";
import api from "../../api";
import Wallpaper from "./Wallpaper";
import { WallpaperType } from "../../types";

interface WallpaperProps {
  IsPublic: boolean;
}

export default function Wallpapers(props: WallpaperProps) {
  const [wallpapers, setWallpapers] = useState<WallpaperType[]>([]);

  useEffect(() => {
    const getWallpapers = async () => {
      try {
        const url = props.IsPublic ? "wallpapers" : "user-wallpapers";
        const { data } = await api.get(url);
        setWallpapers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getWallpapers();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center items-center py-5">
      {wallpapers.map((wallpaper) => (
        <Wallpaper
          key={wallpaper.id}
          id={wallpaper.id}
          user={wallpaper.user}
          image={`https://${wallpaper.image}`}
          title={wallpaper.title}
          description={wallpaper.description}
          tags={wallpaper.tags}
          filename={wallpaper.filename}
          date_created={wallpaper.date_created}
          date_updated={wallpaper.date_updated}
        />
      ))}
    </div>
  );
}
