import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const logado = false;

  return (
    <nav>
      <div>
        <Link to="/" className={location.pathname === "/" ? "" : ""}>
          <p>Ínicio</p>
        </Link>

        {logado ? (
          <>
            <Link
              to="/profile"
              className={location.pathname === "/profile" ? "" : ""}
            >
              <p className="">Perfil</p>
            </Link>
            <button type="button">
              <p>Sair</p>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "" : ""}
          >
            <p className="">Login</p>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
