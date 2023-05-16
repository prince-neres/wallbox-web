import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { AddDownloadToWallpaper } from "../../../../store/wallpapers/wallpapersApi";
import { AppDispatch } from "../../../../store/store";

interface DownloadButtonProps {
  wallpaper_id: number;
  alt: string;
  src: string;
}

export default function DownloadButton({
  wallpaper_id,
  alt,
  src,
}: DownloadButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleImageDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    dispatch(AddDownloadToWallpaper(wallpaper_id));
  };
  return (
    <span
      className="flex flex-col justify-center items-center hover:text-white cursor-pointer duration-200"
      onClick={handleImageDownload}
    >
      <ArrowDownTrayIcon className="w-5 duration-200" />
      <p>Baixar</p>
    </span>
  );
}
