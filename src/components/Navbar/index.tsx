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

  console.log(userInfo);

  return (
    <nav>
      <div>
        <Link to="/" className={location.pathname === "/" ? "" : ""}>
          <p>Ínicio</p>
        </Link>

        {userInfo?.token ? (
          <button type="button" onClick={handleLogout}>
            <p>Sair</p>
          </button>
        ) : (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "" : ""}
          >
            <p className="">Login</p>
          </Link>
        )}
      </div>
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
