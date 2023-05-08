import { Link } from "react-router-dom";

interface NextAndPreviousButtonsProps {
  hasPreviousPage: boolean | undefined;
  hasNextPage: boolean | undefined;
  IsPublic: boolean;
  page: number;
}

export default function NextAndPreviousButtons({
  hasPreviousPage,
  hasNextPage,
  IsPublic,
  page,
}: NextAndPreviousButtonsProps) {
  return (
    <div className="flex justify-center gap-3 mt-5">
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
          className="bg-cyan-600 hover:bg-cyan-500 duration-200 text-white font-bold p-3 cursor-pointer"
        >
          Anterior
        </Link>
      )}
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
          className="bg-cyan-600 hover:bg-cyan-500 duration-200 text-white font-bold p-3 cursor-pointer"
        >
          Próxima
        </Link>
      )}
    </div>
  );
}
