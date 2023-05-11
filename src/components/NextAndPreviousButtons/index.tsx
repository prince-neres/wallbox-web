import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface NextAndPreviousButtonsProps {
  hasPreviousPage: boolean | undefined;
  hasNextPage: boolean | undefined;
  IsPublic: boolean;
  pages: number;
  page: number | undefined;
}

export default function NextAndPreviousButtons({
  hasPreviousPage,
  hasNextPage,
  IsPublic,
  pages,
  page,
}: NextAndPreviousButtonsProps) {
  const pagesItems: number[] = [];

  for (let p = 1; p <= pages; p++) {
    pagesItems.push(p);
  }

  return (
    <div className="flex justify-center items-center gap-3 mt-5 w-screen text:black dark:text-white">
      {hasPreviousPage && (
        <Link
          to={
            Number(page) == 2
              ? !IsPublic
                ? "/user-wallpapers"
                : "/wallpapers"
              : !IsPublic
              ? `/user-wallpapers/${Number(page) - 1}`
              : `/wallpapers/${Number(page) - 1}`
          }
          className="cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-zinc-800 rounded duration-200"
        >
          <ChevronLeftIcon className="w-6" />
        </Link>
      )}
      {pagesItems.map((item, index) => (
        <Link
          to={!IsPublic ? `/user-wallpapers/${item}` : `/wallpapers/${item}`}
          key={index}
          className={
            page === item
              ? "font-bold p-2 px-4 bg-cyan-300 rounded"
              : "p-2 px-4 hover:bg-gray-300 dark:hover:bg-zinc-800 rounded duration-200"
          }
        >
          {item}
        </Link>
      ))}
      {hasNextPage && (
        <Link
          to={
            page
              ? !IsPublic
                ? `/user-wallpapers/${Number(page) + 1}`
                : `/wallpapers/${Number(page) + 1}`
              : !IsPublic
              ? "/user-wallpapers/2"
              : "/wallpapers/2"
          }
          className="cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-zinc-800 rounded duration-200"
        >
          <ChevronRightIcon className="w-6" />
        </Link>
      )}
    </div>
  );
}
