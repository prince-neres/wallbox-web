import ToggleButton from "./ToogleButton";
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

  return (
    <>
      <div className=" sm:hidden items-center">
        <ToggleButton isOpen={isOpen} toggle={() => toggleOpen()} />
      </div>
      <div>
        <div className="sm:hidden flex-col py-10 mobile-menu">
          {isOpen ? (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              <Link
                to={"/"}
                className={location.pathname === "/" ? "font-bold" : ""}
                onClick={() => toggleOpen()}
              >
                <p className="text-center">Sobre</p>
              </Link>
              <Link
                to={"/wallpapers"}
                className={
                  location.pathname === "/wallpapers" ? "font-bold" : ""
                }
                onClick={() => toggleOpen()}
              >
                <p className="text-center p-1">Wallpapers</p>
              </Link>
              {userInfo?.token ? (
                <>
                  <Link
                    to={"/user-wallpapers"}
                    className={
                      location.pathname === "/user-wallpapers"
                        ? "font-bold"
                        : ""
                    }
                    onClick={() => toggleOpen()}
                  >
                    <p className="text-center p-1">Meus</p>
                  </Link>
                  <Link
                    to={"/form-wallpaper"}
                    className={
                      location.pathname === "/form-wallpaper" ? "font-bold" : ""
                    }
                    onClick={() => toggleOpen()}
                  >
                    <p className="text-center p-1">Enviar</p>
                  </Link>
                  <Link
                    to={"/profile"}
                    className={
                      location.pathname === "/profile" ? "font-bold" : ""
                    }
                    onClick={() => toggleOpen()}
                  >
                    <p className="text-center p-1">Perfil</p>
                  </Link>

                  <button onClick={handleLogout}>
                    <p className="text-center p-1">Sair</p>
                  </button>
                </>
              ) : (
                <Link
                  to={"/login"}
                  className={location.pathname === "/login" ? "font-bold" : ""}
                >
                  <p className="text-center p-1">Login</p>
                </Link>
              )}
            </motion.div>
          ) : location.pathname !== "/" ? (
            <div className="w-auto">
              <Logo w={100} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
