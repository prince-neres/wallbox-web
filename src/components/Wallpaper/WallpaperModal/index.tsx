import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import FavoriteButton from "./FavoriteButton";
import DownloadButton from "./DownloadButton";

type WallpaperModalProps = {
  wallpaper_id: number;
  alt: string;
  src: string;
  onCancel: () => void;
};

export default function WallpaperModal({
  wallpaper_id,
  alt,
  src,
  onCancel,
}: WallpaperModalProps) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-80">
      <div className="flex flex-col gap-3 sm:w-2/3 mx-5 items-center z-10 ">
        <XMarkIcon
          className="w-8 h-8 text-white cursor-pointer hover:text-gray-500 duration-200"
          onClick={onCancel}
        />
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={src} alt={alt} className="select-none max-h-[600px]" />
        </motion.div>
        <div className="w-36 flex justify-center items-center gap-2">
          <DownloadButton wallpaper_id={wallpaper_id} src={src} alt={alt} />
          <FavoriteButton wallpaper_id={wallpaper_id} />
        </div>
      </div>
    </div>
  );
}
