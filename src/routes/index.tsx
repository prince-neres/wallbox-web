import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./private";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Base from "../pages/Base";
import Profile from "../pages/Profile";
import FormWallpaper from "../pages/FormWallpaper";
import UserWallpapers from "../pages/UserWallpapers";
import Home from "../pages/Home";
import Wallpapers from "../pages/Wallpapers";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route
            path="/wallpapers/:page?"
            element={<Wallpapers IsPublic={true} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user-wallpapers/:page?"
            element={
              <PrivateRoute>
                <UserWallpapers />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/form-wallpaper"
            element={
              <PrivateRoute>
                <FormWallpaper />
              </PrivateRoute>
            }
          />
          <Route
            path="/form-wallpaper/:id"
            element={
              <PrivateRoute>
                <FormWallpaper edit={true} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
