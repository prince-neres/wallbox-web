import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../redux/reducers/userSlice";

function MobilMenu() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  const mobileMenuActive = () => {
    const menu = document.querySelector(".mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <>
      <div
        className="block sm:hidden items-center p-5"
        onClick={mobileMenuActive}
      >
        <button className="outline-none mobile-menu-button hover:text-dark-orange duration-200">
          <Bars3Icon className="h-10" />
        </button>
      </div>
      <div>
        <div className="sm:hidden flex-col py-5 mobile-menu">
          <Link
            to={"/"}
            className={location.pathname === "/" ? "font-bold" : ""}
          >
            <p className="text-center">Ínicio</p>
          </Link>

          {userInfo?.token ? (
            <>
              <Link
                to={"/form-wallpaper"}
                className={
                  location.pathname === "/form-wallpaper" ? "font-bold" : ""
                }
              >
                <p className="text-center pt-2">Enviar</p>
              </Link>
              <Link
                to={"/profile"}
                className={location.pathname === "/profile" ? "font-bold" : ""}
              >
                <p className="text-center pt-2">Perfil</p>
              </Link>

              <button onClick={handleLogout}>
                <p className="text-center pt-2">Sair</p>
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className={location.pathname === "/login" ? "font-bold" : ""}
            >
              <p className="text-center pt-2">Login</p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MobilMenu;
