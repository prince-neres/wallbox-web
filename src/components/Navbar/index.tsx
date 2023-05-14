import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/user/userSlice";
import ToggleTheme from "./ToogleTheme";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);
  const [isMobile, setIsMobile] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex items-center w-full h-auto justify-between sm:justify-around text-center">
      <Link to="/" className="hidden sm:block">
        <Logo w={110} />
      </Link>
      <div className="hidden sm:flex sm:flex-row p-8 items-center justify-center">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link-activate" : "nav-link-hover"
          }
        >
          <p className="p-3">Sobre</p>
        </Link>
        <Link
          to="/wallpapers"
          className={
            location.pathname.includes("/wallpapers")
              ? "nav-link-activate"
              : "nav-link-hover"
          }
        >
          <p className="p-3">Wallpapers</p>
        </Link>
        {userInfo?.token ? (
          <>
            <Link
              to="/user-wallpapers"
              className={
                location.pathname.includes("/user-wallpapers")
                  ? "nav-link-activate"
                  : "nav-link-hover"
              }
            >
              <p className="p-3">Meus</p>
            </Link>
            <Link
              to="/form-wallpaper"
              className={
                location.pathname === "/form-wallpaper"
                  ? "nav-link-activate"
                  : "nav-link-hover"
              }
            >
              <p className="p-3">Enviar</p>
            </Link>
            <Link
              to="/profile"
              className={
                location.pathname === "/profile"
                  ? "nav-link-activate"
                  : "nav-link-hover"
              }
            >
              <p className="p-3">Perfil</p>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="nav-link-hover"
            >
              <p className="p-3">Sair</p>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className={
              location.pathname === "/login"
                ? "nav-link-activate"
                : "nav-link-hover"
            }
          >
            <p className="p-3">Login</p>
          </Link>
        )}
      </div>
      {isMobile && <MobileMenu />}
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
