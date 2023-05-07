import { useState } from "react";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/20/solid";

type ModalDeletionProps = {
  alt: string;
  src: string;
  onCancel: () => void;
};

export default function ModalWallpaper({
  alt,
  src,
  onCancel,
}: ModalDeletionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-80">
      <div className="flex flex-col gap-3 sm:w-2/3 mx-5 shadow-lg items-center z-10 ">
        <XMarkIcon
          className="w-8 h-8 text-white cursor-pointer hover:text-gray-500 duration-200"
          onClick={onCancel}
        />
        <img
          src={src}
          alt={alt}
          className="select-none max-h-96"
          onLoad={handleImageLoaded}
        />
        {imageLoaded && (
          <div className="w-36 flex justify-center items-center gap-2 group duration-200">
            <ArrowDownTrayIcon className="text-white h-5 w-5 group-hover:text-gray-400 duration-200" />
            <p
              className="text-white text-center font-bold group-hover:text-gray-400 duration-200 cursor-pointer"
              onClick={handleImageDownload}
            >
              Baixar
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
