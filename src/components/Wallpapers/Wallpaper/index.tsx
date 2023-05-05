import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { WallpaperType } from "../../../types";
import { formatDate } from "../../../utils/scripts";
import ImageModal from "../WallpaperModal";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import { toast } from "react-toastify";
import ModalDeletion from "../../ModalDeletion";

export default function Wallpaper({
  id,
  image,
  title,
  description,
  tags,
  user,
  date_created,
  is_public,
}: WallpaperType) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
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
      {!is_public && (
        <span className="flex justify-end gap-2 mb-3">
          <span
            className="flex gap-1 text-blue-500  cursor-pointer"
            onClick={handleWallpaperEdit}
          >
            <PencilIcon className="h-6 w-6" title="Editar" />
            <p>Editar</p>
          </span>

          <span
            className="flex gap-1 text-red-500 cursor-pointer"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            <TrashIcon className=" h-6 w-6 " title="Remover" />
            <p>Remover</p>
          </span>
        </span>
      )}
      <div className="mx-5 sm:mx-0 sm:w-96 rounded shadow-lg">
        {showDeleteConfirmation && (
          <ModalDeletion
            title="Confirmar deleção?"
            onCancel={() => setShowDeleteConfirmation(false)}
            onConfirm={handleDelete}
          />
        )}

        <div className="flex flex-col justify-center items-center">
          <ImageModal src={image || ""} alt={title || ""} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between px-6 pb-4">
          <p>{user?.username}</p>
          <p>{date_created && formatDate(date_created)}</p>
        </div>
      </div>
    </div>
  );
}
