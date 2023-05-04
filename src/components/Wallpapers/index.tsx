import api from "../../api";
import Wallpaper from "./Wallpaper";
import { WallpaperType } from "../../types";
import { useQuery } from "react-query";

interface WallpaperProps {
  IsPublic?: boolean;
}

export default function Wallpapers(props: WallpaperProps) {
  const { data: wallpapers } = useQuery<WallpaperType[]>("wallpapers", () =>
    api
      .get(`/${props.IsPublic ? "wallpapers" : "user-wallpapers"}`)
      .then((res) => res.data)
  );

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center items-center py-5">
      {wallpapers?.map((wallpaper: WallpaperType) => (
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
          is_public={props.IsPublic}
        />
      ))}
    </div>
  );
}
