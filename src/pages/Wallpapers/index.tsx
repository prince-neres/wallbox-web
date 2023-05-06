import Wallpaper from "../../components/Wallpaper";
import { WallpaperType } from "../../types";
import { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getWallpapers } from "../../store/wallpapers/wallpapersApi";

export default function Wallpapers({ IsPublic }: { IsPublic: boolean }) {
  const { page } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { wallpapers, hasPreviousPage, hasNextPage } = useSelector(
    (state: RootState) => state.wallpapers.response
  );

  useEffect(() => {
    dispatch(getWallpapers(IsPublic, searchQuery, page));
  }, [page, IsPublic, searchQuery, dispatch]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {wallpapers?.length ? (
        <>
          <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
            {wallpapers?.map((wallpaper: WallpaperType) => (
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
                is_public={IsPublic}
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
