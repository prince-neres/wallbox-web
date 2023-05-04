import WallpaperUpload from "../../components/WallpaperUpload";
import WallpaperEdit from "../../components/WallpaperEdit";

interface FormWallpaperProps {
  edit?: boolean;
}

export default function FormWallpaper(props: FormWallpaperProps) {
  return (
    <div className="w-full flex justify-center items-center">
      {props.edit ? <WallpaperEdit /> : <WallpaperUpload />}
    </div>
  );
}
