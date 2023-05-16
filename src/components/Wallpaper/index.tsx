import { useState } from "react";
import { WallpaperType } from "../../types";
import ModalWallpaper from "./WallpaperModal";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import WallpaperModalDeletion from "./WallpaperModalDeletion";
import userDefaultImage from "../../assets/user.png";
import WallpaperActions from "./WallpaperActions";
import WallpaperStats from "./WallpaperStats";

const Wallpaper = ({
  id,
  image,
  title,
  tags,
  user,
  is_public,
  favorite_count,
  downloads,
}: WallpaperType) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showWallpaperModel, setShowWallpaperModel] = useState(false);
  const navigate = useNavigate();

  const handleWallpaperEdit = () => {
    navigate(`/form-wallpaper/${id}`);
  };

  const handleDelete = async () => {
    api
      .delete(`wallpaper/${id}`)
      .then((response) => {
        toast.success(response.data.message);
        navigate(`/user-wallpapers`);
      })
      .catch((error) => console.log(error));
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="flex flex-col">
      {showDeleteConfirmation && (
        <WallpaperModalDeletion
          title="Confirmar deleção?"
          onCancel={() => setShowDeleteConfirmation(false)}
          onConfirm={handleDelete}
        />
      )}
      {showWallpaperModel && (
        <ModalWallpaper
          wallpaper_id={id}
          src={image || ""}
          alt={title || ""}
          onCancel={() => setShowWallpaperModel(false)}
        />
      )}
      {!is_public && (
        <WallpaperActions
          handleWallpaperEdit={handleWallpaperEdit}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      )}
      <div
        className="mx-5 sm:mx-0 sm:w-96 relative cursor-pointer hover:scale-105 duration-100"
        onClick={() => setShowWallpaperModel(true)}
      >
        <img
          src={image}
          alt={title}
          className="cursor-pointer select-none rounded aspect-video "
        />

        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-200 bg-black backdrop-blur-sm bg-opacity-50">
          <div className="px-6 py-4 text-white flex flex-col justify-between w-full h-full">
            <div>
              <div className="line-clamp-1 mb-2">{title} </div>
              <div className="line-clamp-1 mb-2">
                {tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                {is_public && (
                  <img
                    src={user?.image || userDefaultImage}
                    className="h-10 w-10 rounded-full"
                  />
                )}
                <p className="line-clamp-1">{user?.username}</p>
              </span>
              <div className="relative z-50">
                <WallpaperStats
                  wallpaper_id={id}
                  favorite_count={favorite_count}
                  downloads={downloads}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
