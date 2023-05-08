import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { WallpaperType } from "../../types";
import { formatDate } from "../../utils/scripts";
import ModalWallpaper from "./ModalWallpaper";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import ModalDeletion from "./ModalDeletion";
import userDefaultImage from "../../assets/user.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Wallpaper = ({
  id,
  image,
  title,
  tags,
  user,
  date_created,
  is_public,
  description,
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
        <ModalDeletion
          title="Confirmar deleção?"
          onCancel={() => setShowDeleteConfirmation(false)}
          onConfirm={handleDelete}
        />
      )}
      {showWallpaperModel && (
        <ModalWallpaper
          src={image || ""}
          alt={title || ""}
          onCancel={() => setShowWallpaperModel(false)}
        />
      )}
      {!is_public && (
        <span className="flex justify-end gap-3 mb-3 px-6">
          <span
            className="flex gap-1 text-blue-500 items-center cursor-pointer"
            onClick={handleWallpaperEdit}
          >
            <PencilIcon className="h-4 w-4" title="Editar" />
            <p>Editar</p>
          </span>

          <span
            className="flex gap-1 text-red-500 items-center cursor-pointer"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            <TrashIcon className="h-4 w-4" title="Remover" />
            <p>Remover</p>
          </span>
        </span>
      )}
      <div
        className="mx-5 sm:mx-0 sm:w-96 relative cursor-pointer"
        onClick={() => setShowWallpaperModel(true)}
      >
        <LazyLoadImage
          src={image}
          alt={title}
          effect="blur"
          className="cursor-pointer select-none aspect-video"
        />

        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-200 bg-black backdrop-blur-sm bg-opacity-50">
          <div className="px-6 py-4 text-white flex flex-col justify-between w-full h-full">
            <div>
              <div className="line-clamp-1 mb-2">{title}</div>
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
              <div className="line-clamp-1">{description}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                {is_public && (
                  <img
                    src={user?.image || userDefaultImage}
                    className="h-10 rounded-full"
                  />
                )}
                <p className="line-clamp-1">{user?.username}</p>
              </span>
              <p className="text-end">
                {date_created && formatDate(date_created)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
