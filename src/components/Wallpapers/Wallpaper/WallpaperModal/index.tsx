import { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

interface ImageModalProps {
  src: string;
  alt: string;
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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

  const modalRoot = document.getElementById("modal-root");
  const portal = modalRoot ?? document.body;

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={handleImageClick}
        className="cursor-pointer select-none aspect-video rounded-t"
      />

      {showModal &&
        createPortal(
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center cursor-pointer"
            onClick={handleModalClose}
          >
            <div className="flex flex-col sm:w-2/3 mx-5 shadow-lg overflow-hidden items-center">
              <img
                src={src}
                alt={alt}
                className="select-none"
                onLoad={handleImageLoaded}
              />
              {imageLoaded && (
                <div className="w-36 flex justify-center items-center gap-2 group duration-200">
                  <ArrowDownTrayIcon className="text-white h-5 w-5 group-hover:text-gray-400 duration-200" />
                  <p
                    className="text-white text-center my-5 font-bold group-hover:text-gray-400 duration-200"
                    onClick={handleImageDownload}
                  >
                    Baixar
                  </p>
                </div>
              )}
            </div>
          </div>,
          portal
        )}
    </div>
  );
}
