import Wallpaper from "../../components/Wallpaper";
import { WallpaperType } from "../../types";
import { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getWallpapers } from "../../store/wallpapers/wallpapersApi";
import Loader from "../../components/Loader";

export default function Wallpapers({ IsPublic }: { IsPublic: boolean }) {
  const { page } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { wallpapers } = useSelector((state: RootState) => state);
  const { response, loading } = wallpapers;

  useEffect(() => {
    dispatch(getWallpapers(IsPublic, searchQuery, page));
  }, [page, IsPublic, searchQuery, dispatch]);

  return (
    <div className="flex flex-col gap-5 items-center flex-grow py-10">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <div className="flex flex-grow justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {response.wallpapers?.length ? (
            <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
              {response.wallpapers?.map((wallpaper: WallpaperType) => (
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
          ) : (
            <p className="text-gray-500 text-center">
              Nenhum wallpaper encontrado :(
            </p>
          )}
          <div className="flex justify-center gap-3 mt-5">
            {response.hasPreviousPage && (
              <Link
                to={
                  Number(page) == 2
                    ? !IsPublic
                      ? "/user-wallpapers"
                      : "/wallpapers"
                    : !IsPublic
                    ? `/user-wallpapers/${Number(page) - 1}`
                    : `/wallpapers/${Number(page) - 1}`
                }
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 cursor-pointer"
              >
                Anterior
              </Link>
            )}
            {response.hasNextPage && (
              <Link
                to={
                  page
                    ? !IsPublic
                      ? `/user-wallpapers/${Number(page) + 1}`
                      : `/wallpapers/${Number(page) + 1}`
                    : !IsPublic
                    ? "/user-wallpapers/2"
                    : "/wallpapers/2"
                }
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 cursor-pointer"
              >
                Próxima
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}
