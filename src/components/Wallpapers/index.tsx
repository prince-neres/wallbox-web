import api from "../../api";
import Wallpaper from "./Wallpaper";
import { WallpaperType } from "../../types";
import { useQuery } from "react-query";
import { useState } from "react";
import SearchInput from "./SearchInput";

interface WallpaperProps {
  IsPublic?: boolean;
}

export default function Wallpapers(props: WallpaperProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: wallpapers } = useQuery<WallpaperType[]>(
    ["wallpapers", searchQuery],
    () =>
      api
        .get(
          searchQuery
            ? `/search?query=${searchQuery}`
            : `/${props.IsPublic ? "wallpapers" : "user-wallpapers"}`
        )
        .then((res) => res.data)
  );

  return (
    <div className="flex flex-col gap-5 items-center">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {wallpapers?.length ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
          {wallpapers.map((wallpaper: WallpaperType) => (
            <Wallpaper
              key={wallpaper.id}
              id={wallpaper.id}
              user={wallpaper.user}
              image={wallpaper.image}
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
      ) : (
        <p className="text-gray-500 text-center">
          Nenhum wallpaper encontrado :(
        </p>
      )}
    </div>
  );
}
