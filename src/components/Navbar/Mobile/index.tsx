import ToggleButton from "./ToogleMenuButton";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../store/user/userSlice";
import { useCycle } from "framer-motion";
import { motion } from "framer-motion";
import Logo from "../Logo";

function MobileMenu() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleLogout = () => {
    dispatch(logout());
    toggleOpen();
  };

  const getClassnameOfNavItem = (route: string) => {
    const currentRoute = location.pathname.split("/")[1];
    return currentRoute === route ? "font-bold p-1" : "p-1";
  };

  return (
    <>
      <div className="sm:hidden items-center">
        <ToggleButton isOpen={isOpen} toggle={() => toggleOpen()} />
      </div>
      {isOpen ? (
        <motion.div
          className="sm:hidden py-5 flex flex-col mobile-menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          <Link
            to={"/"}
            className={getClassnameOfNavItem("")}
            onClick={() => toggleOpen()}
          >
            <p className="text-center">Sobre</p>
          </Link>
          <Link
            to={"wallpapers"}
            className={getClassnameOfNavItem("wallpapers")}
            onClick={() => toggleOpen()}
          >
            Wallpapers
          </Link>
          {userInfo?.token ? (
            <>
              <Link
                to={"/user-wallpapers"}
                className={getClassnameOfNavItem("user-wallpapers")}
                onClick={() => toggleOpen()}
              >
                Meus
              </Link>
              <Link
                to={"/form-wallpaper"}
                className={getClassnameOfNavItem("form-wallpaper")}
                onClick={() => toggleOpen()}
              >
                Enviar
              </Link>
              <Link
                to={"/profile"}
                className={getClassnameOfNavItem("profile")}
                onClick={() => toggleOpen()}
              >
                Perfil
              </Link>

              <button onClick={handleLogout}>Sair</button>
            </>
          ) : (
            <Link to={"/login"} className={getClassnameOfNavItem("login")}>
              Login
            </Link>
          )}
        </motion.div>
      ) : location.pathname !== "/" ? (
        <div className="w-auto">
          <Logo w={100} />
        </div>
      ) : null}
    </>
  );
}

const variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

export default MobileMenu;
