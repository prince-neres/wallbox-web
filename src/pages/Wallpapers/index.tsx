import Wallpaper from "../../components/Wallpaper";
import { WallpaperType } from "../../types";
import { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getWallpapers } from "../../store/wallpapers/wallpapersApi";
import Loader from "../../components/Loader";
import { motion } from "framer-motion";
import NextAndPreviousButtons from "../../components/NextAndPreviousButtons";

const container = {
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Wallpapers({ IsPublic }: { IsPublic: boolean }) {
  const { page } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { wallpapers } = useSelector((state: RootState) => state);
  const { response, loading } = wallpapers;

  useEffect(() => {
    dispatch(getWallpapers(IsPublic, searchQuery, page));
  }, []);

  const Search = () => {
    dispatch(getWallpapers(IsPublic, searchQuery, page));
  };

  return (
    <div className="flex flex-col gap-5 items-center flex-grow py-5 w-full">
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        Search={Search}
      />
      {loading ? (
        <div className="flex flex-grow justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {response.wallpapers?.length ? (
              <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
                {response.wallpapers?.map((wallpaper: WallpaperType, index) => (
                  <motion.li key={index} className="item" variants={item}>
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
                  </motion.li>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">
                Nenhum wallpaper encontrado :(
              </p>
            )}
          </motion.ul>
          <NextAndPreviousButtons
            hasNextPage={response?.hasNextPage}
            hasPreviousPage={response?.hasPreviousPage}
            IsPublic={IsPublic}
            page={Number(page)}
          />
        </>
      )}
    </div>
  );
}
