import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { selectUser } from "./redux/reducers/userSlice";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Base from "./pages/Base";
import Profile from "./pages/Profile";

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { userInfo } = useSelector(selectUser);
  return userInfo?.token ? children : <Navigate to="/login" replace />;
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
