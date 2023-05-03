import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/reducers/userSlice";
import ToggleTheme from "./ToogleTheme";
import MobilMenu from "./MobleMenu";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex items-center md:items-center w-full h-auto justify-between">
      <div className="hidden sm:flex sm:flex-row p-8">
        <Link to="/" className={location.pathname === "/" ? "font-bold" : ""}>
          <p className="flex pr-5">Ínicio</p>
        </Link>

        {userInfo?.token ? (
          <>
            <Link
              to="/form-wallpaper"
              className={
                location.pathname === "/form-wallpaper" ? "font-bold" : ""
              }
            >
              <p className="pr-5">Enviar Wallpaper</p>
            </Link>
            <Link
              to="/profile"
              className={location.pathname === "/profile" ? "font-bold" : ""}
            >
              <p className="pr-5">Profile</p>
            </Link>
            <button type="button" onClick={handleLogout}>
              <p className="flex">Sair</p>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "font-bold" : ""}
          >
            <p className="flex pr-5">Login</p>
          </Link>
        )}
      </div>
      <MobilMenu />
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
