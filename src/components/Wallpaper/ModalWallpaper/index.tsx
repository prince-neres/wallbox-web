import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

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
  const handleImageDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <LazyLoadImage
            src={src}
            alt={alt}
            effect="blur"
            className="select-none max-h-[600px] img-lazy"
          />
        </motion.div>
        <div className="w-36 flex justify-center items-center gap-2 group duration-200">
          <ArrowDownTrayIcon className="text-white h-5 w-5 group-hover:text-gray-400 duration-200" />
          <p
            className="text-white text-center font-bold group-hover:text-gray-400 duration-200 cursor-pointer"
            onClick={handleImageDownload}
          >
            Baixar
          </p>
        </div>
      </div>
    </div>
  );
}
