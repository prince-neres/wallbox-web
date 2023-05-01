import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/reducers/userSlice";
import ToggleTheme from "./ToogleTheme";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex items-center md:items-center  h-auto justify-between">
      <div className="hidden sm:flex sm:flex-row p-8">
        <Link to="/" className={location.pathname === "/" ? "font-bold" : ""}>
          <p className="flex pr-5">Ínicio</p>
        </Link>

        {userInfo?.token ? (
          <button type="button" onClick={handleLogout}>
            <p className="flex pr-5">Sair</p>
          </button>
        ) : (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "font-bold" : ""}
          >
            <p className="flex pr-5">Login</p>
          </Link>
        )}
      </div>
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
