import { WallpaperType } from "../../../types";
import { useState } from "react";
import Loader from "../../Loader";

export default function Wallpaper({
  image,
  title,
  description,
  tags,
  user,
  date_created,
}: WallpaperType) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="mx-5 sm:mx-0 sm:w-96 rounded shadow-lg">
      {!imageLoaded && <Loader />}
      <img
        className="w-full"
        src={image}
        alt={title}
        onLoad={handleImageLoad}
      />
      <div className="px-6 py-4">
        <div className="font-bold mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags?.map((tag) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between px-6 pb-4">
        <p>{user?.username}</p>
        <p>{date_created}</p>
      </div>
    </div>
  );
}
