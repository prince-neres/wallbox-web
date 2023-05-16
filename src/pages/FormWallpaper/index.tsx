import WallpaperUpload from "../../components/WallpaperUpload";
import WallpaperEdit from "../../components/Wallpaper/WallpaperEditForm";

export default function FormWallpaper({ edit }: { edit?: boolean }) {
  return (
    <div className="w-full flex justify-center items-center">
      {edit ? <WallpaperEdit /> : <WallpaperUpload />}
    </div>
  );
}
