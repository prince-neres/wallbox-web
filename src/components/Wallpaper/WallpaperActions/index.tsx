import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

interface WallpaperActionsProps {
  setShowDeleteConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  handleWallpaperEdit: () => void;
}

export default function WallpaperActions({
  handleWallpaperEdit,
  setShowDeleteConfirmation,
}: WallpaperActionsProps) {
  return (
    <span className="text-white flex justify-end gap-3 font-bold mb-3 px-6 sm:px-0">
      <span
        className="flex gap-1 bg-blue-500 p-2 hover:scale-105 rounded items-center cursor-pointer duration-100"
        onClick={handleWallpaperEdit}
      >
        <PencilIcon className="h-4 w-4" title="Editar" />
        <p>Editar</p>
      </span>

      <button
        className="flex gap-1 bg-red-500 p-2 hover:scale-105 rounded items-center cursor-pointer duration-100"
        onClick={() => setShowDeleteConfirmation(true)}
      >
        <TrashIcon className="h-4 w-4" title="Remover" />
        <p>Remover</p>
      </button>
    </span>
  );
}
