import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../store/user/userSlice";
import { useDispatch } from "react-redux";
import { PencilIcon } from "@heroicons/react/24/solid";
import { UserInfoType } from "../../../types";
import userDefaultImage from "../../../assets/user.png";

export default function UserDropDown({ user }: { user: UserInfoType }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="relative">
      <button
        className={`flex gap-1 p-2 justify-center items-center w-[100px] rounded ${
          isOpen &&
          "dark:bg-zinc-800 bg-gray-200 rounded-b-none text-black dark:text-white font-bold"
        }`}
        onClick={toggleMenu}
      >
        <img
          src={user.image || userDefaultImage}
          className="w-8 h-8 rounded-full"
        />
        {isOpen ? (
          <ChevronDownIcon className="w-6" />
        ) : (
          <ChevronUpIcon className="w-6" />
        )}
      </button>
      {isOpen && (
        <ul className="w-[100px] absolute top-full flex flex-col left-0 z-50 bg-gray-200 dark:bg-zinc-800 rounded-b">
          <Link
            onClick={toggleMenu}
            to="/profile"
            className="drop-down-menu-item"
          >
            <PencilIcon className="w-5" />
            Editar
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="drop-down-menu-item"
          >
            <ArrowLeftOnRectangleIcon className="w-6" />
            Sair
          </button>
        </ul>
      )}
    </div>
  );
}
