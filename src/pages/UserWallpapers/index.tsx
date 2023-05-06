import Wallpapers from "../Wallpapers";

export default function UserWallpapers() {
  return (
    <div className="flex-grow">
      <Wallpapers IsPublic={false} />
    </div>
  );
}
