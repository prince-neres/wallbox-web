import api from "../../api/api";
import Wallpaper from "./Wallpaper";
import { WallpaperType, PaginatedResponse } from "../../types";
import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { useParams, Link } from "react-router-dom";

interface WallpaperProps {
  IsPublic?: boolean;
}

export default function Wallpapers(props: WallpaperProps) {
  const { page } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [wallpapers, setWallpapers] = useState<PaginatedResponse>({
    wallpapers: [],
    hasPreviousPage: false,
    hasNextPage: false,
  });
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(
        searchQuery
          ? `/${
              props.IsPublic ? "wallpapers" : "user-wallpapers"
            }?query=${searchQuery}&page=${page || 1}`
          : `/${props.IsPublic ? "wallpapers" : "user-wallpapers"}?page=${
              page || 1
            }`
      );
      setHasPreviousPage(res.data.hasPreviousPage);
      setHasNextPage(res.data.hasNextPage);
      setWallpapers(res.data);
    };
    fetchData();
  }, [page, props.IsPublic, searchQuery]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {wallpapers?.wallpapers?.length ? (
        <>
          <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
            {wallpapers?.wallpapers?.map((wallpaper: WallpaperType) => (
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
        </>
      ) : (
        <p className="text-gray-500 text-center">
          Nenhum wallpaper encontrado :(
        </p>
      )}
      <div className="flex justify-center gap-3 mt-5">
        {hasPreviousPage && (
          <Link
            to={
              Number(page) == 2
                ? "/wallpapers"
                : `/wallpapers/${Number(page) - 1}`
            }
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Anterior
          </Link>
        )}
        {hasNextPage && (
          <Link
            to={page ? `/wallpapers/${Number(page) + 1}` : "/wallpapers/2"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Próxima
          </Link>
        )}
      </div>
    </div>
  );
}
