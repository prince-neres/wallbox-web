export default function WallpaperSkeleton({
  is_public,
}: {
  is_public: boolean;
}) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-400 animate-pulse">
      <div className="px-6 py-4 flex flex-col justify-between h-full w-full">
        <div>
          <div className="mb-2 bg-gray-200 p-3" />
          <div className="mb-2">
            <span className="inline-block bg-gray-200 rounded-full px-10 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2" />
            <span className="inline-block bg-gray-200 rounded-full px-10 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2" />
            <span className="inline-block bg-gray-200 rounded-full px-10 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2" />
          </div>
          <div className="bg-gray-200 p-3" />
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 items-center">
            {is_public && (
              <div className="h-10 w-10 rounded-full bg-gray-200" />
            )}
            <p className="bg-gray-200 p-3	px-10" />
          </span>
          <p className="bg-gray-200 p-3	px-20	" />
        </div>
      </div>
    </div>
  );
}
