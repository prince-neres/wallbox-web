import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSlice";
import ToggleTheme from "./ToogleTheme";
import MobileMenu from "./Mobile";
import Logo from "./Logo";
import UserDropDown from "./UserDropDown";

function Navbar() {
  const location = useLocation();
  const { userInfo } = useSelector(selectUser);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  const getClassnameOfNavItem = (route: string) => {
    const currentRoute = location.pathname.split("/")[1];
    return route === currentRoute ? "nav-link-activate" : "nav-link-hover";
  };

  return (
    <nav className="flex items-center w-full h-auto justify-between sm:justify-around text-center select-none">
      <Link to="/" className="hidden sm:block">
        <Logo w={100} />
      </Link>
      <div className="hidden sm:flex sm:flex-row py-6 items-center justify-center">
        <Link to="/" className={getClassnameOfNavItem("")}>
          Sobre
        </Link>
        <Link to="/wallpapers" className={getClassnameOfNavItem("wallpapers")}>
          Wallpapers
        </Link>

        {userInfo?.token ? (
          <>
            <Link
              to="/user-wallpapers"
              className={getClassnameOfNavItem("user-wallpapers")}
            >
              Meus
            </Link>
            <Link
              to="/form-wallpaper"
              className={`mr-1 ${getClassnameOfNavItem("form-wallpaper")}`}
            >
              Enviar
            </Link>
            <UserDropDown user={userInfo} />
          </>
        ) : (
          <Link to="/login" className={getClassnameOfNavItem("login")}>
            Login
          </Link>
        )}
      </div>
      {isMobile && <MobileMenu />}
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
